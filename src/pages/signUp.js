import React, { useReducer, useEffect } from "react";
import signUpReducer from "../reducers/signUpReducer";
import handleInputAction from "../actions/handleInput";
import signUpAction from "../actions/signUp";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const signUpInitialState = {
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    isLoading: false,
    isError: false,
    isLoggedIn: false,
    token: ""
  };

function SignUpPage(props) {

  const [state, dispatch] = useReducer(signUpReducer, signUpInitialState);
  const {email,password,password2,firstName,lastName,isLoading,isError,isLoggedIn,token} = state;

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
    console.log("clicked");
    dispatch("signupAttempt");
    signUpAction(state,dispatch);
  };
  return (
    <div>
      sign up page
      {isLoggedIn? <Redirect to='/home'/> :null }
      {isError ? <div> Error creating user, please try again </div> : null}
      {isLoading ? (
        <div> loading </div>
      ) : (
        <form>
          <label>
            email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => handleChange(e)}
            />
          </label>
          <label>
            password 2:
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={e => handleChange(e)}
            />
          </label>
          <button onClick={handleClick}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default SignUpPage;
