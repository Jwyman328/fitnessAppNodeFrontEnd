import React, {useReducer} from 'react'
const signUpInitialState = {
    email:'',
    password:'',
    password2:'',
    firstName:'',
    lastName:'',
    isLoading:false,
    isError:false,
    isLoggedIn:false,
    token:''
}

function signUpReducer(state, action){
    switch(action.type){
        case 'signUpAttempt':
            return {
                ...state,
                isLoading:true,
            }
        case 'signUpSuccess':
            return {
                ...state,
                isLoading: false,
                isError:false,
            }
    }

    return state
}

