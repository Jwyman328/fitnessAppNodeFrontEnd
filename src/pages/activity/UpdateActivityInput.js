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
      <div className="containerRules">
        <h1 data-testid="updatePageHeader">Update activity input</h1>

        {activityInput ? (
          <form className="formContainer">
            <div className="rowForm">
              <label className="rowFormItem">
                Date:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="dateInput"
                  name="date"
                  type="text"
                  value={date}
                  onChange={handleChange}
                />
            </div>
            <div className="rowForm">
              <label className="rowFormItem">
                Sleep Hours:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="sleepHoursInput"
                  name="hoursOfSleep"
                  type="text"
                  value={hoursOfSleep}
                  checked={hoursOfSleep}
                  onChange={handleChange}
                />
            </div>
            <div className="rowForm">
              <label className="rowFormItem">
                Workout Intensity:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="workoutIntenistyInput"
                  name="workoutIntensity"
                  type="text"
                  value={workoutIntensity}
                  onChange={handleChange}
                />
            </div>
            <div className="rowForm">
              <label className="rowFormItem">
                Workout Time:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="workoutTimeInput"
                  name="workoutTimeLength"
                  type="text"
                  value={workoutTimeLength}
                  onChange={handleChange}
                />
            </div>
            <div className="rowForm">
              <label className="rowFormItem">
                Steps:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="stepsInput"
                  name="steps"
                  type="text"
                  value={steps}
                  onChange={handleChange}
                />
            </div>
            <div className="rowForm">
              <label className="rowFormItem">
                Water 100 oz:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="water100ozInput"
                  name="water100Oz"
                  type="checkbox"
                  checked={water100Oz}
                  onChange={handleChange}
                />
            </div>
            <div className="rowForm">
              <label className="rowFormItem">
                Clean Eating:
                
              </label>
              <input
                  className="rowFormItem"
                  data-testid="cleanEatingInput"
                  name="cleanEating"
                  type="checkbox"
                  checked={cleanEating}
                  onChange={handleChange}
                />
            </div>
          </form>
        ) : null}
        <button className='submitButton' data-testid="submitButton" onClick={handleClick}>
          Submit points
        </button>
        {isLoadingActivityInput ? <div>fetching activity...</div> : null}
        {isErrorActivityInput ? (
          <div data-testid="activityInputfetchError">
            Error fetching activity
          </div>
        ) : null}
        {isLoadingUpdateActivityInput ? <div>updating activity...</div> : null}
        {isErrorUpdateActivityInput ? (
          <div data-testid="updateErrorMsg">Error updating activity</div>
        ) : null}
        {upDateActivityInputSuccess ? (
          <div data-testid="updateSuccessMsg">Update successful! </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(UpdateActivityInput);
