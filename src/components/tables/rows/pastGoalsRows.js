import React, { useContext, useReducer } from "react";

/**
 * Create a table row for a pastGoal.
 *
 * @param {Object} goalData
 */
const pastGoalRow = goalData => {
  const deleteGoal = newStatus => {
    console.log("results");
  };

  return (
    <tr key={`${goalData._id}`} className="table__row">
      <td className="table__item" data-testid="pointGoal">
        {goalData.pointGoal}
      </td>
      <td className="table__item" data-testid="startDate">
        {goalData.goalStartDate}
      </td>
      <td className="table__item" data-testid="endDate">
        {goalData.goalEndDate}
      </td>
      <td className="table__item">
        <button data-testid="delete" onClick={() => deleteGoal()}>
          Results
        </button>
      </td>
    </tr>
  );
};

export default pastGoalRow;
