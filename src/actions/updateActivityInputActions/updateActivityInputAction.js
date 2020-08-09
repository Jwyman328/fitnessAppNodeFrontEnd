import React from "react";
import axios from "axios";

/**
 * Update individual activity input by id.
 *
 * @param {Object} newData -- activity input object to replace old object.
 * @param {String} activityInputId -- id of activity input.
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function updateActivityInput(dispatch, token, activityInputId, newData) {
  dispatch({ type: "activityInputUpdateAttempt" });
  const config = {
    data: { Authorization: `Bearer ${token}`, newData },
    headers: { Authorization: `Bearer ${token}` }
  };
  // specific header format is key:value
  const bodyParameters = {
    key: "value"
  };
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_MAINURL}/activityInputs/${activityInputId}/`,
      { headers: { Authorization: `Bearer ${token}` } },
      config
    );
    dispatch({ type: "activityInputUpdateSuccess" });
  } catch (error) {
    dispatch({ type: "activityInputUpdateError" });
  }
}
export default updateActivityInput;
