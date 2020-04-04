import React, { useReducer, useContext, useEffect } from "react";
import inputPointReducer from "../../reducers/activityReducers/inputPointReducer";
import inputPointInitialState from "../../initialState/pointInputInitialState";

import CreateInputPoint from "../../actions/inputPointActions/createInputPoint";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import "../form.scss";

/**
 * Input point data for a selected date.
 * @param {*} props
 */
function InputPointsPage(props) {
  const [state, dispatch] = useReducer(
    inputPointReducer,
    inputPointInitialState
  );
  const {
    isLoading,
    isError,
    isSuccess,
    date,
    sleepHours,
    water100oz,
    cleanEating,
    workoutIntenisty,
    workoutTime,
    steps
  } = state;

  // global store containing the use token for making requests
  const globalState = getGlobalState(useContext(store));

  /**
   * Handle input data change events.
   *
   * Dispatch the associated event change to change the state of the input value.
   * @param {*} e -user event.
   */
  const handleChange = event => {
    dispatchInputChange(dispatch, event);
  };

  /**
   * Submit point data to the server.
   * @param {*} e - event
   */
  const handleClick = e => {
    e.preventDefault();
    dispatch({ type: "inputPointSent" });
    CreateInputPoint(state, dispatch, globalState.token);
  };
  return (
    <div className="rulePageContainer">
      <div className="containerRules smallCard">
        <h1>Input Activity</h1>
        <form className="formContainer">
          <div className="rowForm">
            <label className="rowFormItem">Date:</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="dateInput"
              name="date"
              type="text"
              value={date}
              onChange={handleChange}
            />
          </div>

          <div className="rowForm">
            <label className="rowFormItem">Sleep Hours:</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="sleepHoursInput"
              name="sleepHours"
              type="text"
              value={sleepHours}
              onChange={handleChange}
            />
          </div>

          <div className="rowForm">
            <label className="rowFormItem">Workout Intensity(max4):</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="workoutIntenistyInput"
              name="workoutIntenisty"
              type="text"
              value={workoutIntenisty}
              onChange={handleChange}
            />
          </div>

          <div className="rowForm">
            <label className="rowFormItem">Workout Time:</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="workoutTimeInput"
              name="workoutTime"
              type="text"
              value={workoutTime}
              onChange={handleChange}
            />
          </div>

          <div className="rowForm">
            <label className="rowFormItem">Steps:</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="stepsInput"
              name="steps"
              type="text"
              value={steps}
              onChange={handleChange}
            />
          </div>

          <div className="rowForm">
            <label className="rowFormItem">Water 100 oz:</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="water100ozInput"
              name="water100oz"
              type="checkbox"
              value={water100oz}
              checked={water100oz}
              onChange={handleChange}
            />
          </div>

          <div className="rowForm">
            <label className="rowFormItem">Clean Eating:</label>
            <input
              size="15"
              className="rowFormItem"
              data-testid="cleanEatingInput"
              name="cleanEating"
              type="checkbox"
              value={cleanEating}
              checked={cleanEating}
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          className="submitButton"
          data-testid="submitButton"
          onClick={handleClick}
        >
          Submit points
        </button>
        {/* handle results of input point activity submission post request */}
        {isSuccess ? (
          <div data-testid="successMsg">new input successfully create</div>
        ) : null}
        {isError ? (
          <div data-testid="errorMsg">
            Error on making new input activity, please try again
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default InputPointsPage;
