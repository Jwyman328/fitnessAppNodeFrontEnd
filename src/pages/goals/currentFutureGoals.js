import React, { useEffect, useReducer, useContext } from "react";
import { store } from "../../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../../utils/helperFunctions";
import currentFutureGoalReducer from '../../reducers/goalsReducer/currentFutureGoalPageReducer'

import initialState from '../../initialState/currentFutureGoalsInitialState'
import getCurrentGoals from '../../actions/currentFutureGoalsActions/getCurrentGoals'
import getFutureGoals from '../../actions/currentFutureGoalsActions/getFutureGoals'

import GoalNavBar from '../../components/navBars/goalNavBar'
import { Table } from "react-bootstrap";
import '../../components/tables/DailyPointsTable.css'
import CurrentGoalsHead from '../../components/tables/heads/goalsHead'
import CurrentGoalRow from '../../components/tables/rows/currentGoalRow'
import {withRouter} from 'react-router-dom'

function CurrentFutureGoals(props){
    const globalState = getGlobalState(useContext(store));

  const [state, dispatch] = useReducer(
    currentFutureGoalReducer,
    initialState
  );
  const {
    isLoadingFutureGoals,
    isErrorFutureGoals,
    futureGoals,
    currentGoals,
    isLoadingCurrentGoals,
    isErrorCurrentGoals
  } = state;

  /**
   * Fetch current and future goals.
   */
  useEffect(() => {
    getFutureGoals(dispatch, globalState.token);
    getCurrentGoals(dispatch, globalState.token)
  }, []);

  useEffect(() => {
      console.log( currentGoals)
      console.log(futureGoals)

  },[currentGoals, futureGoals])

    const createGoalRow = (goals) => {
       const goalRow = goals.map(goal => {
            return CurrentGoalRow(dispatch,globalState.token,goal,props.history )
        })
        return goalRow
    }

    return (
        <div className='rulePageContainer'>
            <GoalNavBar />
            <h2>Current Goals</h2>
            <div>
                {currentGoals?
                <Table className="tableContainer">
                    <CurrentGoalsHead />
                    <tbody>
                        {createGoalRow(currentGoals)}
                    </tbody>
                </Table> : null}
            </div>
            <div>
                <h2>
                    Future Goals
                </h2>
                {futureGoals?
                <Table className="tableContainer">
                    <CurrentGoalsHead />
                    <tbody>
                        {createGoalRow(futureGoals)}
                    </tbody>
                </Table> : null}
            </div>
        </div>
    )
}

export default withRouter(CurrentFutureGoals);