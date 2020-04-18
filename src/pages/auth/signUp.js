import React, { useReducer, useEffect, useContext } from "react";

//actions and reducers
import signUpReducer from "../../reducers/signUpReducer";
import signUpAction from "../../actions/signUp";

// state data
import useLoginUserOnToken from "./customAuthHooks/useLogInUserOnToken";
import signUpInitialState from "../../initialState/signUpInitialState";

//context
import SignUpContext from "./authContext/SignUpContext";

// card components
import AuthCardContainer from "../../components/cardComponents/cardContainers/AuthCardContainer";
import CardTitle from "../../components/cardComponents/CardTitle";
import CardSubHeader from "../../components/cardComponents/cardSubHeader";
import handleAuthInputChange from "./helperFunctionsAuth/handleAuthInputChange";
import SignUpForm from "../../components/forms/SignUpForm";
import FitnessHeartLogo from "../../components/logos/FitnessHeartLogo";
import SubmitDataButton from "../../components/buttons/SubmitDataButton";

// other components
import LoadingMessage from "../../components/messagesAboutProgramStatus/LoadingMessage";

//message components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";

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
    <SignUpContext.Provider
      value={{ signUpState: state, signUpDispatch: dispatch }}
    >
      <div className="rulePageContainer -image-background">
        <RunningBackgroundVideo />
        {isLoggedIn ? <Redirect to="/home" /> : null}

        <AuthCardContainer>
          <FitnessHeartLogo logoPositionSide={"right"} />
          <FitnessHeartLogo logoPositionSide={"left"} />
          <CardTitle titleText={"Fit Challenge"} />
          <CardSubHeader subHeaderText="Sign Up" />

          <ReturnErrorMsgOnError
            isError={isError}
            errorMsg="Error creating user, please try again"
          />
          {isLoading ? (
            <LoadingMessage loadingText="loading" />
          ) : (
            <SignUpForm state={state} dispatch={dispatch} />
          )}
          <SubmitDataButton handleSubmit={handleClick} />
        </AuthCardContainer>
      </div>
    </SignUpContext.Provider>
  );
}

export default SignUpPage;
