import React from "react";

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
          onChange={e => handleChange(e)}
        />
      </label>
    </div>
  );
}

export default CardInput;
