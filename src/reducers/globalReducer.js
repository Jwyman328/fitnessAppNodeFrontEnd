import React from 'react';

/**
 * Global reducer accecting actions to alter the global state.
 * @param {*} state 
 * @param {*} action 
 */
function globalReducer(state,action){
    console.log('in action')

    switch(action.type){
        case('userLoggedIn'):
            console.log('in userlug', action.token)
            return {
            token:action.token,
            isLoggedIn:true,
        }
        case('userLoggedOut'):
            return{
            token:'',
            isLoggedIn:false,
        }
    }
    return state;
}

export default globalReducer;