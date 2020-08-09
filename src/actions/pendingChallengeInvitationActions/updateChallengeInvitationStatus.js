import React from "react";
import axios from "axios";
import getAllPendingChallengeInvitations from "./getAllPendingChallenges";

/**
 * Update individual challenge invitation status from pending to accepted or rejected.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 * @param {String} id  -- challenge invitation unique id.
 * @param {String} newStatus -- selected status to be the challenge invitation's new status.
 *
 */
async function updateChallengeInvitationStatus(dispatch, token, id, newStatus) {
  dispatch({ type: "pendingChallengeUpdateAttempt" });
  const config = {
    data: { Authorization: `Bearer ${token}`, status: newStatus },
    headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
    key: "value"
  };
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_MAINURL}/challengeInvitations/${id}/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
    );
    // if succesful dispatch success
    dispatch({ type: "pendingChallengeUpdateSuccess" });
    // get the new pending challenges
    getAllPendingChallengeInvitations(dispatch, token);
  } catch (error) {
    dispatch({ type: "pendingChallengesUpdateError" });
  }
}
export default updateChallengeInvitationStatus;
