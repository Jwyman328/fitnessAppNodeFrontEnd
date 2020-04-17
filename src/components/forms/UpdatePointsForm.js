import React, { useContext } from "react";

// form components
import FormContainer from "./formElements/FormContainer";
import FormRow from "./formElements/FormRow";
import FormRowLabel from "./formElements/FormRowLabel";
import UserCreateDataFormInput from "./formElements/UserCreateDataFormInput";

//context
import UpdateActivityInputContext from "../../pages/activity/activityContext/UpdateActivityInputContext";

function UpdatePointsForm(props) {
  const { updatePointsFormState, updateActivityInputDispatch } = useContext(
    UpdateActivityInputContext
  );
  let {
    date,
    hoursOfSleep,
    water100Oz,
    cleanEating,
    workoutIntensity,
    workoutTimeLength,
    steps
  } = updatePointsFormState;

  return (
    <FormContainer>
      <FormRow>
        <FormRowLabel labelText="Date:" />
        <UserCreateDataFormInput
          dataTestid={"dateInput"}
          name={"date"}
          type={"text"}
          value={date}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Sleep Hours:" />
        <UserCreateDataFormInput
          dataTestid={"sleepHoursInput"}
          name={"hoursOfSleep"}
          type={"text"}
          value={hoursOfSleep}
          checked={hoursOfSleep}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Workout Intensity(max4):" />
        <UserCreateDataFormInput
          dataTestid={"workoutIntenistyInput"}
          name={"workoutIntensity"}
          type={"text"}
          value={workoutIntensity}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Workout Time:" />
        <UserCreateDataFormInput
          dataTestid={"workoutTimeInput"}
          name={"workoutTimeLength"}
          type={"text"}
          value={workoutTimeLength}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Steps:" />
        <UserCreateDataFormInput
          dataTestid={"stepsInput"}
          name={"steps"}
          type={"text"}
          value={steps}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Water 100 oz:" />
        <UserCreateDataFormInput
          dataTestid={"water100ozInput"}
          name={"water100Oz"}
          type={"checkbox"}
          checked={water100Oz}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Clean Eating:" />
        <UserCreateDataFormInput
          dataTestid={"cleanEatingInput"}
          name={"cleanEating"}
          type={"checkbox"}
          checked={cleanEating}
          dispatch={updateActivityInputDispatch}
        />
      </FormRow>
    </FormContainer>
  );
}

export default UpdatePointsForm;
