import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/Dashboard/Dashboard';
import {createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import channelsReducer from './store/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware= createSagaMiddleware()
const store = createStore(channelsReducer, composeEnhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>
    ,
  document.getElementById('root')
);
