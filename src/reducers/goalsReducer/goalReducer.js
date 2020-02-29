import React from 'react'

function goalReducer(state, action){
    switch(action.type){
        case 'handleChange':
            return {
                ...state,
                [action.name]:action.value
            }
        case 'handleCheckbox':
            return{
                ...state,
                [action.name] : action.checked
            }
        case 'createGoalSuccess':
            return {
                ...state,
                isSuccess: true,
                isError:false,
            }
        case 'createGoalError':
            return {
                ...state,
                isSuccess: false,
                isError:true,
                isLoading:false,
            }
        case 'createGoalAttempt':
            return {
                ...state,
                isSuccess:false,
                isError:false,
                isLoading:true,
            }
    }
    return state
}

export default goalReducer;