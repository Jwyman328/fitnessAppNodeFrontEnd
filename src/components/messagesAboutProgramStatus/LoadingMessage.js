import React from "react";

/**
 * Display loading Message.
 *
 * @param {String} loadingText  Loading Text to display.
 */
function LoadingMessage({ loadingText }) {
  return <div data-testid="loadingMsg">{loadingText}</div>;
}

export default LoadingMessage;
