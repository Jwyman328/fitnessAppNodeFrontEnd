import React, { useReducer, useEffect, useContext } from "react";

// reducers and actions
import loginReducer from "../../reducers/loginReducer";
import loginAction from "../../actions/loginUser";
import handleInputAction from "../../actions/handleInput";

//routing
import { Redirect, Link, withRouter } from "react-router-dom";

// state data
import useLoginUserOnToken from "./customAuthHooks/useLogInUserOnToken";
import { store } from "../../store/globalStore";
import initialState from "../../initialState/loginInitialState";

//card components
import FitnessHeartLogo from "../../components/logos/FitnessHeartLogo";
import CardTitle from "../../components/cardComponents/CardTitle";
import SubmitDataButton from "../../components/cardComponents/SubmitDataButton";
import LoginForm from "../../components/forms/LoginForm";
import handleInputChange from "./helperFunctionsAuth/handleInputChange";
import GuestUserLoginInfo from "../../components/cardComponents/GuesUserLoginInfo";

//background
import RunningBackgroundVideo from "../../components/background/RunningBackgroundVideo";

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
    <div className="rulePageContainer -image-background">
      <RunningBackgroundVideo />

      <div className="containerRules smallCard login-opacity">
        <FitnessHeartLogo logoPositionSide={"right"} />
        <FitnessHeartLogo logoPositionSide={"left"} />
        <CardTitle titleText={"Fit Challenge"} />
        <GuestUserLoginInfo />

        {isError ? (
          <div data-testid="errorMsg">Error on login, please try again</div>
        ) : null}
        {isLoggedIn ? <Redirect to="/home" /> : null}
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <LoginForm state={state} dispatch={dispatch} />
        )}
        <SubmitDataButton handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
