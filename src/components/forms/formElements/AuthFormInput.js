import React from "react";
import handleAuthInputChange from "../../../pages/auth/helperFunctionsAuth/handleAuthInputChange";

function AuthFormInput({
  placeholder,
  type,
  name,
  value,
  dataTestid,
  dispatch
}) {
  return (
    <div className="formItem">
      <label className="formTitle">
        <input
          placeholder={placeholder}
          size="25"
          className="formInput"
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
