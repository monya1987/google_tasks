import * as types from '../constants';

const initialState = {
    isLoggedIn: false,
    email: '',
    name: '',
    photo: ''
};

const loginReducer = (state = initialState, action) => {
    if (action.type === types.LOGIN_RESOLVE) {
        return Object.assign({}, state, {
            isLoggedIn: true,
            email: action.email,
            name: action.name,
            photo: action.photo,
        })
    }
    if (action.type === types.LOGIN_REJECT) {
        return Object.assign({}, state, {
            isLoggedIn: false,
            email: '',
            name: '',
            photo: '',
        })
    }
    return state
}

export default loginReducer