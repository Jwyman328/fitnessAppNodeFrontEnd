import React, { useReducer, useEffect, useContext } from "react";

// reducers and actions
import loginReducer from "../../reducers/loginReducer";
import loginAction from "../../actions/loginUser";
import handleInputAction from "../../actions/handleInput";

//routing
import { Redirect, Link, withRouter } from "react-router-dom";

// state data
import useLoginUserOnToken from "../../customHooks/customAuthHooks/useLogInUserOnToken";
import { store } from "../../store/globalStore";
import initialState from "../../initialState/loginInitialState";

//card components
import AuthCardContainer from "../../components/cardComponents/cardContainers/AuthCardContainer";
import FitnessHeartLogo from "../../components/logos/FitnessHeartLogo";
import CardTitle from "../../components/cardComponents/CardTitle";
import SubmitDataButton from "../../components/buttons/SubmitDataButton";
import LoginForm from "../../components/forms/LoginForm";
import handleAuthInputChange from "./helperFunctionsAuth/handleAuthInputChange";
import GuestUserLoginInfo from "../../components/cardComponents/GuesUserLoginInfo";

// other components
import LoadingMessage from "../../components/messagesAboutProgramStatus/LoadingMessage";

//message components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";

//background
import RunningBackgroundVideo from "../../components/background/RunningBackgroundVideo";

//context
import LoginContext from "./authContext/loginContext";

/**
 * Log in an existing user.
 * @param {*} props
 */
function LoginPage(props) {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, token, isLoading, isLoggedIn, isError } = state;
  useLoginUserOnToken(token);

  /**
   * Attempt to log the entered user's data.
   *
   * Dispatch a loginAttempt.
   * Send the current state and dispatcher to log the user in.
   * @param {*} e --onClick event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "loginAttempt" });
    loginAction(state, dispatch);
  };

  return (
    <LoginContext.Provider
      value={{ loginState: state, loginDispatch: dispatch }}
    >
      <div className="rulePageContainer -image-background">
        <RunningBackgroundVideo />

        <AuthCardContainer>
          <FitnessHeartLogo logoPositionSide={"right"} />
          <FitnessHeartLogo logoPositionSide={"left"} />
          <CardTitle titleText={"Fit Challenge"} />
          <GuestUserLoginInfo />

          <ReturnErrorMsgOnError
            isError={isError}
            errorMsg="Error on login, please try again"
          />

          {isLoggedIn ? <Redirect to="/home" /> : null}

          {isLoading ? (
            <LoadingMessage loadingText={"Loading"} />
          ) : (
            <LoginForm state={state} dispatch={dispatch} />
          )}
          <SubmitDataButton handleSubmit={handleSubmit} />
        </AuthCardContainer>
      </div>
    </LoginContext.Provider>
  );
}

export default withRouter(LoginPage);
