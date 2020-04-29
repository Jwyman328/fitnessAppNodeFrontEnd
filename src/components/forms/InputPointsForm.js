import React, { useContext } from "react";
import InputPointsContext from "../../pages/activity/activityContext/InputPointsContext";

//form components
import FormRow from "./formElements/FormRow";
import FormRowLabel from "./formElements/FormRowLabel";
import UserCreateDataFormInput from "./formElements/UserCreateDataFormInput";
import FormContainer from "./formElements/FormContainer";

/**
 * Form to create an input activity.
 */
function InputPointsForm() {
  const { inputPointsState, inputPointsDispatch } = useContext(
    InputPointsContext
  );
  const {
    date,
    sleepHours,
    water100oz,
    cleanEating,
    workoutIntenisty,
    workoutTime,
    steps
  } = inputPointsState;

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
      <FormRow>
        <FormRowLabel labelText="Sleep Hours:" />
        <UserCreateDataFormInput
          dataTestid={"sleepHoursInput"}
          name={"sleepHours"}
          type={"text"}
          value={sleepHours}
          dispatch={inputPointsDispatch}
        />
      </FormRow>
      <FormRow>
        <FormRowLabel labelText="Workout Intensity(max4):" />
        <UserCreateDataFormInput
          dataTestid={"workoutIntenistyInput"}
          name={"workoutIntenisty"}
          type={"text"}
          value={workoutIntenisty}
          dispatch={inputPointsDispatch}
        />
      </FormRow>
      <FormRow>
        <FormRowLabel labelText="Workout Time:" />
        <UserCreateDataFormInput
          dataTestid={"workoutTimeInput"}
          name={"workoutTime"}
          type={"text"}
          value={workoutTime}
          dispatch={inputPointsDispatch}
        />
      </FormRow>
      <FormRow>
        <FormRowLabel labelText="Steps:" />
        <UserCreateDataFormInput
          dataTestid={"stepsInput"}
          name={"steps"}
          type={"text"}
          value={steps}
          dispatch={inputPointsDispatch}
        />
      </FormRow>
      <FormRow>
        <FormRowLabel labelText="Water 100 oz:" />
        <UserCreateDataFormInput
          dataTestid={"water100ozInput"}
          name={"water100oz"}
          type={"checkbox"}
          value={water100oz}
          dispatch={inputPointsDispatch}
          checked={water100oz}
        />
      </FormRow>
      <FormRow>
        <FormRowLabel labelText="Clean Eating:" />
        <UserCreateDataFormInput
          dataTestid={"cleanEatingInput"}
          name={"cleanEating"}
          type={"checkbox"}
          value={cleanEating}
          dispatch={inputPointsDispatch}
          checked={cleanEating}
        />
      </FormRow>
    </FormContainer>
  );
}

export default InputPointsForm;
