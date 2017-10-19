/*eslint-disable */
import * as types from '../constants';

function getList(tasks = [], id) {
    return {
        type: types.LOAD_TASK,
        tasks: tasks,
        tasksId: id,
        fetched: true,
    }
};

export const getTaskList = (id) => {
    return function(dispatch) {
        gapi.client.tasks.tasks.list({tasklist: id}).then(function (response) {
            return dispatch(getList(response.result.items, id))
        })
    }
};

export const deleteTask = (id, listId) => {
    console.log(listId);
    console.log(id);
    return function(dispatch) {
        gapi.client.tasks.tasks.delete({tasklist: listId, task: id, id: id}).then(function () {
            return dispatch(getTaskList(listId))
        })
    }
};

export const addTask = (listId) => {
    let taskName = prompt('Enter new task name');
        if (taskName) {
        return function(dispatch) {
            gapi.client.tasks.tasks.insert({tasklist: listId, title: taskName}).then(function () {
                return dispatch(getTaskList(listId))
            })
        }
    }
};

export const completeTask = (id, listId, status) => {
    if (status === 'completed') {
        status = 'needsAction';
    } else {
        status = 'completed';
    }
    return function(dispatch) {
            gapi.client.tasks.tasks.update({tasklist: listId, task: id, id: id, status: status}).then(function () {
                return dispatch(getTaskList(listId))
            })
        }

};