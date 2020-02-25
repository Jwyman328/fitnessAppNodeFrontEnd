import React, { useEffect, useContext, useReducer } from "react";
import { withRouter } from "react-router-dom";
import { getGlobalState, dispatchInputChange } from "../utils/helperFunctions";
import { store } from "../store/globalStore";
import UpdateActivityInputReducer from "../reducers/updateActivityInputReducer";
import initialState from "../initialState/updateActivityInputInitialState";
import getActivityInput from "../actions/updateActivityInputActions/getActivityInput";
import inputPointReducer from "../reducers/inputPointReducer";
import inputPointInitialState from "../initialState/pointInputInitialState";
import updateActivityInput from '../actions/updateActivityInputActions/updateActivityInputAction';

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
  const {
    date,
    hoursOfSleep,
    water100Oz,
    cleanEating,
    workoutIntensity,
    workoutTimeLength,
    steps
  } =  activityInput

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
    const handleChange = (event) => {
        dispatchInputChange(dispatch, event)
    }

    /**
     * Submit updated activity data to the server.
     * @param {*} e - event
     */
    const handleClick = (e) => {
        e.preventDefault()
        updateActivityInput(dispatch,globalState.token,activityId,activityInput)
    }

  return (
  <div>Update activity input

           {activityInput? <form>
                <label>
                    Date:
                <input data-testid='dateInput' name='date' type='text' value={date} onChange={handleChange} />
                </label>

                <label>
                    Sleep Hours:
                <input data-testid='sleepHoursInput' name='hoursOfSleep' type='text' value={hoursOfSleep} checked={hoursOfSleep} onChange={handleChange} />
                </label>

                <label>
                    Workout Intensity:
                <input data-testid='workoutIntenistyInput' name='workoutIntensity' type='text' value={workoutIntensity} onChange={handleChange} />
                </label>
                <label>
                    Workout Time:
                <input data-testid='workoutTimeInput' name='workoutTimeLength' type='text' value={workoutTimeLength} onChange={handleChange} />
                </label>
                <label>
                    Steps:
                <input data-testid='stepsInput' name='steps' type='text' value={steps} onChange={handleChange} />
                </label>
                <label>
                    Water 100 oz:
                <input data-testid='water100ozInput' name='water100Oz' type='checkbox'  checked={water100Oz} onChange={handleChange} />
                </label>
                <label>
                    Clean Eating:
                <input data-testid='cleanEatingInput' name='cleanEating' type='checkbox'  checked={cleanEating} onChange={handleChange} />
                </label>

                <button data-testid='submitButton' onClick={handleClick}>Submit points</button>
            </form> : null}
            {isLoadingActivityInput? <div>fetching activity...</div> :null}
            {isErrorActivityInput?<div>Error fetching activity</div> :null}
            {isLoadingUpdateActivityInput?<div>updating activity...</div> :null}
            {isErrorUpdateActivityInput?<div>Error updating activity</div> :null}
            {upDateActivityInputSuccess?<div>Update successful! </div> :null}

  </div>
  
  );
}

export default withRouter(UpdateActivityInput);
