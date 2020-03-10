import React, { useContext, useReducer } from "react";
import axios from "axios";
import getCurrentGoals from "../../../actions/currentFutureGoalsActions/getCurrentGoals";
import getFutureGoals from "../../../actions/currentFutureGoalsActions/getFutureGoals";


const currentGoalRow = (dispatch, token, goalData, history,isPastGoal=false) => {
  const config = {
    data: { Authorization: `Bearer ${token}` },
    headers: { Authorization: `Bearer ${token}` }
  };
  const bodyParameters = {
    key: "value"
  };

  const deleteGoal = async goalId => {
    const response = await axios.delete(
      `${process.env.REACT_APP_MAINURL}/totalPointGoal/${goalId}/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
    );
    getFutureGoals(dispatch, token);
    getCurrentGoals(dispatch, token);
  };

  const navigateToGraphGoal = () => {
        history.push('/GoalsGraph',{goalStartDate: goalData.goalStartDate,
            goalEndDate: goalData.goalEndDate, pointGoalTotal: goalData.pointGoalTotal})//
  }

  return (
    <tr key={`${goalData._id}`} className="rowContainer">
      <td className="rowItem" data-testid="pointGoal">
        {goalData.pointGoal}
      </td>
      <td className="rowItem" data-testid="startDate">
        {goalData.goalStartDate}
      </td>
      <td className="rowItem" data-testid="endDate">
        {goalData.goalEndDate}
      </td>
      {!isPastGoal?<td className="rowItem">
        <button className='rowButton' data-testid="delete" onClick={() => deleteGoal(goalData._id)}>
          Delete
        </button>
      </td>:null}
      <td className="rowItem">
        <button className='rowButton' data-testid="graph" onClick={() => navigateToGraphGoal()}>
          Graph
        </button>
      </td>
    </tr>
  );
};

export default currentGoalRow;
