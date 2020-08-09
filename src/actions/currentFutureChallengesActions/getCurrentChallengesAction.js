import React from "react";
import axios from "axios";
import { removeTimeFromChallengeDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all current challenges.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getCurrentChallenges(dispatch, token) {
  dispatch({ type: "currentChallengesFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/challengeInvitation/currentChallenges/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizedChallengeDateValues = removeTimeFromChallengeDateValues(
      response.data
    );
    dispatch({
      type: "addCurrentChallenges",
      currentChallenges: sanitizedChallengeDateValues
    });
  } catch (error) {
    dispatch({ type: "currentChallengesFetchError" });
  }
}
export default getCurrentChallenges;
