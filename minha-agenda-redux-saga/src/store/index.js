import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { contatosReducer } from './ducks/contatos';
import rootSaga from './saga';

// cria o middleware do saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        contatos: contatosReducer
    }),
    applyMiddleware(sagaMiddleware)
);

// roda a função generator que centraliza os watchers que devem ser monitorados
sagaMiddleware.run(rootSaga);

export default store;
