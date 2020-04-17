import React, { useReducer, useEffect, useContext } from "react";

//actions and reducers
import signUpReducer from "../../reducers/signUpReducer";
import signUpAction from "../../actions/signUp";

// state data
import useLoginUserOnToken from "./customAuthHooks/useLogInUserOnToken";
import signUpInitialState from "../../initialState/signUpInitialState";

// card components
import AuthCardContainer from "../../components/cardComponents/AuthCardContainer";
import CardTitle from "../../components/cardComponents/CardTitle";
import CardSubHeader from "../../components/cardComponents/cardSubHeader";
import handleInputChange from "./helperFunctionsAuth/handleInputChange";
import SignUpForm from "../../components/forms/SignUpForm";
import FitnessHeartLogo from "../../components/logos/FitnessHeartLogo";
import SubmitDataButton from "../../components/cardComponents/SubmitDataButton";

// other components
import ErrorMessage from "../../components/messagesAboutProgramStatus/ErrorMessage";
import LoadingMessage from "../../components/messagesAboutProgramStatus/LoadingMessage";

//background
import RunningBackgroundVideo from "../../components/background/RunningBackgroundVideo";

//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

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

      <AuthCardContainer>
        <FitnessHeartLogo logoPositionSide={"right"} />
        <FitnessHeartLogo logoPositionSide={"left"} />
        <CardTitle titleText={"Fit Challenge"} />
        <CardSubHeader subHeaderText="Sign Up" />

        {isError ? (
          <ErrorMessage errorText="Error creating user, please try again" />
        ) : null}
        {isLoading ? (
          <LoadingMessage loadingText="loading" />
        ) : (
          <SignUpForm state={state} dispatch={dispatch} />
        )}
        <SubmitDataButton handleSubmit={handleClick} />
      </AuthCardContainer>
    </div>
  );
}

export default SignUpPage;
