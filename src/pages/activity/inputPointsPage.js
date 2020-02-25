import React, {useReducer, useContext, useEffect} from 'react';
import inputPointReducer from '../../reducers/inputPointReducer'
import inputPointInitialState from '../../initialState/pointInputInitialState'

import CreateInputPoint from '../../actions/inputPointActions/createInputPoint'
import {store} from '../../store/globalStore'
import {getGlobalState,dispatchInputChange} from '../../utils/helperFunctions'

/**
 * Input point data for a selected date.
 * @param {*} props 
 */
function InputPointsPage(props) {
    const [state, dispatch] = useReducer(inputPointReducer, inputPointInitialState)
    const {isLoading, isError,isSuccess, date, sleepHours, water100oz, cleanEating, workoutIntenisty, workoutTime, steps} = state;

    // global store containing the use token for making requests
    const globalState= getGlobalState(useContext(store));

    /**
     * Handle input data change events.
     * 
     * Dispatch the associated event change to change the state of the input value.
     * @param {*} e -user event.
     */
    const handleChange = (event) => {
        dispatchInputChange(dispatch, event)
    }

    /**
     * Submit point data to the server.
     * @param {*} e - event
     */
    const handleClick = (e) => {
        e.preventDefault()
        dispatch({type:'inputPointSent'})
        CreateInputPoint( state,dispatch,globalState.token)
    }
    return (
        <div>
            input points
            <form>
                <label>
                    Date:
                <input data-testid='dateInput' name='date' type='text' value={date} onChange={handleChange} />
                </label>

                <label>
                    Sleep Hours:
                <input data-testid='sleepHoursInput' name='sleepHours' type='text' checked={sleepHours} onChange={handleChange} />
                </label>

                <label>
                    Workout Intensity:
                <input data-testid='workoutIntenistyInput' name='workoutIntenisty' type='text' value={workoutIntenisty} onChange={handleChange} />
                </label>
                <label>
                    Workout Time:
                <input data-testid='workoutTimeInput' name='workoutTime' type='text' value={workoutTime} onChange={handleChange} />
                </label>
                <label>
                    Steps:
                <input data-testid='stepsInput' name='steps' type='text' value={steps} onChange={handleChange} />
                </label>
                <label>
                    Water 100 oz:
                <input data-testid='water100ozInput' name='water100oz' type='checkbox' value={water100oz} checked={water100oz} onChange={handleChange} />
                </label>
                <label>
                    Clean Eating:
                <input data-testid='cleanEatingInput' name='cleanEating' type='checkbox' value={cleanEating} checked={cleanEating} onChange={handleChange} />
                </label>

                <button data-testid='submitButton' onClick={handleClick}>Submit points</button>
            </form>
            {/* handle results of input point activity submission post request */}
            {isSuccess? <div data-testid='successMsg'>new input successfully create</div>: null}
            {isError? <div data-testid='errorMsg'>Error on making new input activity, please try again</div>: null}

        </div>
    );
}

export default InputPointsPage;