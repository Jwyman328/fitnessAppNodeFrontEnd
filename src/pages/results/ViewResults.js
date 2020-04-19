import React, { useEffect, useReducer } from "react";

import initialState from "../../initialState/ViewResultsInitialState";
import viewResultsReducer from "../../reducers/viewResultsReducer";
import getDailyPoints from "../../actions/viewResultsActions/getDailyPoints";
import DailyPointsTable from "../../components/tables/DailyPointsTable";
import ResultsNavBar from "../../components/navBars/resultsNavBar";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

function ViewResults(props) {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(viewResultsReducer, initialState);
  const { dailyPoints } = state;

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

export default ViewResults;
