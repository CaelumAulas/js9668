import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import ContatoService from "../../services/ContatoService";

const ActionTypes = {
    /** Ações de inicialização das operações */
    LOAD_CONTATOS: 'contatos/LOAD',
    ADD_CONTATO: 'contatos/ADD',
    DELETE_CONTATO: 'contatos/DELETE',

    /** Ações de conclusão das operações */
    SET_CONTATOS: 'contatos/SET',
    ADDED_CONTATO: 'contatos/ADDED',
    DELETED_CONTATO: 'contatos/DELETED',
}

// Dados iniciais do Estado
const initialState = {
    data: [],
    status: ''
}

/* Reducer de gerenciamento de Contatos */
export function contatosReducer(state = initialState, action = {}) {
    switch(action.type) 
    {
        case ActionTypes.SET_CONTATOS :
            return {
                data: action.payload.contatos,
                status: 'LOADED'
            };

        case ActionTypes.ADDED_CONTATO : 
            return {
                data: [action.payload.contato, ...state.data],
                status: 'ADDED'
            };

        case ActionTypes.DELETED_CONTATO :
            state.data.splice(action.payload.index, 1);
            return {
                data: [...state.data],
                status: 'DELETED'
            };
        
        default:
            return state;
    }
}

/*
 * Action Creators
 * As ações retornadas por essas funções serão interceptadas pelos "watchers" que redirecionarão o 
 * fluxo para as funções "handler" as quais farão as operações assíncronas necessárias na aplicação
 */
export const loadContatos = () => ({ type: ActionTypes.LOAD_CONTATOS });
export const addContato = (contato) => ({ type: ActionTypes.ADD_CONTATO, payload: { contato } });
export const deleteContato = (index) => ({ type: ActionTypes.DELETE_CONTATO, payload: { index } });

/*
 * Handlers: Funções que irão executar as operações assíncronas (geralmente operadas pelos Services) 
 * e em seguida disparar a ação que irá de fato atualizar a store no redux
 */
function* handleGetContatos() {
    const contatos = yield call(ContatoService.getContatos);
    yield put({ type: ActionTypes.SET_CONTATOS, payload: { contatos } });
}

function* handleAddContato(action) {
    const { contato } = action.payload;
    yield call(ContatoService.addContato, contato);
    yield put({ type: ActionTypes.ADDED_CONTATO, payload: { contato } });
}

function* handleDeleteContato(action) {
    const { index } = action.payload;
    yield call(ContatoService.removeContato, index);
    yield put({ type: ActionTypes.DELETED_CONTATO, payload: { index } });
}

/*
 * Watchers: Funções que monitoram os disparos de determinadas ações e as interceptam
 * "redirecionando-as" para seus respectivos "handlers" para realização das operações assíncronas
 */
export function* watcherLoadContatos() {
    yield takeLatest(ActionTypes.LOAD_CONTATOS, handleGetContatos);
}

export function* watcherAddContato() {
    yield takeEvery(ActionTypes.ADD_CONTATO, handleAddContato);
}

export function* watcherDeleteContato() {
    yield takeEvery(ActionTypes.DELETE_CONTATO, handleDeleteContato);
}
