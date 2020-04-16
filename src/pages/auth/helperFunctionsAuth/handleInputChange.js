import React from "react";
import handleInputAction from "../../../actions/handleInput";

/**
 * Dispatch action to handle change of input value
 * @param {*} event -- event passed onChange
 */
function handleInputChange(event, dispatch) {
  dispatch(handleInputAction(event.target.name, event.target.value));
}

export default handleInputChange;
