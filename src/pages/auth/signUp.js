import React, { useReducer } from "react";

//actions and reducers
import signUpReducer from "../../reducers/authReducers/signUpReducer";
import signUpAction from "../../actions/authActions/signUp";

// state data
import useLoginUserOnToken from "../../customHooks/customAuthHooks/useLogInUserOnToken";
import signUpInitialState from "../../initialState/auth_initial_state/signUpInitialState";

//context
import SignUpContext from "./authContext/SignUpContext";

// card components
import AuthCardContainer from "../../components/cardComponents/cardContainers/AuthCardContainer";
import CardTitle from "../../components/cardComponents/CardTitle";
import CardSubHeader from "../../components/cardComponents/cardSubHeader";
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
import { Redirect } from "react-router-dom";

/**
 * Show signup page to create a new user.
 */
function SignUpPage() {
  const [signUpPageState, dispatch] = useReducer(
    signUpReducer,
    signUpInitialState
  );
  const { isLoading, isError, isLoggedIn, token } = signUpPageState;

  /**
   * Log in a user once a valid token exists.
   */
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
    signUpAction(signUpPageState, dispatch);
  };

  return (
    <SignUpContext.Provider
      value={{ signUpState: signUpPageState, signUpDispatch: dispatch }}
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
            <SignUpForm state={signUpPageState} dispatch={dispatch} />
          )}
          <SubmitDataButton handleSubmit={handleClick} />
        </AuthCardContainer>
      </div>
    </SignUpContext.Provider>
  );
}

export default SignUpPage;
