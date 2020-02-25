import React from 'react';

function updateActivityInputReducer(state, action){
    switch(action.type){
        case 'activityInputFetchAttempt':
            return{
                ...state,
                isLoadingActivityInput: true,
                isErrorActivityInput:false,
            }
        case 'activityInputFetchError':
            return{
                ...state,
                isLoadingActivityInput: false,
                isErrorActivityInput:true,
            }
        case 'addActivityInput':{
            return {
                ...state,
                isLoadingActivityInput: false,
                isErrorActivityInput:false,
                activityInput: action.activityInput,
            }
        }
        case 'activityInputUpdateAttempt':
            return {
                ...state,
                isLoadingUpdateActivityInput: true,
                isErrorUpdateActivityInput:false,
                upDateActivityInputSuccess:false,
            }
        case 'activityInputUpdateError':
            return {
                ...state,
                isLoadingUpdateActivityInput: false,
                isErrorUpdateActivityInput:true,
                upDateActivityInputSuccess:false,
            }
        case 'activityInputUpdateSuccess':
            return {
                ...state,
                isLoadingUpdateActivityInput: false,
                isErrorUpdateActivityInput:false,
                upDateActivityInputSuccess:true,
            }
        case 'handleChange':
            return {
                ...state,
                activityInput:{...state.activityInput,[action.name]:action.value }
            }
        case 'handleCheckbox':
            const copyState = {...state};
            const activityInput = copyState.activityInput
            const activityInputName = activityInput[action.name]
            return{
                ...state,
                activityInput:{...state.activityInput,[action.name]:action.checked }
            }
    }

    return state 
}

export default updateActivityInputReducer;