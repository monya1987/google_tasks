/*eslint-disable */
import * as types from '../constants';


function getList(tasks) {
    return {
        type: types.LOAD_TASKS,
        tasks: tasks,
        fetched: true,
    }
};


export const getTasksList = () => {
    return function(dispatch) {
            gapi.client.tasks.tasklists.list().then(
                response => {
                    return dispatch(getList(response.result.items))
                },
                error => null
            )
    }
};

export const createTasksList = () => {
    return function(dispatch) {
        let taskName = prompt('Enter new list name');
        if (taskName) {
            return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => {
            gapi.client.tasks.tasklists.insert({title: taskName})
                .then(function (response) {
                    return dispatch(getTasksList())
                })
            } ) );


        }
    }
};

export const removeTasksList = (id) => {
    return function(dispatch) {
        return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => {
            gapi.client.tasks.tasklists.delete({tasklist:id}).then(
                response => {
                    return dispatch(getTasksList())
                },
                error => {
                    alert(`Нельзя удалить список по умолчанию ${error.result.error.message}`)
                }

            )
        } ) );
    }
};



export const renameTasksList = (id) => {
    return function(dispatch) {
        let taskName = prompt('Enter new name');
        if (taskName) {
            return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => {
                gapi.client.tasks.tasklists.update({tasklist: id, title: taskName, id: id})
                    .then(function (response) {
                        return dispatch(getTasksList())
                    })
            }));
        }
    }
};

