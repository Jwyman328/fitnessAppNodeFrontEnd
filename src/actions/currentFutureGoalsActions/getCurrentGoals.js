import React from "react";
import axios from "axios";
import { removeTimeFromActivityPointDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all current goals.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getCurrentGoals(dispatch, token) {
  dispatch({ type: "currentGoalsFetchAttempt" });

  const config = {
    data: { Authorization: `Bearer ${token}` },
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/currentGoals/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
    );
    const sanitizesGoalDateValues = removeTimeFromActivityPointDateValues(
      response.data
    );
    console.log(sanitizesGoalDateValues, "santa");
    dispatch({
      type: "addCurrentGoals",
      currentGoals: sanitizesGoalDateValues
    });
  } catch (error) {
    dispatch({ type: "currentGoalsFetchError" });
  }
}
export default getCurrentGoals;
