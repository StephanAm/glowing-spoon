import * as types from '../actions/actionTypes'
export default function supplierReducer(state=[],action){
    switch(action.type){
        case types.GET_SUPPLIERS_SUCCESS:
            return action.suppliers;

        default:
            return state;
    }
}