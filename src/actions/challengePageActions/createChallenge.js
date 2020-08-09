import React from "react";
import axios from "axios";

/**
 * Create a challenge  with a post request.
 *
 * Dispatch results of attempted post, either succesful or error.
 * @param {object} createChallengeFormState    current state of challenge submission attempt.
 * @param {Function} dispatch                         dispatcher that sends an action object to the challengeReducer.
 */
async function CreateChallenge(createChallengeFormState, dispatch, token) {
  const {
    challengeStartDate,
    challengeEndDate,
    title,
    challengeType,
    selectedUsers
  } = createChallengeFormState;

  const createGoalInputCompatibleWithBackend = {
    startDate: challengeStartDate,
    endDate: challengeEndDate,
    title: title,
    challengeType: challengeType,
    invitees: selectedUsers
  };

  //post configureations with jwt token and input goal data
  const postRequestBodyConfig = {
    data: createGoalInputCompatibleWithBackend,
    headers: { Authorization: `Bearer ${token}` }
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_MAINURL}/challenges/`,
      { headers: { Authorization: `Bearer ${token}` } },
      postRequestBodyConfig
    );
    dispatch({ type: "createChallengeSuccess" });
  } catch (error) {
    dispatch({ type: "createChallengeError" });
  }
}
export default CreateChallenge;
