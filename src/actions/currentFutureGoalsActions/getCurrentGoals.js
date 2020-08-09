import React from "react";
import axios from "axios";
import { removeTimeFromGoalObjectDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all current goals.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getCurrentGoals(dispatch, token) {
  dispatch({ type: "currentGoalsFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/totalPointGoals/currentGoals/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizesGoalDateValues = removeTimeFromGoalObjectDateValues(
      response.data
    );
    dispatch({
      type: "addCurrentGoals",
      currentGoals: sanitizesGoalDateValues
    });
  } catch (error) {
    dispatch({ type: "currentGoalsFetchError" });
  }
}
export default getCurrentGoals;
