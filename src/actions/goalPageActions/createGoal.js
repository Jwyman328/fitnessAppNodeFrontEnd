import React from "react";
import axios from "axios";

/**
 * Create a total point goal with a post request.
 *
 * Dispatch results of attempted post, either succesful or error.
 * @param {object} createGoalFormState -- current state of goal submission attempt.
 * @param {*} dispatch  -- dispatcher that sends an action object to the goalReducer.
 */
async function CreateGoal(createGoalFormState, dispatch, token) {
  const {
    goalStartDate,
    goalEndDate,
    dailyGoal,
    pointGoal
  } = createGoalFormState;
  const createGoalInput = {
    goalStartDate: goalStartDate,
    goalEndDate: goalEndDate,
    dailyGoal: dailyGoal,
    pointGoal: pointGoal
  };

  //post configureations with jwt token and input goal data
  const config = {
    data: createGoalInput,
    headers: { Authorization: `Bearer ${token}` }
  };
  // specific header format is key:value
  const bodyParameters = {
    key: "value"
  };
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_MAINURL}/totalPointGoal/`,
      bodyParameters,
      config
    );
    // if succesful dispatch success
    dispatch({ type: "createGoalSuccess" });
  } catch (error) {
    dispatch({ type: "createGoalError" });
  }
}
export default CreateGoal;
