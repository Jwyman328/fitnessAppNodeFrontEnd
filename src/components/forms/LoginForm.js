import React, { useReducer, useContext, useEffect } from "react";

//context
import LoginContext from "../../pages/auth/authContext/loginContext";

//form components
import FormInput from "./formElements/FormInput";

/**
 * Login Form for logging in the user.
 */
function LoginForm() {
  const { loginState, loginDispatch } = useContext(LoginContext);
  const { email, password, token, isLoading, isLoggedIn, isError } = loginState;
  useEffect(() => {
    console.log(loginState);
  });
  return (
    <form className="formContainer">
      <FormInput
        placeholder="email"
        type="text"
        name="email"
        value={email}
        dataTestid="emailInput"
        dispatch={loginDispatch}
      />
      <FormInput
        placeholder="password"
        type="password"
        name="password"
        value={password}
        dataTestid="passwordInput"
        dispatch={loginDispatch}
      />
    </form>
  );
}

export default LoginForm;
