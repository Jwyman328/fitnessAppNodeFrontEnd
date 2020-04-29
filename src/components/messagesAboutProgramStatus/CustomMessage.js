import React from "react";

/**
 * Display a custom message.
 * 
 * @param {String}   customMsg       message text to be displayed.
 * @param {String}   dataTestid      test-id for testing.

 */
function CustomMessage({ customMsg, dataTestId }) {
  return <div data-testid={dataTestId}>{customMsg}</div>;
}

export default CustomMessage;
