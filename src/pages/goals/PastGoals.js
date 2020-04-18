import React, { useEffect, useReducer, useContext } from "react";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import pastGoalsReducer from "../../reducers/goalsReducer/pastGoalsReducer";

import initialState from "../../initialState/pastGoalsState";
import getPastGoals from "../../actions/pastGoalsPAge/getPastGoals";

import GoalNavBar from "../../components/navBars/goalNavBar";
import { Table } from "react-bootstrap";
import "../../components/tables/DailyPointsTable.css";
import PastGoalsHead from "../../components/tables/heads/pastGoalsHead";
import PastGoalsRows from "../../components/tables/rows/pastGoalsRows";
import GoalRows from "../../components/tables/rows/currentGoalRow";
import { withRouter } from "react-router-dom";
// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";
import useGetPastGoals from "../../customHooks/customAuthHooks/useGetPastGoals";

function PastGoalsPage(props) {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(pastGoalsReducer, initialState);

  const { isLoadingPastGoals, isErrorPastGoals, pastGoals } = state;

  useGetPastGoals(dispatch, globalState.token);

  const createGoalRow = goals => {
    const goalRow = goals.map(goal => {
      //return PastGoalsRows(goal)
      return GoalRows(dispatch, globalState.token, goal, props.history, true);
    });
    return goalRow;
  };

  return (
    <div className="rulePageContainer">
      <GoalNavBar />
      <h2>Past Goals</h2>
      <div>
        {pastGoals ? (
          <Table className="tableContainer">
            <PastGoalsHead />
            <tbody>{createGoalRow(pastGoals)}</tbody>
          </Table>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(PastGoalsPage);
