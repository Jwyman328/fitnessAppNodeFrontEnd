import React, {useReducer, useEffect} from 'react';
import loginReducer from '../reducers/loginReducer'
import loginAction from '../actions/loginUser'
import handleInputAction from "../actions/handleInput";
import {  Redirect } from "react-router-dom";
import initialState from '../initialState/loginInitialState'

function LoginPage(props) {
    //set up a reducer
    // [state,dispatch] = useReducer(reducer,initialState)
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const {email,password,token,isLoading,isLoggedIn,isError} = state;
    
    /**
     * Dispatch action that will make all input changes.
     * @param {*} e -- onChange event
     */
    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        dispatch(handleInputAction(e.target.name,  e.target.value))
    }
    /**
     * Attempt to log the entered user's data.
     * 
     * Dispatch a loginAttempt.
     * Send the current state and dispatcher to log the user in.
     * @param {*} e --onClick event
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'loginAttempt'})
        loginAction(state,dispatch)
        //action to login the user
    }

    return (
        <div>
            {isError? <div data-testid='errorMsg'>Error on login, please try again</div>: null}
            {isLoggedIn? <Redirect to='/home' /> :null}
            {isLoading? <div>Loading</div>: 
            <form>
                <label>
                    email:
                    <input type='text' name='email' onChange={handleChange} value={email} data-testid='emailInput' />
                </label>
                <label>
                    password:
                    <input type='password' name='password' onChange={handleChange} value={password} data-testid='passwordInput' />
                </label>
                <button onClick={handleSubmit} data-testid='submitButton'>Submit</button>
                
            </form>}
        </div>
    );
}

export default LoginPage;