import React from "react";

function SubmitDataButton({ handleSubmit }) {
  return (
    <button
      className="submitButton"
      onClick={handleSubmit}
      data-testid="submitButton"
    >
      Submit
    </button>
  );
}

export default SubmitDataButton;
