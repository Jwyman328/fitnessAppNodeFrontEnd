import React, { useReducer } from "react";

import currentFutureGoalReducer from "../../reducers/goalsReducer/currentFutureGoalPageReducer";

import initialState from "../../initialState/currentFutureGoalsInitialState";

import GoalNavBar from "../../components/navBars/goalNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.css";
import CurrentGoalsHead from "../../components/tables/heads/goalsHead";
import CurrentGoalRow from "../../components/tables/rows/currentGoalRow";
import { withRouter } from "react-router-dom";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";
import useGetCurrentFutureGoals from "../../customHooks/customAuthHooks/useGetCurrentFutureGoals";

function CurrentFutureGoals(props) {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(currentFutureGoalReducer, initialState);
  const { futureGoals, currentGoals } = state;

  useGetCurrentFutureGoals(dispatch, globalState.token);

  const createGoalRow = goals => {
    const goalRow = goals.map(goal => {
      return CurrentGoalRow(dispatch, globalState.token, goal, props.history);
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

export default withRouter(CurrentFutureGoals);
