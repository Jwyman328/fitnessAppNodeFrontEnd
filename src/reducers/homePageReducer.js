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
        case 'addPastMonthPointsDates':
            return {
                ...state,
                isLoading: false,
                isError:false,
                pastMonthPoints: action.pastMonthPoints,
                pastMonthDates: action.pastMonthDates
            }
        
    }
    return state;

}

export default homePageReducer;