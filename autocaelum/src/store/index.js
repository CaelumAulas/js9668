import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { veiculosReducer } from './ducks/veiculos';

const store = createStore(
    combineReducers({
        veiculos: veiculosReducer
    }),
    applyMiddleware(thunk)
);

export default store;