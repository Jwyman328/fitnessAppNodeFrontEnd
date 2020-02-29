import React from 'react';

function currentFutureGoalReducer(state, action){

    switch(action.type){
        case 'currentGoalsFetchAttempt':
            return {
                ...state,
                isLoadingCurrentGoals:true,
                isErrorCurrentGoals:false,
            }
        case 'futureGoalsFetchAttempt':
            return {
                ...state,
                isLoadingFutureGoals:true,
                isErrorFutureGoals:false,
            }
        case 'futureGoalsFetchError':
            return {
                ...state,
                isLoadingFutureGoals:false,
                isErrorFutureGoals:true,
            }
        case 'currentGoalsFetchError':
            return {
                ...state,
                isLoadingCurrentGoals:false,
                isErrorCurrentGoals:true,
            }
        case 'addFutureGoals':
            return {
                ...state,
                isLoadingFutureGoals:false,
                isErrorFutureGoals:false,
                futureGoals: action.futureGoals,
            }
        case 'addCurrentGoals':
            return {
                ...state,
                isLoadingCurrentGoals:false,
                isErrorCurrentGoals:false,
                currentGoals: action.currentGoals,
            }
        }
           
    

    return state
}

export default currentFutureGoalReducer;