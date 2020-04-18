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
// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

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

  const createPastChallengesRows = () => {
    const PastChallengesCards = pastChallenges.map(pastChallenge =>
      PastChallengesRow(pastChallenge)
    );
    return PastChallengesCards;
  };

  return (
    <div className="rulePageContainer">
      <ChallengeNavBar />
      <h1>Past challenges</h1>
      <div>
        {pastChallenges ? (
          <Table className="tableContainer">
            <PastChallengeTableHead />
            <tbody>{createPastChallengesRows()}</tbody>
          </Table>
        ) : null}
        {isLoading ? <div>loading past challenges </div> : null}
        {isError ? (
          <div data-testid="isError">Error loading past challenges</div>
        ) : null}
      </div>
    </div>
  );
}

export default PastChallenges;
