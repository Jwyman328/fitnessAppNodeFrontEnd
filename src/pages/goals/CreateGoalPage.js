import React, { useReducer, useContext } from "react";
import initialState from "../../initialState/pointGoalInitialState";
import goalReducer from "../../reducers/goalsReducer/goalReducer";
import CreateGoal from "../../actions/goalPageActions/createGoal";
import GoalNavBar from "../../components/navBars/goalNavBar";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";

//components
import SubmitDataButton from "../../components/buttons/SubmitDataButton";

//form components
import UserCreateDataFormInput from "../../components/forms/formElements/UserCreateDataFormInput";
import FormRow from "../../components/forms/formElements/FormRow";
import FormRowLabel from "../../components/forms/formElements/FormRowLabel";
import FormContainer from "../../components/forms/formElements/FormContainer";

//message components
import ErrorMessage from "../../components/messagesAboutProgramStatus/ErrorMessage";
import SuccessMessage from "../../components/messagesAboutProgramStatus/successMessage";

/**
 * Allow user to create a total point goal.
 * @param {*} props
 */
function CreateGoalPage(props) {
  // global store containing the use token for making requests
  const globalState = getGlobalState(useContext(store));

  //goal's page reducer
  const [state, dispatch] = useReducer(goalReducer, initialState);
  const {
    goalStartDate,
    goalEndDate,
    dailyGoal,
    pointGoal,
    isSuccess,
    isLoading,
    isError
  } = state;

  /**
   * Handle change of each input.
   * @param {*} e -input event
   */
  const handleChange = event => {
    dispatchInputChange(dispatch, event);
  };

  /**
   * Submit goal state input to server to create a goal.
   *
   * Dispatch that the attempt goal creation has been attempted.
   * Attempt to create goal, passing dispatcher, current state, and user's token.
   * @param {*} e - event
   */
  const handleSubmit = e => {
    //dispatch action of post request
    e.preventDefault();
    dispatch({ type: "createGoalAttempt" });
    CreateGoal(state, dispatch, globalState.token);
  };

  return (
    <div className="rulePageContainer">
      <GoalNavBar />
      <div className="containerRules smallCard">
        <h1>Create A Goal</h1>
        <FormContainer>
          <FormRow>
            <FormRowLabel labelText="Start Date:" />
            <UserCreateDataFormInput
              dataTestid={"startDate"}
              name={"goalStartDate"}
              type={"text"}
              value={goalStartDate}
              dispatch={dispatch}
            />
          </FormRow>

          <FormRow>
            <FormRowLabel labelText="End Date:" />
            <UserCreateDataFormInput
              dataTestid={"goalEndDate"}
              name={"goalEndDate"}
              type={"text"}
              value={goalEndDate}
              dispatch={dispatch}
            />
          </FormRow>

          <FormRow>
            <FormRowLabel labelText=" Daily Goal:" />
            <UserCreateDataFormInput
              dataTestid={"dailyGoal"}
              name={"dailyGoal"}
              type={"checkbox"}
              checked={dailyGoal}
              dispatch={dispatch}
            />
          </FormRow>

          <FormRow>
            <FormRowLabel labelText="Point Goal:" />
            <UserCreateDataFormInput
              dataTestid={"pointGoal"}
              name={"pointGoal"}
              type={"text"}
              value={pointGoal}
              dispatch={dispatch}
            />
          </FormRow>
        </FormContainer>

        <SubmitDataButton handleSubmit={handleSubmit} />
        {isSuccess ? (
          <SuccessMessage successText="Goal created successfully" />
        ) : null}
        {isError ? (
          <ErrorMessage errorText="Error creating goal, please try again" />
        ) : null}
      </div>
    </div>
  );
}

export default CreateGoalPage;
