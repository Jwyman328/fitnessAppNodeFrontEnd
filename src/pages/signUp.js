import React, { useReducer } from 'react';
import signUpReducer from '../reducers/signUpReducer'
import handleInputAction from '../actions/handleInput'
import signUpAction from '../actions/signUp'

function SignUpPage(){
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
    const [state, dispatch] = useReducer(signUpReducer, signUpInitialState)
    const {email,password, password2,firstName,lastName,isLoading, isError, isLoggedIn,token} = state;

    /**
     * Dispatch action to handle change of input value
     * @param {*} e -- event passed onChange
     */
    const handleChange = (e) => {
        dispatch(handleInputAction(e.target.name,e.target.value))
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log('clicked')
        //check passwrods match
        dispatch('signupAttempt')
        dispatch(signUpAction(state))
        // dispatch attempt to verify all data 
        // send current state 
        //clear state back to empty strings 
    }
    return(
        <div>
            sign up page
            {isError?<div> Error creating user, please try again </div>: null}
            <form >
                <label>
                    email:
                    <input type='text' name='email' value={email} onChange={(e) => handleChange(e)}  />
                </label>
                <label>
                    password:
                    <input type='password' name='password' value={password} onChange={(e) => handleChange(e)}  />
                </label>
                <label>
                    password 2:
                    <input type='password' name='password2' value={password2} onChange={(e) => handleChange(e)}  />
                </label>
                <button onClick={handleClick}>Submit</button>

            </form>
        </div>
    )
}

export default SignUpPage;