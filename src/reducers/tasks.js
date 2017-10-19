import * as types from '../constants';

const initialState = {
    tasks: [],
    fetched: false,
};

function getTasksReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TASKS:
            return Object.assign({}, state, {
                tasks: action.tasks,
                fetched: action.fetched,
            })
        default:
            return state
    }
}

export default getTasksReducer