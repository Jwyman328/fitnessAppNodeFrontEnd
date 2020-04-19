import React, { useEffect } from "react";
import getPastGoals from "../../actions/pastGoalsPAge/getPastGoals";

/**
 * Fetch past goals and populate reducer with latest data.
 * @param {function} dispatch  -- dispatch function for current and future goals reducer
 * @param {string} token -- jwt token to make fetch request
 */
function useGetPastGoals(dispatch, token) {
  useEffect(() => {
    getPastGoals(dispatch, token);
  }, []);
}

export default useGetPastGoals;
