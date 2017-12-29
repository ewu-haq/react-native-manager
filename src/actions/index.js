import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGGGIN_IN
} from '../values/types';
import firebase from 'firebase';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGGGIN_IN})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserAccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserAccess(dispatch, user))
            .catch(() => loginUserFailed(dispatch))
        });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
}

const loginUserAccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}