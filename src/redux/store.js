import { createStore, compose, applyMidleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    rootReducers,
    composeEnhacers(applyMidleware(thunk))
);

export default store;