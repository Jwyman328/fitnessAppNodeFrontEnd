import React, { useEffect, useReducer, useContext } from "react";
import { store } from "../../store/globalStore";
import { getGlobalState, dispatchInputChange } from "../../utils/helperFunctions";
import pastGoalsReducer from '../../reducers/goalsReducer/pastGoalsReducer'

import initialState from '../../initialState/pastGoalsState'
import getPastGoals from '../../actions/pastGoalsPAge/getPastGoals'

import GoalNavBar from '../../components/navBars/goalNavBar'
import { Table } from "react-bootstrap";
import '../../components/tables/DailyPointsTable.css'
import PastGoalsHead from '../../components/tables/heads/pastGoalsHead'
import PastGoalsRows from '../../components/tables/rows/pastGoalsRows'

function PastGoalsPage(props){
    const globalState = getGlobalState(useContext(store));

  const [state, dispatch] = useReducer(
    pastGoalsReducer,
    initialState
  );

  const {
    isLoadingPastGoals,
    isErrorPastGoals,
    pastGoals,
  } = state;

  /**
   * Fetch current and future goals.
   */
  useEffect(() => {
    getPastGoals(dispatch, globalState.token);
  }, []);

  useEffect(() => {
      console.log( pastGoals, 'passgoals')

  },[pastGoals])

    const createGoalRow = (goals) => {
        console.log('hit', goals)
       const goalRow = goals.map(goal => {
            return PastGoalsRows(goal)
        })
        return goalRow
    }

    return (
        <div>
            <GoalNavBar />
            <h2>Past Goals</h2>
            <div>
                {pastGoals?
 
                <Table className="tableContainer">
                    
                    <PastGoalsHead />
                    <tbody>
                        {createGoalRow(pastGoals)}
                    </tbody>
                </Table> : null}
            </div>
        </div>
    )
}

export default PastGoalsPage;