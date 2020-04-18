import React, { useEffect, useReducer, useContext } from "react";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import pastChallengePageReducer from "../../reducers/challengeReducers/pastChallengePageReducer";
import initialState from "../../initialState/pastChallengeInitialState";
import getPastChallenges from "../../actions/pastChallengesActions/getPastChallenges";
import ChallengeNavBar from "../../components/navBars/challengeNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.css";
import PastChallengesRow from "../../components/tables/rows/pastChallengesRow";
import PastChallengeTableHead from "../../components/tables/heads/pastChallengeTableHead";
import ChallengeTable from "../../components/tables/fullTables/ChallengeTable";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

//ErrorMessage Components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";
import ReturnLoadingMsgOnLoading from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnLoadingMsgOnLoading";

/**
 * Display all past challenges.
 * @param {*} props
 */
function PastChallenges(props) {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(pastChallengePageReducer, initialState);
  const { isLoading, isError, pastChallenges } = state;

  useEffect(() => {
    getPastChallenges(dispatch, globalState.token);
  }, []);

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
