import { createStore,combineReducers ,applyMiddleware } from 'redux';
import { Assets } from './assets';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            assets : Assets,
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
};