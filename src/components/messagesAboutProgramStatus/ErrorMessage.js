import React from "react";

/**
 * Display Error Message
 * @param {string} errorText  Error Text to display
 */
function ErrorMessage({ errorText }) {
  return <div data-testid="errorMsg">{errorText}</div>;
}

export default ErrorMessage;
