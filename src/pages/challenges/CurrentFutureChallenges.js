import React, { useEffect, useReducer, useContext } from "react";
import { store } from "../../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../../utils/helperFunctions";
import currentFutureChallengeReducer from "../../reducers/challengeReducers/currentFutureChallengePageReducer";

import initialState from "../../initialState/currentFutureChallengesInitialState";
import getFutureChallenges from '../../actions/currentFutureChallengesActions/getFutureChallengesAction'
import getCurrentChallenges from '../../actions/currentFutureChallengesActions/getCurrentChallengesAction'

import ChallengeNavBar from '../../components/navBars/challengeNavBar'
import { Table } from "react-bootstrap";
import '../../components/tables/DailyPointsTable.css'
import PastChallengesRow from '../../components/tables/rows/pastChallengesRow'
import PastChallengeTableHead from '../../components/tables/heads/pastChallengeTableHead'

/**
 * Display all current and future challenges.
 * @param {*} props
 */
function CurrentFutureChallenges(props) {
  const globalState = getGlobalState(useContext(store));

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
    getFutureChallenges(dispatch, globalState.token)
  }, []);

  /**
   * Create an array of challenge cards from challenge data.
   * 
   * @param {Array} challenges -- all challenge data.
   */
  const createChallengeCards = (challenges) => {
    const challengeCards = challenges.map(challenge =>
      PastChallengesRow(challenge) );
    return challengeCards
  }

  return (
   <div className='rulePageContainer'>
    <ChallengeNavBar />
      <h2>current challenges</h2>
      <div>
      {currentChallenges ?
        <Table className="tableContainer" >
        <PastChallengeTableHead />
        <tbody>
            {createChallengeCards(currentChallenges)}
        </tbody>
        </Table>: null}
      </div>
        
      
      <br></br>
      <h2>Future challenges</h2>

      <div>
      {futureChallenges ?
        <Table className="tableContainer" >
        <PastChallengeTableHead />
        <tbody>
            {createChallengeCards(futureChallenges) }
        </tbody>
        </Table>: null}
      </div>

      {isLoadingCurrentChallenges ? <div>loading current challenges </div> : null}
      {isErrorCurrentChallenges ? (
        <div data-testid="isCurrentError">Error loading current challenges</div>
      ) : null}

{isLoadingFutureChallenges ? <div>loading current challenges </div> : null}
      {isErrorFutureChallenges ? (
        <div data-testid="isFutureError">Error loading future challenges</div>
      ) : null} 

      </div>
  );
}

export default CurrentFutureChallenges;
