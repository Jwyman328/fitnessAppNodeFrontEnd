import React, { useEffect, useReducer, useContext } from "react";
import { getGlobalState, dispatchInputChange } from "../../utils/helperFunctions";
import pendingChallengePageReducer from "../../reducers/pendingChallengesPageReducer";
import initialState from "../../initialState/pendingChallengesInitialState";
import getAllPendingChallengeInvitations from "../../actions/pendingChallengeInvitationActions/getAllPendingChallenges";
import { store } from "../../store/globalStore";
import createPendingChallengeRows from "../../components/tables/rows/pendingChallengeRow";
import ChallengeNavBar from '../../components/challengeNavBar'
import { Table } from "react-bootstrap";
import '../../components/tables/DailyPointsTable.css'
import PendingInvitationTableHead from '../../components/tables/heads/pendingInvitationsTableHead'


/**
 * Display user's pending challenges allowing user to accept or reject them.
 * @param {*} props
 */
function PendingChallengesPage(props) {
  const globalState = getGlobalState(useContext(store));
  const [state, dispatch] = useReducer(
    pendingChallengePageReducer,
    initialState
  );
  const {
    isLoading,
    isError,
    updateisLoading,
    updateisError,
    pendingChallenges
  } = state;

  useEffect(() => {
    getAllPendingChallengeInvitations(dispatch, globalState.token);
  }, []);

  return (
    <div>
      <ChallengeNavBar />
      Pending Challenges

      <div>
        {pendingChallenges.length > 0 ? (
          <Table className="tableContainer">
         <PendingInvitationTableHead />
          <tbody>
            {pendingChallenges.map(challengeInvitation =>
              createPendingChallengeRows(
                dispatch,
                globalState.token,
                challengeInvitation
              )
            )}
          </tbody>
        </Table>
         
        ) : <div data-testid='noPendingChallengesMsg'> You have no pending challenges </div>}
      </div>
      {isLoading ? <div>loading invitation challenges </div> : null}
      {updateisLoading ? <div data-testid='updateisLoading'>updating status</div> : null}
      {isError ? <div data-testid='isError'>error loading invitation challenges</div> : null}
      {updateisError ? (
        <div data-testid='updateisError'>error updating invitation challenge status</div>
      ) : null}
    </div>
  );
}

export default PendingChallengesPage;
