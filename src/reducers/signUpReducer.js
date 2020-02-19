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
    token:'',

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
        case 'signUpError':
            return {
                email:'',
                password:'',
                password2:'',
                firstName:'',
                lastName:'',
                isLoading:false,
                isError:true,
                isLoggedIn:false,
                token:''
            }
        case 'handleChange':
            return {
                ...state,
                [action.name]:action.value
            }
    }

    return state;
}

export default signUpReducer;

