import React from "react";
import { dispatchInputChange } from "../../../utils/helperFunctions";

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
      className="rowFormItem"
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
