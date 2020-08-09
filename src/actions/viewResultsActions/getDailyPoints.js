import React from "react";
import axios from "axios";
import { removeTimeFromActivityPointDateValues } from "../../utils/helperFunctions";
/**
 * Fetch all daily point inputs.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getDailyPoints(dispatch, token) {
  dispatch({ type: "dailyPointsFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/activityPoint/mine/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizedActivityPointValues = removeTimeFromActivityPointDateValues(
      response.data
    );
    dispatch({
      type: "addDailyPoints",
      dailyPoints: sanitizedActivityPointValues
    });
  } catch (error) {
    dispatch({ type: "dailyPointsFetchError" });
  }
}
export default getDailyPoints;
