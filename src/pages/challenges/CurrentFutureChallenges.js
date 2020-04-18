import React, { useEffect, useReducer, useContext } from "react";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import currentFutureChallengeReducer from "../../reducers/challengeReducers/currentFutureChallengePageReducer";

import initialState from "../../initialState/currentFutureChallengesInitialState";
import getFutureChallenges from "../../actions/currentFutureChallengesActions/getFutureChallengesAction";
import getCurrentChallenges from "../../actions/currentFutureChallengesActions/getCurrentChallengesAction";

import ChallengeNavBar from "../../components/navBars/challengeNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.css";
import PastChallengesRow from "../../components/tables/rows/pastChallengesRow";
import PastChallengeTableHead from "../../components/tables/heads/pastChallengeTableHead";
import ChallengeTable from "../../components/tables/fullTables/ChallengeTable";

//ErrorMessage Components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";
import ReturnLoadingMsgOnLoading from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnLoadingMsgOnLoading";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

/**
 * Display all current and future challenges.
 * @param {*} props
 */
function CurrentFutureChallenges(props) {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(
    currentFutureChallengeReducer,
    initialState
  );
  const {
    isLoadingFutureChallenges,
    isErrorFutureChallenges,
    futureChallenges,
    currentChallenges,
    isLoadingCurrentChallenges,
    isErrorCurrentChallenges
  } = state;

  /**
   * Fetch current and future challenges.
   */
  useEffect(() => {
    getCurrentChallenges(dispatch, globalState.token);
    getFutureChallenges(dispatch, globalState.token);
  }, []);

  /**
   * Create an array of challenge cards from challenge data.
   *
   * @param {Array} challenges -- all challenge data.
   */
  const createChallengeCards = challenges => {
    const challengeCards = challenges.map(challenge =>
      PastChallengesRow(challenge)
    );
    return challengeCards;
  };

  return (
    <div data-testid="main" className="rulePageContainer">
      <ChallengeNavBar />
      <h2>current challenges</h2>
      <div>
        {currentChallenges ? (
          <ChallengeTable challengeData={currentChallenges} />
        ) : null}
      </div>

      <br></br>
      <h2>Future challenges</h2>

      <div>
        {futureChallenges ? (
          <ChallengeTable challengeData={futureChallenges} />
        ) : null}
      </div>

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
