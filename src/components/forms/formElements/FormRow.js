import React from "react";

/**
 * Row element of a form.
 *
 * @param {Array} children Array of children elements to be displayed in the form container.
 */
function FormRow({ children }) {
  return <div className="form__row">{children}</div>;
}

export default FormRow;
