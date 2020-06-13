import React from "react";
import { dispatchInputChange } from "../../../utils/helperFunctions";

/**
 * Input element for a createData form.
 *
 * @param {String}   dataTestid      test-id for testing.
 * @param {String}   name            name of the input element.
 * @param {String}   type            type of the input element.
 * @param {any}      value           value of the input element.
 * @param {Function} dispatch        dispatcher for emmiting createData actions.
 * @param {Boolean}  checked         whether the element is checked or not.
 */
function UserCreateDataFormInput({
  dataTestid,
  name,
  type,
  value,
  dispatch,
  checked
}) {
  return (
    <input
      size="15"
      className="form__row__item"
      data-testid={dataTestid}
      name={name}
      type={type}
      value={value}
      onChange={event => dispatchInputChange(dispatch, event)}
      checked={checked}
    />
  );
}

export default UserCreateDataFormInput;
