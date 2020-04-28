import React, { useEffect, useReducer } from "react";

import pendingChallengePageReducer from "../../reducers/challengeReducers/pendingChallengesPageReducer";
import initialState from "../../initialState/pendingChallengesInitialState";
import getAllPendingChallengeInvitations from "../../actions/pendingChallengeInvitationActions/getAllPendingChallenges";
import createPendingChallengeRows from "../../components/tables/rows/pendingChallengeRow";
import ChallengeNavBar from "../../components/navBars/challengeNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.css";
import PendingInvitationTableHead from "../../components/tables/heads/pendingInvitationsTableHead";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

//ErrorMessage Components
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";
import ReturnLoadingMsgOnLoading from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnLoadingMsgOnLoading";
import CustomMessage from "../../components/messagesAboutProgramStatus/CustomMessage";

/**
 * Display user's pending challenges allowing user to accept or reject them.
 */
function PendingChallengesPage() {
  const { globalState } = useGlobalState();
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
  }, [globalState.token]);

  return (
    <div className="rulePageContainer">
      <ChallengeNavBar />
      <h1>Pending Challenges</h1>

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
        ) : (
          <CustomMessage
            dataTestId="noPendingChallengesMsg"
            customMsg="You have no pending challenges"
          />
        )}
      </div>
      <ReturnLoadingMsgOnLoading
        isLoading={isLoading}
        loadingMsg="loading invitation challenges"
      />

      <ReturnLoadingMsgOnLoading
        isLoading={updateisLoading}
        loadingMsg="updating status"
      />

      <ReturnErrorMsgOnError
        isError={isError}
        errorMsg="error loading invitation challenges"
      />

      <ReturnErrorMsgOnError
        isError={updateisError}
        errorMsg="error updating invitation challenge status"
      />
    </div>
  );
}

export default PendingChallengesPage;
