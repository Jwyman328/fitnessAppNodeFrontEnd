import React from "react";

/**
 * Container of a form element.
 *
 * @param {Array} children Array of children elements to be displayed in the form container.
 */
function FormContainer({ children }) {
  return <form className="formContainer">{children}</form>;
}

export default FormContainer;
