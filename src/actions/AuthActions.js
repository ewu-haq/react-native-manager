import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGGGIN_IN
} from "../values/types";
import { EMPLOYEE_LIST_SCREEN } from "../values/screens";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { PerformResetNavigation } from "../helpers";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, navigation }) => {
  return dispatch => {
    loginInProgress(dispatch);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserAccess(dispatch, user, navigation))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserAccess(dispatch, user, navigation))
          .catch(() => loginUserFailed(dispatch));
      });
  };
};

const loginInProgress = dispatch => {
  console.log("logged in in progress");
  dispatch({
    type: LOGGGIN_IN
  });
};

const loginUserFailed = dispatch => {
  console.log("logged in failed");
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserAccess = (dispatch, user, navigation) => {
  console.log("logged in success");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  PerformResetNavigation(navigation, EMPLOYEE_LIST_SCREEN);
};
