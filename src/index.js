/*eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import mainReducer from './reducers';

import thunk from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk, createLogger));
window.store = store;

window.handleGoogleApiLoaded = () => {
    const CLIENT_ID = '446462529509-038stitoe6c6o8cscchstk73ffg08edd.apps.googleusercontent.com';
    const SCOPES = 'https://www.googleapis.com/auth/tasks';
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"];
    gapi.load('client:auth2', () => {
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT_ID,
            scope: SCOPES
        }).then(function () {
            renderApp();
        })
    });
};

function renderApp() {
    ReactDOM.render(<Main store={store}/>, document.getElementById('root'));
}


