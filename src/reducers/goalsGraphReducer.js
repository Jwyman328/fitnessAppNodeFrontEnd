import React, {useReducer} from 'react'


function goalsGraphReducer(state, action){
    switch(action.type){
        case 'getTotalAccumulatedAttempt':
            return {
                ...state,
                isError:false,
                isLoading:true,
            }
        case 'getTotalAccumulatedError':
            return {
                ...state,
                isError:true,
                isloading:false,

            }
        case 'addGoalTotalPointsForDateRange':
            return {
                ...state,
                totalPointForDateRange: action.totalPointForDateRange,
                isError:false,
                isLoading:false,
            }
    }

    return state;
}

export default goalsGraphReducer;

