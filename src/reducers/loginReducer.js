import React, {useReducer} from 'react'


function loginReducer(state, action){
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
                token: action.token,
                isLoggedIn: true,
            }
        case 'signUpError':
            return {
                ...state,
                email:'',
                password:'',
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

export default loginReducer;

