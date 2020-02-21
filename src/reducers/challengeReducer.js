import React from 'react'

function challengeReducer(state, action){
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
        case 'createChallengeSuccess':
            return {
                ...state,
                isSuccess: true,
                isError:false,
            }
        case 'createChallengeError':
            return {
                ...state,
                isSuccess: false,
                isError:true,
                isLoading:false,
            }
        case 'createChallengeAttempt':
            return {
                ...state,
                isSuccess:false,
                isError:false,
                isLoading:true,
            }
    }
    return state
}

export default challengeReducer;