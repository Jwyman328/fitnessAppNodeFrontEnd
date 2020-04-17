import React from "react";
import handleInputChange from "../../../pages/auth/helperFunctionsAuth/handleInputChange";

function FormInput({ placeholder, type, name, value, dataTestid, dispatch }) {
  return (
    <div className="formItem">
      <label className="formTitle">
        <input
          placeholder={placeholder}
          size="25"
          className="formInput"
          type={type}
          name={name}
          onChange={event => handleInputChange(event, dispatch)}
          value={value}
          data-testid={dataTestid}
        />
      </label>
    </div>
  );
}

export default FormInput;
