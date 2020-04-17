import React from "react";

function SuccessMessage({ successText }) {
  return <div data-testid="successMsg">{successText}</div>;
}

export default SuccessMessage;
