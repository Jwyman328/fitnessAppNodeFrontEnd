import React, { useEffect, useReducer } from "react";

import currentFutureChallengeReducer from "../../reducers/challengeReducers/currentFutureChallengePageReducer";

import currentFutureChallengesInitialState from "../../initialState/challenges_initial_state/currentFutureChallengesInitialState";
import getFutureChallenges from "../../actions/currentFutureChallengesActions/getFutureChallengesAction";
import getCurrentChallenges from "../../actions/currentFutureChallengesActions/getCurrentChallengesAction";

import ChallengeNavBar from "../../components/navBars/challengeNavBar";
import "../../components/tables/DailyPointsTable.scss";
import ChallengeTable from "../../components/tables/fullTables/ChallengeTable";

//ErrorMessage Components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";
import ReturnLoadingMsgOnLoading from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnLoadingMsgOnLoading";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

/**
 * Display all current and future challenges in a table.
 */
function CurrentFutureChallenges() {
  const { globalState } = useGlobalState();

  const [currentFutureChallengesPageState, dispatch] = useReducer(
    currentFutureChallengeReducer,
    currentFutureChallengesInitialState
  );
  const {
    isLoadingFutureChallenges,
    isErrorFutureChallenges,
    futureChallenges,
    currentChallenges,
    isLoadingCurrentChallenges,
    isErrorCurrentChallenges
  } = currentFutureChallengesPageState;

  /**
   * Fetch current and future challenges.
   */
  useEffect(() => {
    getCurrentChallenges(dispatch, globalState.token);
    getFutureChallenges(dispatch, globalState.token);
  }, [globalState.token]);

  return (
    <div data-testid="main" className="rulePageContainer">
      <ChallengeNavBar />
      <h2>current challenges</h2>
      {currentChallenges ? (
        <ChallengeTable challengeData={currentChallenges} />
      ) : null}

      <br></br>
      <h2>Future challenges</h2>

      {futureChallenges ? (
        <ChallengeTable challengeData={futureChallenges} />
      ) : null}

      <ReturnLoadingMsgOnLoading
        isLoading={isLoadingCurrentChallenges}
        loadingMsg="loading current challenges"
      />

      <ReturnErrorMsgOnError
        isError={isErrorCurrentChallenges}
        errorMsg="Error loading current challenges"
      />
      <ReturnLoadingMsgOnLoading
        isLoading={isLoadingFutureChallenges}
        loadingMsg="loading current challenges"
      />
      <ReturnErrorMsgOnError
        isError={isErrorFutureChallenges}
        errorMsg="Error loading future challenges"
      />
    </div>
  );
}

export default CurrentFutureChallenges;
