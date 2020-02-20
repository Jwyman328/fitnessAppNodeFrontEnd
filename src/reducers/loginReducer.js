import React, {useReducer} from 'react'


function loginReducer(state, action){
    switch(action.type){
        case 'loginAttempt':
            return {
                ...state,
                isLoading:true,
            }
        case 'loginSuccess':
            return {
                ...state,
                isLoading: false,
                isError:false,
                token: action.token,
                isLoggedIn: true,
            }
        case 'loginError':
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

