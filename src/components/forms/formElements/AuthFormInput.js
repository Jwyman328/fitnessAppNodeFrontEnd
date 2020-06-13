import React from "react";
import handleAuthInputChange from "../../../pages/auth/helperFunctionsAuth/handleAuthInputChange";

/**
 * Input element for a auth form.
 *
 * @param {String}   placeholder     text to be displayed inside the input element.
 * @param {String}   type            type of the input element.
 * @param {any}      value           value of the input element.
 * @param {String}   dataTestid      test-id for testing.
 * @param {Function} dispatch        dispatcher for emmiting authForm actions.
 */
function AuthFormInput({
  placeholder,
  type,
  name,
  value,
  dataTestid,
  dispatch
}) {
  return (
    <div className="form__item">
      <label className="formTitle">
        <input
          placeholder={placeholder}
          size="25"
          className="form__input"
          type={type}
          name={name}
          onChange={event => handleAuthInputChange(event, dispatch)}
          value={value}
          data-testid={dataTestid}
        />
      </label>
    </div>
  );
}

export default AuthFormInput;
