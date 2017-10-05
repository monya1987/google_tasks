import * as types from '../constants';

const initialState = {
    tasks: [],
    fetching: false
};

function getTaskReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TASK:
            return Object.assign({}, state, {
                tasks: action.tasks
            })
        default:
            return state
    }
}

export default getTaskReducer