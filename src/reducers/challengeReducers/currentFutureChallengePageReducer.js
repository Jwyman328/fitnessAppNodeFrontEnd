import React from 'react';

function currentFutureChallengeReducer(state, action){
    switch(action.type){
        case 'currentChallengesFetchAttempt':
            return {
                ...state,
                isLoadingCurrentChallenges:true,
                isErrorCurrentChallenges:false,
            }
        case 'futureChallengesFetchAttempt':
            return {
                ...state,
                isLoadingFutureChallenges:true,
                isErrorFutureChallenges:false,
            }
        case 'futureChallengesFetchError':
            return {
                ...state,
                isLoadingFutureChallenges:false,
                isErrorFutureChallenges:true,
            }
        case 'currentChallengesFetchError':
            return {
                ...state,
                isLoadingCurrentChallenges:false,
                isErrorCurrentChallenges:true,
            }
        case 'addFutureChallenges':
            return {
                ...state,
                isLoadingFutureChallenges:false,
                isErrorFutureChallenges:false,
                futureChallenges: action.futureChallenges,
            }
        case 'addCurrentChallenges':
            return {
                ...state,
                isLoadingCurrentChallenges:false,
                isErrorCurrentChallenges:false,
                currentChallenges: action.currentChallenges,
            }
        }
           
    

    return state
}

export default currentFutureChallengeReducer;