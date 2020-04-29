import React, { useReducer, useEffect } from "react";

//state
import challengeFormInitialState from "../../initialState/challengeInitialState";
import CreateChallenge from "../../actions/challengePageActions/createChallenge";
import challengeReducer from "../../reducers/challengeReducers/challengeReducer";

import getAllUsers from "../../actions/challengePageActions/getAllUsers";

//css
import "./submitButton.css";
import "../form.scss";

// general components
import ChallengeNavBar from "../../components/navBars/challengeNavBar";
import SubmitDataButton from "../../components/buttons/SubmitDataButton";
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

//form components
import CreateChallengeForm from "../../components/forms/CreateChallengeForm";

//message components
import ReturnSuccessMsgOnSuccess from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnSuccessMsgOnSuccess";
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";

//context
import CreateChallengeContext from "./challengeContext/CreateChallengeContext";

/**
 * Show challenge form to create a new challenge.
 */
function CreateChallengePage() {
  const { globalState } = useGlobalState();

  const [createChallengePageState, dispatch] = useReducer(
    challengeReducer,
    challengeFormInitialState
  );
  const {
    isSuccessCreateChallengeAttempt,
    isErrorCreateChallengeAttempt
  } = createChallengePageState;

  /**
   * Submit challenge state input to server to create a challenge.
   *
   * Dispatch that the attempt challenge creation has been attempted.
   * Attempt to create goal, passing dispatcher, current state, and user's token.
   * @param {Evemt} e - event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "createChallengeAttempt" });
    CreateChallenge(createChallengePageState, dispatch, globalState.token);
  };

  useEffect(() => {
    getAllUsers(dispatch, globalState.token);
  }, []);

  return (
    <CreateChallengeContext.Provider
      value={{
        createChallengeState: createChallengePageState,
        createChallengeDispatch: dispatch
      }}
    >
      <div className="rulePageContainer">
        <ChallengeNavBar />
        <UserCreateDataCardContainer>
          <h1>Create A Challenge</h1>

          <CreateChallengeForm />
          <SubmitDataButton handleSubmit={handleSubmit} />

          <ReturnSuccessMsgOnSuccess
            isSuccess={isSuccessCreateChallengeAttempt}
            successMsg="Challenge created successfully"
          />

          <ReturnErrorMsgOnError
            isError={isErrorCreateChallengeAttempt}
            errorMsg="Error creating challenge, please try again"
          />
        </UserCreateDataCardContainer>
      </div>
    </CreateChallengeContext.Provider>
  );
}

export default CreateChallengePage;
