
import React from 'react';
import axios from 'axios'

/**
 * Login a currently existing user.
 * 
 * Dispatch appropriate type depending on login attempt results.
 * @param {*} state -- current state on submit of logIn page.
 * @param {*} dispatch -- login useReducer dispatcher.
 */
async function loginUser(state,dispatch){
    const {email,password,token,isLoading,isLoggedIn,isError} = state;

        try{
            const loginData = {email:email,password:password}
            const response = await axios.post('http://localhost:3001/user/login',{method:'POST',data:loginData,
            headers:{ 'Content-Type': 'application/json'}})
            // if succesful dispatch success
            const responseDataToken = await response.data.token
            dispatch({type:'loginSuccess', token:responseDataToken})
        }catch(error){
             dispatch({type:'loginError'})
        }
}

export default loginUser;