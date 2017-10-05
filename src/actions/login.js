/*eslint-disable */
import * as types from '../constants';

function authResolve(action) {
    return {
        type: types.LOGIN_RESOLVE,
        email: action.U3,
        name: action.ig,
        photo: action.Paa,
    }
};

function authReject() {
    return {
        type: types.LOGIN_REJECT,
    }
};

export const loginAction = () => {
    return function(dispatch) {
        gapi.auth2.getAuthInstance().signIn().then(function (response) {
            return dispatch(authResolve(response.w3))
        })
    }
};

export const logoutAction = () => {
    return function(dispatch) {
        gapi.auth2.getAuthInstance().signOut().then(function () {
            return dispatch(authReject())
        })
    }
};

export const getInitialState = () => {
    return function(dispatch) {
        gapi.auth2.getAuthInstance()
            .then(function(response){
                if(response.currentUser.Ab.w3) {
                    return dispatch(authResolve(response.currentUser.Ab.w3))
                }
            })
    }
};

