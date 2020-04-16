import React, { useReducer } from "react";
import handleInputChange from "../../pages/auth/helperFunctionsAuth/handleInputChange";

/**
 * Login Form for logging in the user.
 *
 * @param {*} state -- login page state
 * @param {*} dispatch -- login page dispatch
 */
function LoginForm({ state, dispatch }) {
  const { email, password, token, isLoading, isLoggedIn, isError } = state;

  return (
    <form className="formContainer">
      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="email"
            size="25"
            className="formInput"
            type="text"
            name="email"
            onChange={event => handleInputChange(event, dispatch)}
            value={email}
            data-testid="emailInput"
          />
        </label>
      </div>

      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="password"
            size="25"
            className="formInput"
            type="password"
            name="password"
            onChange={event => handleInputChange(event, dispatch)}
            value={password}
            data-testid="passwordInput"
          />
        </label>
      </div>
    </form>
  );
}

export default LoginForm;
