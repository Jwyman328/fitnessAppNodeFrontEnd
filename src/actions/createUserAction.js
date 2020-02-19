import React from 'react';
import signUpAction from './signUp'

function createUserAction(state){
    // check passwrods match 
    const {email,password, password2,firstName,lastName,isLoading, isError, isLoggedIn,token} = state;

    if (password !== password2){
        return({type:'signUpError'})
    }else{
        // try to create, if token then success else error 
        signUpAction(email,password)
    }
    
    return{type:createUser}
}

export default createUserAction;