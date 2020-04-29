import React from "react";
import axios from "axios";
import { removeTimeFromActivityPointDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all future goals.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getfutureGoals(dispatch, token) {
  dispatch({ type: "futureGoalsFetchAttempt" });

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
      `${process.env.REACT_APP_MAINURL}/futureGoals/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
    );
    const sanitizesGoalDateValues = removeTimeFromActivityPointDateValues(
      response.data
    );
    dispatch({
      type: "addFutureGoals",
      futureGoals: removeTimeFromActivityPointDateValues
    });
  } catch (error) {
    dispatch({ type: "futureGoalsFetchError" });
  }
}
export default getfutureGoals;
