import React from "react";
import axios from "axios";
import { removeTimeFromActivityPointDateValues } from "../../utils/helperFunctions";
import {
  getDatesForLast30Days,
  createMonthDatePointValue
} from "../../utils/helperFunctions";
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
      `${process.env.REACT_APP_MAINURL}/activityPoints/pastMonth/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const sanitizedActivityPointValues = removeTimeFromActivityPointDateValues(
      response.data
    );
    const pastThirtyDaysStrDateValues = getDatesForLast30Days();
    let arrayOfValuesWithDate = createMonthDatePointValue(
      pastThirtyDaysStrDateValues,
      sanitizedActivityPointValues
    );

    dispatch({
      type: "addPastMonthPointsDates",
      pastMonthPoints: Object.values(pastThirtyDaysStrDateValues).reverse(),
      pastMonthDates: Object.keys(pastThirtyDaysStrDateValues).reverse()
    });
  } catch (error) {
    dispatch({ type: "todaysPointsFetchError" });
  }
}
export default getTodaysPoints;
