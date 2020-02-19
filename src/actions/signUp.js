
import React from 'react';
import axios from 'axios'
// an action is just a function that returns an object 
// put up my mongo db server to heroku.
//http://localhost:3001/
//http://enigmatic-springs-36428.herokuapp.com

async function signUpAction(state){
    const {email,password, password2,firstName,lastName,isLoading, isError, isLoggedIn,token} = state;

    if (password !== password2){
        return({type:'signUpError'})
    }else{
        // try to create, if token then success else error
        try{
            // dispatch action of loading?
            const signUpDataStringify = JSON.stringify({email:email,password:password})
            const response = await axios.post('http://localhost:3000/user/create/',{method:'POST',data:signUpDataStringify,
            headers:{ 'Content-Type': 'application/json'}})
            
            // if succesful dispatch success
            console.log(response.data)
            return{type:'signUpSuccess'}
        }catch(error){
            // dispatch error 
        }
}
}
export default signUpAction;