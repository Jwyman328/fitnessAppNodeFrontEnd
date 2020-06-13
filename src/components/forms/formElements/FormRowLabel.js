import React from "react";

/**
 * Label for a form element.
 *
 * @param {String} labelText Text to be displayed as the label for a form element.
 */
function FormRowLabel({ labelText }) {
  return <label className="form__row__item">{labelText}</label>;
}

export default FormRowLabel;
