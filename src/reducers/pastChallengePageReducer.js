import React from 'react';

function pastChallengeReducer(state, action){

    switch(action.type){
        case 'pastChallengesFetchAttempt':
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        case 'pastChallengesFetchError':
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        case 'addPastChallenges':
            return {
                ...state,
                isLoading:false,
                isError:false,
                pastChallenges: action.pastChallenges,
            }
        }
           
    

    return state
}

export default pastChallengeReducer;