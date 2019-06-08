import {  createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from "../reducer/rootReducer";
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'

export default createStore(
    rootReducer, 
    applyMiddleware(thunk, logger)
    );