import React, { useContext } from "react";
import handleAuthInputChange from "../../pages/auth/helperFunctionsAuth/handleAuthInputChange";

//form components
import AuthFormInput from "./formElements/AuthFormInput";

// context
import SignUpContext from "../../pages/auth/authContext/SignUpContext";

/**
 * Sign up Form for logging in the user.
 *
 */
function SignUpForm({ state, dispatch }) {
  const { signUpState, signUpDispatch } = useContext(SignUpContext);

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
  } = signUpState;

  return (
    <form className="formContainer">
      <AuthFormInput
        placeholder="email"
        type="text"
        name="email"
        value={email}
        dataTestid="emailInput"
        dispatch={signUpDispatch}
      />

      <AuthFormInput
        placeholder="First Name"
        type="text"
        name="firstName"
        value={firstName}
        dataTestid="firstNameInput"
        dispatch={signUpDispatch}
      />

      <AuthFormInput
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        dataTestid="firstNameInput"
        dispatch={signUpDispatch}
      />

      <AuthFormInput
        placeholder="password"
        type="password"
        name="password"
        value={password}
        dataTestid="passwordInput"
        dispatch={signUpDispatch}
      />

      <AuthFormInput
        placeholder="password2"
        type="password"
        name="password2"
        value={password2}
        dataTestid="passwordInput2"
        dispatch={signUpDispatch}
      />
    </form>
  );
}

export default SignUpForm;
