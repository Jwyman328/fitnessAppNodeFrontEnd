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

  const config = {
    data: { Authorization: `Bearer ${token}` },
    headers: { Authorization: `Bearer ${token}` }
  };
  // specific header format is key:value
  const bodyParameters = {
    key: "value"
  };
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/pastChallenges/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
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
