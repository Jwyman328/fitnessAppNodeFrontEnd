import React from 'react'

function pendingChallengePageReducer(state,action){
    switch(action.type){
        case 'addPendingChallenges':
            return {
                ...state,
                isError:false,
                isLoading:false,
                pendingChallenges: action.pendingChallenges,
            }
        case 'pendingChallengesFetchAttempt':
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case 'pendingChallengesFetchError':
            return{
                ...state,
                isLoading: false,
                isError:true,
            }
        case 'pendingChallengeUpdateAttempt':
            return{
                ...state,
                updateisLoading: true,
                updateisError:false,
            }
        case 'pendingChallengeUpdateSuccess':{
            return {
                ...state,
                updateisLoading: false,
                updateisError:false,
            }
        }
        case 'pendingChallengesUpdateError':{
            return {
                ...state,
                updateisLoading:false,
                updateisError:true,
            }
        }
    }
    return state;

}

export default pendingChallengePageReducer;