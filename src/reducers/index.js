import { combineReducers } from 'redux'
import loginReducer from './login'
import getTasksReducer from './tasks'
import getTaskReducer from './task'

const mainReducer = combineReducers({
    loginReducer,
    getTasksReducer,
    getTaskReducer
});

export default mainReducer;

