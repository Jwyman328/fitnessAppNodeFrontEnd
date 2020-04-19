import React, { useEffect } from "react";
import getCurrentGoals from "../../actions/currentFutureGoalsActions/getCurrentGoals";
import getFutureGoals from "../../actions/currentFutureGoalsActions/getFutureGoals";

/**
 * Fetch current and future goals and populate reducer with latest data.
 * @param {function} dispatch  -- dispatch function for current and future goals reducer
 * @param {string} token -- jwt token to make fetch request
 */
function useGetCurrentFutureGoals(dispatch, token) {
  useEffect(() => {
    getFutureGoals(dispatch, token);
    getCurrentGoals(dispatch, token);
  }, []);
}

export default useGetCurrentFutureGoals;
