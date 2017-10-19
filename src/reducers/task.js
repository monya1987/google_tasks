import * as types from '../constants';

const initialState = {
    tasks: [],
    tasksId: false,
    fetched: false,
};

function getTaskReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TASK:
            return Object.assign({}, state, {
                tasks: action.tasks,
                tasksId: action.tasksId,
                fetched: action.fetched,
            })
        default:
            return state
    }
}

export default getTaskReducer