import React from "react";
import axios from "axios";
/**
 * Fetch accumulated points for the range of dates of the selected goal.
 *
 * @param {Function} dispatch -- Graph goal dispatcher.
 * @param {String} token -- JWT token for authorization.
 * @param {Date} goalStartDate -- Goal start date.
 * @param {Date} goalEndDate -- Goal end date.
 */
async function fetchGoalTotalPoints(
  dispatch,
  token,
  goalStartDate,
  goalEndDate
) {
  dispatch({ type: "getTotalAccumulatedAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/goalPoints/${goalStartDate}/${goalEndDate}/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({
      type: "addGoalTotalPointsForDateRange",
      totalPointForDateRange: response.data.totalPointForDateRange
    });
  } catch (error) {
    dispatch({ type: "getTotalAccumulatedError" });
  }
}

export default fetchGoalTotalPoints;
