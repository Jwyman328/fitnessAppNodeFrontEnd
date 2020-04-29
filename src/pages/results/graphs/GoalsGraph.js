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
 * Display Total points for a goal vs. point goal in a graph.
 *
 * @param {String} goalStartDate    yyyy-mm-dd for start date of the goal
 *  @param {String} goalEndDate     yyyy-mm-dd for end date of the goal
 * @param {Number} pointGoalTotal   Point goal for the selected range of dates
 */
function GoalsGraph({
  location: {
    state: { goalStartDate, goalEndDate, pointGoalTotal }
  }
}) {
  const [goalsGraphState, dispatch] = useReducer(goalsGraphReducer, {
    isError: false,
    isLoading: false,
    totalPointForDateRange: false
  });

  const { totalPointForDateRange } = goalsGraphState;

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

  /**
   * Graph Goal graph configuration
   */
  const graphGoalConfiguration = setGoalsGraphOptions(
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
        <HighchartsReact
          highcharts={Highcharts}
          options={graphGoalConfiguration}
        />
      </div>
    </div>
  );
}

export default withRouter(GoalsGraph);
