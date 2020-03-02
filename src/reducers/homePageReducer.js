import React from 'react'

function homePageReducer(state,action){
    switch(action.type){
        case 'addTodaysPoints':
            return {
                ...state,
                isError:false,
                isLoading:false,
                todaysPoints: action.todaysPoints,
            }
        case 'todaysPointsFetchAttempt':
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case 'todaysPointsFetchError':
            return{
                ...state,
                isLoading: false,
                isError:true,
            }
        
    }
    return state;

}

export default homePageReducer;