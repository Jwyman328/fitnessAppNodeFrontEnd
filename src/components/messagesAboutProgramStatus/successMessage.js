import React from "react";

/**
 * Display success Message.
 *
 * @param {String} successText success text to display.
 */
function SuccessMessage({ successText }) {
  return <div data-testid="successMsg">{successText}</div>;
}

export default SuccessMessage;
