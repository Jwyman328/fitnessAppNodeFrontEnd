//getPastChallenges
import React from "react";
import axios from "axios";
import { removeTimeFromChallengeDateValues } from "../../utils/helperFunctions";
/**
 * Fetch all past challenges.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getPastChallenges(dispatch, token) {
  dispatch({ type: "pastChallengesFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/challengeInvitations/pastChallenges/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const sanitizedDatePastChallenges = removeTimeFromChallengeDateValues(
      response.data
    );
    dispatch({
      type: "addPastChallenges",
      pastChallenges: sanitizedDatePastChallenges
    });
  } catch (error) {
    dispatch({ type: "pastChallengesFetchError" });
  }
}
export default getPastChallenges;
