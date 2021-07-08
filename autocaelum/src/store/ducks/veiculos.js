import VeiculoService from "../../services/VeiculoService";

// Action Types
const ActionTypes = {
    LOAD_VEICULOS: 'veiculos/LOAD',
    ADD_VEICULO: 'veiculos/ADD',
    ERROR_VEICULO: 'veiculos/ERROR',
    DELETE_VEICULO: 'veiculos/DELETE'
}


// Reducer
const initialState = {
    data: [],
    error: '',
    status: ''
}

export function veiculosReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ActionTypes.LOAD_VEICULOS:
            return {
                data: action.payload.veiculos,
                error: '',
                status: 'LOADED'
            }

        case ActionTypes.ADD_VEICULO:
            return {
                data: [action.payload.veiculo, ...state.data],
                error: '',
                status: 'ADDED'
            }

        case ActionTypes.DELETE_VEICULO:
            return {
                data: [...state.data.filter(veiculo => veiculo.id !== action.payload.id)],
                error: '',
                status: 'DELETED'
            }

        case ActionTypes.ERROR_VEICULO:
            return {
                data: state.data,
                error: action.payload.error,
                status: ''
            }

        default:
            return state;
    }
}

// Action Creator
export const VeiculosThunkActions = {
    loadVeiculos(quantidade = 0, randomico = false) {
        return async function (dispatch) {
            try {
                const veiculos = await VeiculoService.getVeiculos(quantidade, randomico);
                dispatch({ type: ActionTypes.LOAD_VEICULOS, payload: { veiculos } });
            }
            catch (error) {
                dispatch({ type: ActionTypes.ERROR_VEICULO, payload: { error: error.message } });
            }
        }
    },

    addVeiculo(modelo, foto, preco, descricao) {
        return async function (dispatch) {
            try {
                const veiculo = await VeiculoService.addVeiculo(modelo, foto, preco, descricao);
                dispatch({ type: ActionTypes.ADD_VEICULO, payload: { veiculo } });
            }
            catch (error) {
                dispatch({ type: ActionTypes.ERROR_VEICULO, payload: { error: error.message } });
            }
        }
    },

    deleteVeiculo(id) {
        return async function (dispatch) {
            try {
                await VeiculoService.deleteVeiculo(id);
                dispatch({ type: ActionTypes.DELETE_VEICULO, payload: { id } });
            }
            catch (error) {
                dispatch({ type: ActionTypes.ERROR_VEICULO, payload: { error: error.message } });
            }
        }
    }
}