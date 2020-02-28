import React, { useReducer, useEffect, useContext } from "react";
import loginReducer from "../../reducers/loginReducer";
import loginAction from "../../actions/loginUser";
import handleInputAction from "../../actions/handleInput";
import { Redirect, Link, withRouter } from "react-router-dom";
import initialState from "../../initialState/loginInitialState";

import { store } from "../../store/globalStore";
import {
  getGlobalState,
  getGlobalDispatcher
} from "../../utils/helperFunctions";

/**
 * Log in an existing user.
 * @param {*} props
 */
function LoginPage(props) {
  const globalState = getGlobalState(useContext(store));
  const globalDispatch = getGlobalDispatcher(useContext(store));

  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, token, isLoading, isLoggedIn, isError } = state;

  /**
   * Set the global state to the user being logged in.
   *
   * Only set global state once a token has been recieved back from the server.
   */
  useEffect(() => {
    if (token) {
      globalDispatch({ type: "userLoggedIn", token: token });
    }
  }, [token, globalState]);

  /**
   * Dispatch action that will make all input changes.
   * @param {*} e -- onChange event
   */
  const handleChange = e => {
    dispatch(handleInputAction(e.target.name, e.target.value));
  };
  /**
   * Attempt to log the entered user's data.
   *
   * Dispatch a loginAttempt.
   * Send the current state and dispatcher to log the user in.
   * @param {*} e --onClick event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "loginAttempt" });
    loginAction(state, dispatch);
    //action to login the user
  };

  return (
    <div className="rulePageContainer">
      <div className="containerRules">
        <h1>Login</h1>
        {isError ? (
          <div data-testid="errorMsg">Error on login, please try again</div>
        ) : null}
        {isLoggedIn ? <Redirect to="/home" /> : null}
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <form className="formContainer">
            <div className="formItem">
              <label className="formTitle">
                
                <input
                placeholder='email'
                  size="25"
                  className="formInput"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  data-testid="emailInput"
                />
              </label>
            </div>

            <div className="formItem">
              <label className="formTitle">
                
                <input
                placeholder='password'
                  size="25"
                  className="formInput"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  data-testid="passwordInput"
                />
              </label>
            </div>
          </form>
        )}
        <button
          className="formItem"
          onClick={handleSubmit}
          data-testid="submitButton"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
