import React, { useEffect, useReducer } from "react";

import ViewResultsInitialState from "../../initialState/ViewResultsInitialState";
import viewResultsReducer from "../../reducers/resultsReducers/viewResultsReducer";
import getDailyPoints from "../../actions/viewResultsActions/getDailyPoints";
import DailyPointsTable from "../../components/tables/DailyPointsTable";
import ResultsNavBar from "../../components/navBars/resultsNavBar";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

/**
 * Display a Table of all input activities.
 *
 * Allow user to navigate to each input activities graph.
 * Allow user to navigate to update each input activity.
 */
function ViewResultsTablePage() {
  const { globalState } = useGlobalState();

  const [ViewResultsState, dispatch] = useReducer(
    viewResultsReducer,
    ViewResultsInitialState
  );
  const { dailyPoints } = ViewResultsState;

  useEffect(() => {
    getDailyPoints(dispatch, globalState.token);
  }, [globalState.token]);

  return (
    <div className="rulePageContainer">
      <ResultsNavBar />
      <h1>Results</h1>
      {dailyPoints ? <DailyPointsTable pointData={dailyPoints} /> : null}
    </div>
  );
}

export default ViewResultsTablePage;
