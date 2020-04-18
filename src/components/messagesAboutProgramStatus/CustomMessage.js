import React from "react";

function CustomMessage({ customMsg, dataTestId }) {
  return <div data-testid={dataTestId}>{customMsg}</div>;
}

export default CustomMessage;
