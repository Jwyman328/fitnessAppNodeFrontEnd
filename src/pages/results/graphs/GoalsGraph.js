import React, { useEffect, useReducer } from "react";
import fetchGoalTotalPoints from "../../../actions/goalGraph/fetchGoalTotalPoints";
import { withRouter } from "react-router-dom";
import goalsGraphReducer from "../../../reducers/resultsReducers/goalsGraphReducer";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import setGoalsGraphOptions from "../../../utils/goalsGraphOptions";
import GoalNavBar from "../../../components/navBars/goalNavBar";

// custom hooks
import useGlobalState from "../../../customHooks/customAuthHooks/useGlobalState";

/**
 * Display Total points for goal vs. point goal in a graph.
 */
function GoalsGraph(props) {
  const goalStartDate = props.location.state.goalStartDate;
  const goalEndDate = props.location.state.goalEndDate;
  const pointGoalTotal = props.location.state.pointGoalTotal;

  const [state, dispatch] = useReducer(goalsGraphReducer, {
    isError: false,
    isLoading: false,
    totalPointForDateRange: false
  });

  const { totalPointForDateRange } = state;

  const { globalState } = useGlobalState();

  /**
   * Fetch accumulated points for the range of the selected goals start date and end date.
   */
  useEffect(() => {
    fetchGoalTotalPoints(
      dispatch,
      globalState.token,
      goalStartDate,
      goalEndDate
    );
  }, [globalState.token]);
  // high charts graph options
  const graphOptions = setGoalsGraphOptions(
    totalPointForDateRange,
    pointGoalTotal,
    goalStartDate,
    goalEndDate
  );

  return (
    <div className="rulePageContainer">
      <GoalNavBar />
      <h2>Goal Graph</h2>
      <div>
        <HighchartsReact highcharts={Highcharts} options={graphOptions} />
      </div>
    </div>
  );
}

export default withRouter(GoalsGraph);
