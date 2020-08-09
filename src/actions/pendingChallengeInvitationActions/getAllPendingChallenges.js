import React from "react";
import axios from "axios";
import { removeTimeFromChallengeDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all pending challenge invitations for user.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getAllPendingChallengeInvitations(dispatch, token) {
  dispatch({ type: "pendingChallengesFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/challengeInvitations/pending`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizedChallengeDateValues = removeTimeFromChallengeDateValues(
      response.data
    );
    dispatch({
      type: "addPendingChallenges",
      pendingChallenges: sanitizedChallengeDateValues
    });
  } catch (error) {
    dispatch({ type: "pendingChallengesFetchError" });
  }
}
export default getAllPendingChallengeInvitations;
