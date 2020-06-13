import React, { useReducer } from "react";

import pastGoalsReducer from "../../reducers/goalsReducer/pastGoalsReducer";

import pastGoalsInitialState from "../../initialState/goals_initial_state/pastGoalsState";

import GoalNavBar from "../../components/navBars/goalNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.scss";
import PastGoalsHead from "../../components/tables/heads/pastGoalsHead";
import GoalRows from "../../components/tables/rows/currentGoalRow";
import { withRouter } from "react-router-dom";
// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";
import useGetPastGoals from "../../customHooks/goalsHooks/useGetPastGoals";

/**
 * Display a table for all past goals.
 *
 * @param {Object} history React router object for navigating to other pages.
 */
function PastGoalsPageTablePage({ history }) {
  const { globalState } = useGlobalState();

  const [pastGoalsPageTablePageState, dispatch] = useReducer(
    pastGoalsReducer,
    pastGoalsInitialState
  );

  const { pastGoals } = pastGoalsPageTablePageState;

  useGetPastGoals(dispatch, globalState.token);

  const createGoalRow = goals => {
    const goalRow = goals.map(goal => {
      return GoalRows(dispatch, globalState.token, goal, history, true);
    });
    return goalRow;
  };

  return (
    <div className="rulePageContainer">
      <GoalNavBar />
      <h2>Past Goals</h2>
      <div>
        {pastGoals ? (
          <Table className="table">
            <PastGoalsHead />
            <tbody>{createGoalRow(pastGoals)}</tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(PastGoalsPageTablePage);
