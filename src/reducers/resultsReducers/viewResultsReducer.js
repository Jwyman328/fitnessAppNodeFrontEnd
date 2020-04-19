import React from "react";

function viewResultsReducer(state, action) {
  switch (action.type) {
    case "addDailyPoints":
      return {
        ...state,
        isError: false,
        isLoading: false,
        dailyPoints: action.dailyPoints
      };
    case "dailyPointsFetchAttempt":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "dailyPointsFetchError":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
  }
  return state;
}

export default viewResultsReducer;
