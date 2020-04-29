import React from "react";
import axios from "axios";
import { removeTimeFromActivityPointDateValues } from "../../utils/helperFunctions";

/**
 * Fetch all daily point inputs.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getTodaysPoints(dispatch, token) {
  dispatch({ type: "todaysPointsFetchAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/todaysPoints/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizedActivityPointValues = removeTimeFromActivityPointDateValues(
      response.data
    );
    dispatch({
      type: "addTodaysPoints",
      todaysPoints: sanitizedActivityPointValues[0]
    });
  } catch (error) {
    dispatch({ type: "todaysPointsFetchError" });
  }
}
export default getTodaysPoints;
