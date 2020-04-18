import React, { useEffect, useContext, useReducer } from "react";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
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
  const { isError, isLoading, dailyPoints } = state;

  useEffect(() => {
    getDailyPoints(dispatch, globalState.token);
  }, []);

  return (
    <div className="rulePageContainer">
      <ResultsNavBar />
      <h1>Results</h1>
      {dailyPoints ? <DailyPointsTable pointData={dailyPoints} /> : null}
    </div>
  );
}

export default ViewResults;
