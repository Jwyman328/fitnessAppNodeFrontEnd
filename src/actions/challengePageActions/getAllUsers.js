import React from "react";
import axios from "axios";

/**
 *  Get all users.
 *
 * Dispatch results of attempted post, either succesful or error.
 * @param {Function}     dispatch  dispatcher that sends an action object to the challengeReducer.
 * @param {String}       token     JWT token to make http request.
 */
async function GetAllUsers(dispatch, token) {
  dispatch({ type: "getAllUsersAttempt" });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MAINURL}/users/`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: "getAllUsersSuccess", allUsers: response.data });
  } catch (error) {
    dispatch({ type: "getAllUsersError" });
  }
}
export default GetAllUsers;
