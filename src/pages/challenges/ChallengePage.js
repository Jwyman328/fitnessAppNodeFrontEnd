import React, { useReducer, useContext, useEffect } from "react";

//state
import initialState from "../../initialState/challengeInitialState";
import CreateChallenge from "../../actions/challengePageActions/createChallenge";
import challengeReducer from "../../reducers/challengeReducers/challengeReducer";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";

import getAllUsers from "../../actions/challengePageActions/getAllUsers";
import ChallengeNavBar from "../../components/navBars/challengeNavBar";

//css
import "./submitButton.css";
import "../form.scss";

//form components
import CreateChallengeForm from "../../components/forms/CreateChallengeForm";
import UserCreateDataFormInput from "../../components/forms/formElements/UserCreateDataFormInput";
import FormRowLabel from "../../components/forms/formElements/FormRowLabel";
import FormRow from "../../components/forms/formElements/FormRow";
import SubmitDataButton from "../../components/buttons/SubmitDataButton";

//message components
import ErrorMessage from "../../components/messagesAboutProgramStatus/ErrorMessage";
import SuccessMessage from "../../components/messagesAboutProgramStatus/successMessage";

//context
import CreateChallengeContext from "./challengeContext/CreateChallengeContext";

function ChallengePage(props) {
  // global store containing the use token for making requests
  const globalState = getGlobalState(useContext(store));

  //goal's page reducer
  const [state, dispatch] = useReducer(challengeReducer, initialState);
  const {
    challengeStartDate,
    challengeEndDate,
    title,
    allUsers,
    selectedUsers,
    challengeType,
    isSuccess,
    isLoading,
    isError
  } = state;

  /**
   * Submit challenge state input to server to create a challenge.
   *
   * Dispatch that the attempt challenge creation has been attempted.
   * Attempt to create goal, passing dispatcher, current state, and user's token.
   * @param {*} e - event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "createChallengeAttempt" });
    CreateChallenge(state, dispatch, globalState.token);
  };
  let options = {};
  useEffect(() => {
    getAllUsers(dispatch, globalState.token);
  }, []);

  return (
    <CreateChallengeContext.Provider
      value={{ createChallengeState: state, createChallengeDispatch: dispatch }}
    >
      <div className="rulePageContainer">
        <ChallengeNavBar />
        <div className="containerRules smallCard">
          <h1>Create A Challenge</h1>

          <CreateChallengeForm />

          <SubmitDataButton handleSubmit={handleSubmit} />

          {isSuccess ? (
            <SuccessMessage successText="Challenge created successfully" />
          ) : null}
          {isError ? (
            <ErrorMessage errorText="Error creating challenge, please try again" />
          ) : null}
        </div>
      </div>
    </CreateChallengeContext.Provider>
  );
}

export default ChallengePage;
