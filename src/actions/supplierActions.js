import * as types from './actionTypes';
import supplierApi from '../api/supplierApi';

export function getSuppliersSuccess(suppliers){
    var x = {type:types.GET_SUPPLIERS_SUCCESS,suppliers};
    return x;
}


export function loadSuppliers(){
    return function(dispatch){
        return supplierApi.GetSuppliers()
            .then(suppliers=>{
                dispatch(getSuppliersSuccess(suppliers));
            })
            .catch(error=>{throw(error);});
    }
}