/*eslint-disable */
import * as types from '../constants';

function getList(tasks) {
    // console.log(tasks);
    return {
        type: types.LOAD_TASK,
        tasks: tasks
    }
};

export const getTaskList = (id) => {
    return function(dispatch, getState) {
        // console.log(getState());
        gapi.client.tasks.tasks.list({tasklist: id}).then(function (response) {
            console.log(response.result.items)
            // return null;
            return dispatch(getList(response.result.items))
        })
    }
};