import React, { useContext } from "react";
import CreateGoalPageContext from "../../pages/goals/GoalContext/CreateGoalPageContext";

//form components
import UserCreateDataFormInput from "../../components/forms/formElements/UserCreateDataFormInput";
import FormRow from "../../components/forms/formElements/FormRow";
import FormRowLabel from "../../components/forms/formElements/FormRowLabel";
import FormContainer from "../../components/forms/formElements/FormContainer";

function CreateGoalPageForm() {
  const { CreateGoalPageState, CreateGoalPageDispatch } = useContext(
    CreateGoalPageContext
  );

  const {
    goalStartDate,
    goalEndDate,
    dailyGoal,
    pointGoal
  } = CreateGoalPageState;

  return (
    <FormContainer>
      <FormRow>
        <FormRowLabel labelText="Start Date:" />
        <UserCreateDataFormInput
          dataTestid={"startDate"}
          name={"goalStartDate"}
          type={"text"}
          value={goalStartDate}
          dispatch={CreateGoalPageDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="End Date:" />
        <UserCreateDataFormInput
          dataTestid={"goalEndDate"}
          name={"goalEndDate"}
          type={"text"}
          value={goalEndDate}
          dispatch={CreateGoalPageDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText=" Daily Goal:" />
        <UserCreateDataFormInput
          dataTestid={"dailyGoal"}
          name={"dailyGoal"}
          type={"checkbox"}
          checked={dailyGoal}
          dispatch={CreateGoalPageDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Point Goal:" />
        <UserCreateDataFormInput
          dataTestid={"pointGoal"}
          name={"pointGoal"}
          type={"text"}
          value={pointGoal}
          dispatch={CreateGoalPageDispatch}
        />
      </FormRow>
    </FormContainer>
  );
}
export default CreateGoalPageForm;
