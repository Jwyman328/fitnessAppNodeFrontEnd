import React, { useReducer } from "react";

import currentFutureGoalReducer from "../../reducers/goalsReducer/currentFutureGoalPageReducer";

import currentFutureGoalsInitialState from "../../initialState/currentFutureGoalsInitialState";

import GoalNavBar from "../../components/navBars/goalNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.css";
import CurrentGoalsHead from "../../components/tables/heads/goalsHead";
import CurrentGoalRow from "../../components/tables/rows/currentGoalRow";
import { withRouter } from "react-router-dom";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";
import useGetCurrentFutureGoals from "../../customHooks/goalsHooks/useGetCurrentFutureGoals";

/**
 * Display a table for all current goals and a table for all future goals.
 *
 * @param {Object} history React router object for navigating to other pages.
 */
function CurrentFutureGoalsTablePage({ history }) {
  const { globalState } = useGlobalState();

  const [currentFutureGoalsTablePageState, dispatch] = useReducer(
    currentFutureGoalReducer,
    currentFutureGoalsInitialState
  );
  const { futureGoals, currentGoals } = currentFutureGoalsTablePageState;

  useGetCurrentFutureGoals(dispatch, globalState.token);

  /**
   * Create a new row for each goal in the goals array parameter.
   *
   * @param {Array} goals   Array of goal objects containing goal data.
   * @return                CurrentGoalRow element.
   */
  const createGoalRow = goals => {
    console.log(goals, "hello world");
    const goalRow = goals.map(goal => {
      return CurrentGoalRow(dispatch, globalState.token, goal, history);
    });
    return goalRow;
  };

  return (
    <div className="rulePageContainer">
      <GoalNavBar />
      <h2>Current Goals</h2>
      <div>
        {currentGoals ? (
          <Table className="tableContainer">
            <CurrentGoalsHead />
            <tbody>{createGoalRow(currentGoals)}</tbody>
          </Table>
        ) : null}
      </div>
      <div>
        <h2>Future Goals</h2>
        {futureGoals ? (
          <Table className="tableContainer">
            <CurrentGoalsHead />
            <tbody>{createGoalRow(futureGoals)}</tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(CurrentFutureGoalsTablePage);
