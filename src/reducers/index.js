import { combineReducers } from 'redux'
import loginReducer from './login'
import getTasksReducer from './tasks'
import getTaskReducer from './task'
import deleteTaskReducer from './task'
import addTaskReducer from './task'

const mainReducer = combineReducers({
    loginReducer,
    getTasksReducer,
    getTaskReducer,
    deleteTaskReducer,
    addTaskReducer,
});

export default mainReducer;

