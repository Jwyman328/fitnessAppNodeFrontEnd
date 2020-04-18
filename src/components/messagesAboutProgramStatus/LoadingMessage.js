import React from "react";

function LoadingMessage({ loadingText }) {
  return <div data-testid="loadingMsg">{loadingText}</div>;
}

export default LoadingMessage;
