import React from "react";
import FormContainer from "./formElements/FormContainer";
import FormRow from "./formElements/FormRow";
import FormRowLabel from "./formElements/FormRowLabel";
import UserCreateDataFormInput from "./formElements/UserCreateDataFormInput";

function UpdatePointsForm() {
  return (
    <FormContainer>
      <FormRow>
        <FormRowLabel labelText="Date:" />
        <UserCreateDataFormInput
          dataTestid={"dateInput"}
          name={"date"}
          type={"text"}
          value={date}
          dispatch={inputPointsDispatch}
        />
      </FormRow>
    </FormContainer>
  );
}

export default UpdatePointsForm;
