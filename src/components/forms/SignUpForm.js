import React, { useReducer, useContext } from "react";
import handleInputChange from "../../pages/auth/helperFunctionsAuth/handleInputChange";

//form components
import FormInput from "./formElements/FormInput";

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
      <FormInput
        placeholder="email"
        type="text"
        name="email"
        value={email}
        dataTestid="emailInput"
        dispatch={signUpDispatch}
      />

      <FormInput
        placeholder="First Name"
        type="text"
        name="firstName"
        value={firstName}
        dataTestid="firstNameInput"
        dispatch={signUpDispatch}
      />

      <FormInput
        placeholder="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        dataTestid="firstNameInput"
        dispatch={signUpDispatch}
      />

      <FormInput
        placeholder="password"
        type="password"
        name="password"
        value={password}
        dataTestid="passwordInput"
        dispatch={signUpDispatch}
      />

      <FormInput
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
