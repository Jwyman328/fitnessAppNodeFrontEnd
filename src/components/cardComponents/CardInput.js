import React from "react";
import handleInputChange from "../../pages/auth/helperFunctionsAuth/handleInputChange";

function CardInput({ placeHolder, inputState }) {
  return (
    <div className="formItem">
      <label className="formTitle">
        <input
          placeholder={placeHolder}
          size="25"
          className="formInput"
          data-testid="emailInput"
          type="text"
          name={placeHolder}
          value={email}
          onChange={event => handleInputChange(event, dispatch)}
        />
      </label>
    </div>
  );
}

export default CardInput;
