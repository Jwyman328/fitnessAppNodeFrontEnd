import React from "react";
import axios from "axios";
import { removeTimeFromGoalObjectDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all future goals.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getfutureGoals(dispatch, token) {
  dispatch({ type: "futureGoalsFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/totalPointGoals/futureGoals/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const sanitizesGoalDateValues = removeTimeFromGoalObjectDateValues(
      response.data
    );

    dispatch({
      type: "addFutureGoals",
      futureGoals: sanitizesGoalDateValues
    });
  } catch (error) {
    dispatch({ type: "futureGoalsFetchError" });
  }
}
export default getfutureGoals;
