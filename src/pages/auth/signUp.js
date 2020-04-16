import React, { useReducer, useEffect, useContext } from "react";
import signUpReducer from "../../reducers/signUpReducer";
import signUpAction from "../../actions/signUp";
import useLoginUserOnToken from "./customAuthHooks/useLogInUserOnToken";
import RunningBackgroundVideo from "../../components/background/RunningBackgroundVideo";
import CardTitle from "../../components/cardComponents/CardTitle";
import CardSubHeader from "../../components/cardComponents/cardSubHeader";
import handleInputChange from "./helperFunctionsAuth/handleInputChange";
import SignUpForm from "../../components/forms/SignUpForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import signUpInitialState from "../../initialState/signUpInitialState";
import FitnessHeartLogo from "../../components/logos/FitnessHeartLogo";
import SubmitDataButton from "../../components/cardComponents/SubmitDataButton";

function SignUpPage(props) {
  const [state, dispatch] = useReducer(signUpReducer, signUpInitialState);
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

  useLoginUserOnToken(token);

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
    signUpAction(state, dispatch);
  };

  return (
    <div className="rulePageContainer -image-background">
      <RunningBackgroundVideo />
      {isLoggedIn ? <Redirect to="/home" /> : null}

      <div className="containerRules smallCard login-opacity ">
        <FitnessHeartLogo logoPositionSide={"right"} />
        <FitnessHeartLogo logoPositionSide={"left"} />
        <CardTitle titleText={"Fit Challenge"} />
        <CardSubHeader subHeaderText="Sign Up" />

        {isError ? (
          <div data-testid="errorMsg">
            Error creating user, please try again
          </div>
        ) : null}
        {isLoading ? (
          <div> loading </div>
        ) : (
          <SignUpForm state={state} dispatch={dispatch} />
        )}
        <SubmitDataButton handleSubmit={handleClick} />
      </div>
    </div>
  );
}

export default SignUpPage;
