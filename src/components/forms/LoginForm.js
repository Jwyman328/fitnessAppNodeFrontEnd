import React, { useContext } from "react";

//context
import LoginContext from "../../pages/auth/authContext/loginContext";

//form components
import AuthFormInput from "./formElements/AuthFormInput";

/**
 * Login Form for logging in the user.
 */
function LoginForm() {
  const { loginState, loginDispatch } = useContext(LoginContext);
  const { email, password } = loginState;

  return (
    <form className="formContainer">
      <AuthFormInput
        placeholder="email"
        type="text"
        name="email"
        value={email}
        dataTestid="emailInput"
        dispatch={loginDispatch}
      />
      <AuthFormInput
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
