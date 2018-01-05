import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from "../values/types";
import firebase from "firebase";
import { EMPLOYEE_LIST_SCREEN } from "../values/screens";
import {
  EMPLOYEE_USER_CREATING,
  EMPLOYEE_FETCH_SUCCESS
} from "../values/types";
import { PerformResetNavigation } from "../helpers";

export const employeesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
  return dispatch => {
    userCreationInProgress(dispatch);
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        userCreationComplete(dispatch);
        PerformResetNavigation(navigation, EMPLOYEE_LIST_SCREEN);
      });
  };
};

const userCreationComplete = dispatch => {
  dispatch({ type: EMPLOYEE_CREATE });
};
const userCreationInProgress = dispatch => {
  dispatch({
    type: EMPLOYEE_USER_CREATING
  });
};
