import React, { useReducer } from "react";
import handleInputChange from "../../pages/auth/helperFunctionsAuth/handleInputChange";

function SignUpForm({ state, dispatch }) {
  const {
    email,
    password,
    password2,
    firstName,
    lastName,
    isLoading,
    isError,
    isLoggedIn,
    token
  } = state;

  return (
    <form className="formContainer">
      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="email"
            size="25"
            className="formInput"
            data-testid="emailInput"
            type="text"
            name="email"
            value={email}
            onChange={event => handleInputChange(event, dispatch)}
          />
        </label>
      </div>

      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="First Name"
            size="25"
            className="formInput"
            data-testid="firstNameInput"
            type="text"
            name="firstName"
            value={firstName}
            onChange={event => handleInputChange(event, dispatch)}
          />
        </label>
      </div>

      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="Last Name"
            size="25"
            className="formInput"
            data-testid="firstNameInput"
            type="text"
            name="lastName"
            value={lastName}
            onChange={event => handleInputChange(event, dispatch)}
          />
        </label>
      </div>

      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="password"
            size="25"
            className="formInput"
            data-testid="passwordInput"
            type="password"
            name="password"
            value={password}
            onChange={event => handleInputChange(event, dispatch)}
          />
        </label>
      </div>
      <div className="formItem">
        <label className="formTitle">
          <input
            placeholder="password2"
            size="25"
            className="formInput"
            data-testid="passwordInput2"
            type="password"
            name="password2"
            value={password2}
            onChange={event => handleInputChange(event, dispatch)}
          />
        </label>
      </div>
    </form>
  );
}

export default SignUpForm;
