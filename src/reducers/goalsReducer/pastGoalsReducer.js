import React from 'react';

function pastGoalsReducer(state, action){

    switch(action.type){
        case 'pastGoalsFetchAttempt':
            return {
                ...state,
                isLoadingCurrentGoals:true,
                isErrorCurrentGoals:false,
            }

        case 'pastGoalsFetchError':
            return {
                ...state,
                isLoadingFutureGoals:false,
                isErrorFutureGoals:true,
            }

        case 'addPastGoals':
            return {
                ...state,
                isLoadingFutureGoals:false,
                isErrorFutureGoals:false,
                pastGoals: action.pastGoals,
            }
        }
           
    

    return state
}

export default pastGoalsReducer;