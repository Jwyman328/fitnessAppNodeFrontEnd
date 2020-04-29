import React from "react";

/**
 * Submit data based on the handleSubmit function passed into the SubmitDataButton.
 *
 * @param {Function} handleSubmit handle click event of the SubmitDataButton.
 */
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
