import React from "react";
import axios from "axios";
import { removeTimeFromGoalObjectDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all current goals.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getPastGoals(dispatch, token) {
  dispatch({ type: "pastGoalsFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/pastGoals/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizesGoalDateValues = removeTimeFromGoalObjectDateValues(
      response.data
    );

    dispatch({ type: "addPastGoals", pastGoals: sanitizesGoalDateValues });
  } catch (error) {
    dispatch({ type: "pastGoalsFetchError" });
  }
}
export default getPastGoals;
