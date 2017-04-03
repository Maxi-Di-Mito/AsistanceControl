/**
 * Created by maximiliano.dimito on 1/10/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';



const initialState = window.__INITIAL_STATE__ || {};

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, initialState, middleware );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app'));


