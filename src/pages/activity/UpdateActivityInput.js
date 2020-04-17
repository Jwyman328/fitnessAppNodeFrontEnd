import React, { useEffect, useContext, useReducer } from "react";
import { withRouter } from "react-router-dom";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import { store } from "../../store/globalStore";
import UpdateActivityInputReducer from "../../reducers/activityReducers/updateActivityInputReducer";
import initialState from "../../initialState/updateActivityInputInitialState";
import getActivityInput from "../../actions/updateActivityInputActions/getActivityInput";
import inputPointReducer from "../../reducers/activityReducers/inputPointReducer";
import inputPointInitialState from "../../initialState/pointInputInitialState";
import updateActivityInput from "../../actions/updateActivityInputActions/updateActivityInputAction";
import ResultsNavBar from "../../components/navBars/resultsNavBar";

//components
//import UpdatePointsForm from "../../components/forms/UpdatePointsForm";
import FormContainer from "../../components/forms/formElements/FormContainer";
import FormRow from "../../components/forms/formElements/FormRow";
import FormRowLabel from "../../components/forms/formElements/FormRowLabel";
import UserCreateDataFormInput from "../../components/forms/formElements/UserCreateDataFormInput";
import SubmitDataButton from "../../components/cardComponents/SubmitDataButton";
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";

//messages
import ErrorMessage from "../../components/messagesAboutProgramStatus/ErrorMessage";
import SuccessMessage from "../../components/messagesAboutProgramStatus/successMessage";
import LoadingMessage from "../../components/messagesAboutProgramStatus/LoadingMessage";

function UpdateActivityInput(props) {
  const globalState = getGlobalState(useContext(store));

  const [state, dispatch] = useReducer(
    UpdateActivityInputReducer,
    initialState
  );

  // deconstruct reducer state
  let {
    isLoadingActivityInput,
    isErrorActivityInput,
    isLoadingUpdateActivityInput,
    isErrorUpdateActivityInput,
    upDateActivityInputSuccess,
    activityInput
  } = state;

  // deconstruct activity input to be displayed in input elements
  let {
    date,
    hoursOfSleep,
    water100Oz,
    cleanEating,
    workoutIntensity,
    workoutTimeLength,
    steps
  } = activityInput;

  // activityId to be updated
  const activityId = props.location.state.activityID;

  /**
   * Fetch activity input data.
   */
  useEffect(() => {
    getActivityInput(dispatch, globalState.token, activityId);
  }, []);

  /**
   * Handle input data change events.
   *
   * Dispatch the associated event change to change the state of the input value.
   * @param {*} event -user event.
   */
  const handleChange = event => {
    dispatchInputChange(dispatch, event);
  };

  /**
   * Submit updated activity data to the server.
   * @param {*} e - event
   */
  const handleClick = e => {
    e.preventDefault();
    updateActivityInput(dispatch, globalState.token, activityId, activityInput);
  };

  return (
    <div className="rulePageContainer">
      <ResultsNavBar />
      <UserCreateDataCardContainer>
        <h1 data-testid="updatePageHeader">Update activity input</h1>

        {activityInput ? (
          <FormContainer>
            <FormRow>
              <FormRowLabel labelText="Date:" />
              <UserCreateDataFormInput
                dataTestid={"dateInput"}
                name={"date"}
                type={"text"}
                value={date}
                dispatch={dispatch}
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
                dispatch={dispatch}
              />
            </FormRow>

            <FormRow>
              <FormRowLabel labelText="Workout Intensity(max = 4):" />
              <UserCreateDataFormInput
                dataTestid={"workoutIntenistyInput"}
                name={"workoutIntensity"}
                type={"text"}
                value={workoutIntensity}
                dispatch={dispatch}
              />
            </FormRow>

            <FormRow>
              <FormRowLabel labelText="Workout Time:" />
              <UserCreateDataFormInput
                dataTestid={"workoutTimeInput"}
                name={"workoutTimeLength"}
                type={"text"}
                value={workoutTimeLength}
                dispatch={dispatch}
              />
            </FormRow>

            <FormRow>
              <FormRowLabel labelText="Steps:" />
              <UserCreateDataFormInput
                dataTestid={"stepsInput"}
                name={"steps"}
                type={"text"}
                value={steps}
                dispatch={dispatch}
              />
            </FormRow>

            <FormRow>
              <FormRowLabel labelText="Water 100 oz:" />
              <UserCreateDataFormInput
                dataTestid={"water100ozInput"}
                name={"water100Oz"}
                type={"checkbox"}
                //value={steps}
                checked={water100Oz}
                dispatch={dispatch}
              />
            </FormRow>

            <FormRow>
              <FormRowLabel labelText="Clean Eating:" />
              <UserCreateDataFormInput
                dataTestid={"cleanEatingInput"}
                name={"cleanEating"}
                type={"checkbox"}
                //value={steps}
                checked={cleanEating}
                dispatch={dispatch}
              />
            </FormRow>
          </FormContainer>
        ) : null}
        <SubmitDataButton handleSubmit={handleClick} />
        {isLoadingActivityInput ? (
          <LoadingMessage loadingText={"fetching activity..."} />
        ) : null}
        {isErrorActivityInput ? (
          <ErrorMessage errorText="Error fetching activity" />
        ) : null}
        {isLoadingUpdateActivityInput ? (
          <LoadingMessage loadingText={"updating activity..."} />
        ) : null}
        {isErrorUpdateActivityInput ? (
          <ErrorMessage errorText="Error updating activity, please try again" />
        ) : null}
        {upDateActivityInputSuccess ? (
          <SuccessMessage successText="Update successful!" />
        ) : null}
      </UserCreateDataCardContainer>
    </div>
  );
}

export default withRouter(UpdateActivityInput);
