import React, { useReducer, useEffect, useContext } from "react";
import signUpReducer from "../reducers/signUpReducer";
import handleInputAction from "../actions/handleInput";
import signUpAction from "../actions/signUp";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import signUpInitialState from '../initialState/signUpInitialState'
import {store} from '../store/globalStore'
import {getGlobalState, getGlobalDispatcher} from '../utils/helperFunctions'


function SignUpPage(props) {
  //global state

  const globalState = getGlobalState(useContext(store));
  const globalDispatch = getGlobalDispatcher(useContext(store));

  // signUp state
  const [state, dispatch] = useReducer(signUpReducer, signUpInitialState);
  const {email,password,password2,firstName,lastName,isLoading,isError,isLoggedIn,token} = state;

  useEffect(() =>{
    if (token){
      globalDispatch({type:'userLoggedIn',token: token})
  }
  })

  /**
   * Dispatch action to handle change of input value
   * @param {*} e -- event passed onChange
   */
  const handleChange = e => {
    dispatch(handleInputAction(e.target.name, e.target.value));
  };

  /**
   * Attempt to sign up a user.
   * 
   * Dispatch signup attempt.
   * Pass the current state and dispatcher and attempt to create 
   * a user.
   * @param {*} e -- click event.
   */
  const handleClick = e => {
    e.preventDefault();
    dispatch("signupAttempt");
    signUpAction(state,dispatch);
  };
  return (
    <div>
      sign up page
      {isLoggedIn? <Redirect to='/home'/> :null }
      {isError ? <div data-testid='errorMsg'>Error creating user, please try again</div> : null}
      {isLoading ? (
        <div> loading </div>
      ) : (
        <form>
          <label>
            email:
            <input
              data-testid='emailInput'
              type="text"
              name="email"
              value={email}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            First Name:
            <input
              data-testid='firstNameInput'
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            Last Name:
            <input
              data-testid='firstNameInput'
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            password:
            <input
              data-testid='passwordInput'
              type="password"
              name="password"
              value={password}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            password 2:
            <input
              data-testid='passwordInput2'
              type="password"
              name="password2"
              value={password2}
              onChange={e => handleChange(e)}
            />
          </label>
          <button data-testid='signUpButton' onClick={handleClick}>Submit</button>
        </form>
      )}

    </div>
  );
}

export default SignUpPage;
