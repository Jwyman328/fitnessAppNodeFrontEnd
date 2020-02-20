
import React from 'react';
import axios from 'axios'
// an action is just a function that returns an object 
// put up my mongo db server to heroku.
//http://localhost:3001/
//http://enigmatic-springs-36428.herokuapp.com

/**
 * Create a user given the entered signup state.
 * 
 * Dispatch the recieved jwt token to the signUpReducer if user creation successful.
 * Dispatch signUpError if failure creating a user.
 * @param {object} state -- current state of signup submission attempt.
 * @param {*} dispatch  -- dispatcher sending an action object to the signUpReducer.
 */
async function signUpAction(state,dispatch){
    const {email,password, password2,firstName,lastName,isLoading, isError, isLoggedIn,token} = state;

    // check re-typed password compatability
    if (password !== password2){
        dispatch({type:'signUpError'})
    }else{
        try{
            const signUpData = {email:email,password:password}
            const response = await axios.post('http://localhost:3001/user/create/',{method:'POST',data:signUpData,
            headers:{ 'Content-Type': 'application/json'}})
            // if succesful dispatch success
            const responseDataToken = await response.data.token
            dispatch({type:'signUpSuccess', token:responseDataToken})
        }catch(error){
             dispatch({type:'signUpError'})
        }
}
}
export default signUpAction;