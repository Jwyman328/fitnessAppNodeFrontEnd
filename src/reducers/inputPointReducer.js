import React, {useReducer} from 'react';

/**
 * Handle input point actions, altering inputPoint state.
 *  
 * @param {*} state 
 * @param {*} action 
 */
function InputPointReducer(state,action){

    switch(action.type){
        case 'inputPointSent':
            return {
                ...state,
                isLoading:true,
                isSuccess:false,
            }
        case 'inputPointSuccess':
            return {
                ...state,
                isLoading: false,
                isError:false,
                isSuccess:true,
            }
        case 'inputError':
            return{
                ...state,
                isError:true,
                isLoading:false,
                isSuccess:false,

            }
        case 'handleChange':
            return {
                ...state,
                [action.name]:action.value
            }
        case 'handleCheckbox':
            return{
                ...state,
                [action.name] :action.checked
            }
    }
    return state
}

export default InputPointReducer;