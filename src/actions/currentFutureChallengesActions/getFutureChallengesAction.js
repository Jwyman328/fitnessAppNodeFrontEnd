//getPastChallenges
import React from "react";
import axios from "axios";
import { removeTimeFromChallengeDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all future challenges.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getFutureChallenges(dispatch, token) {
  dispatch({ type: "futureChallengesFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/challengeInvitation/futureChallenges/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizedChallengeDateValues = removeTimeFromChallengeDateValues(
      response.data
    );
    dispatch({
      type: "addFutureChallenges",
      futureChallenges: sanitizedChallengeDateValues
    });
  } catch (error) {
    dispatch({ type: "futureChallengesFetchError" });
  }
}
export default getFutureChallenges;
