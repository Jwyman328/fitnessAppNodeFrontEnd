import React, { useEffect, useReducer } from "react";

import pastChallengePageReducer from "../../reducers/challengeReducers/pastChallengePageReducer";
import pastChallengeInitialState from "../../initialState/challenges_initial_state/pastChallengeInitialState";
import getPastChallenges from "../../actions/pastChallengesActions/getPastChallenges";
import ChallengeNavBar from "../../components/navBars/challengeNavBar";
import "../../components/tables/DailyPointsTable.scss";
import ChallengeTable from "../../components/tables/fullTables/ChallengeTable";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

//ErrorMessage Components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";
import ReturnLoadingMsgOnLoading from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnLoadingMsgOnLoading";

/**
 * Display all past challenges in a table.
 */
function PastChallenges() {
  const { globalState } = useGlobalState();

  const [pastChallengesPageState, dispatch] = useReducer(
    pastChallengePageReducer,
    pastChallengeInitialState
  );
  const { isLoading, isError, pastChallenges } = pastChallengesPageState;

  useEffect(() => {
    getPastChallenges(dispatch, globalState.token);
  }, [globalState.token]);

  return (
    <div className="rulePageContainer">
      <ChallengeNavBar />
      <h1>Past challenges</h1>
      {pastChallenges ? (
        <ChallengeTable challengeData={pastChallenges} />
      ) : null}

      <ReturnLoadingMsgOnLoading
        isLoading={isLoading}
        loadingMsg="loading past challenges"
      />
      <ReturnErrorMsgOnError
        isError={isError}
        errorMsg="Error loading past challenges"
      />
    </div>
  );
}

export default PastChallenges;
