import React from "react";
import axios from "axios";
import getCurrentGoals from "../../../actions/currentFutureGoalsActions/getCurrentGoals";
import getFutureGoals from "../../../actions/currentFutureGoalsActions/getFutureGoals";

/**
 * Display a row for a specific goal.
 *
 * Allow user to navigate to goal graph for specific goal.
 * Allow user to delete specific goal.
 *
 * @param {Function}    dispatch    dispatcher to dispatch goal events.
 * @param {String}      token       JWT token for http requests.
 * @param {Object}      goalData    goalData for a specific goal.
 * @param {Function}    history     function for routing to other pages.
 * @param {Boolean}     isPastGoal  determining whether goal is a past goal or not.
 */
const currentGoalRow = (
  dispatch,
  token,
  goalData,
  history,
  isPastGoal = false
) => {
  const config = {
    data: { Authorization: `Bearer ${token}` },
    headers: { Authorization: `Bearer ${token}` }
  };

  /**
   * Delete a goal by id.
   *
   * After deletion, fetch current and future goals.
   * @param {String} goalId id of the goal wanted to be deleted.
   */
  const deleteGoal = async goalId => {
    const response = await axios.delete(
      `${process.env.REACT_APP_MAINURL}/totalPointGoal/${goalId}/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
    );
    getFutureGoals(dispatch, token);
    getCurrentGoals(dispatch, token);
  };

  /**
   * Navigate to goalsGraph page and pass specific goal data.
   */
  const navigateToGraphGoal = () => {
    history.push("/GoalsGraph", {
      goalStartDate: goalData.goalStartDate,
      goalEndDate: goalData.goalEndDate,
      pointGoalTotal: goalData.pointGoalTotal
    }); //
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
      {!isPastGoal ? (
        <td className="table__item">
          <button
            className="rowButton"
            data-testid="delete"
            onClick={() => deleteGoal(goalData._id)}
          >
            Delete
          </button>
        </td>
      ) : null}
      <td className="table__item">
        <button
          className="rowButton"
          data-testid="graph"
          onClick={() => navigateToGraphGoal()}
        >
          Graph
        </button>
      </td>
    </tr>
  );
};

export default currentGoalRow;
