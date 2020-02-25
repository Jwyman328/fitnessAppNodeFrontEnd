import React, {useReducer, useContext} from 'react';
import initialState from '../../initialState/pointGoalInitialState';
import goalReducer from '../../reducers/goalReducer';
import CreateGoal from '../../actions/goalPageActions/createGoal'
import {store} from '../../store/globalStore'
import {getGlobalState,dispatchInputChange} from '../../utils/helperFunctions'
/**
 * Allow user to create a total point goal.
 * @param {*} props 
 */
function GoalsPage(props) {
    // global store containing the use token for making requests
    const globalState = getGlobalState(useContext(store))
    
    //goal's page reducer
    const [state, dispatch] = useReducer(goalReducer, initialState)
    const {goalStartDate, goalEndDate,dailyGoal, pointGoal,isSuccess, isLoading, isError} = state;

    /**
     * Handle change of each input.
     * @param {*} e -input event 
     */
    const handleChange = (event) => {
        dispatchInputChange(dispatch, event)
    }

    /**
     * Submit goal state input to server to create a goal.
     * 
     * Dispatch that the attempt goal creation has been attempted.
     * Attempt to create goal, passing dispatcher, current state, and user's token.
     * @param {*} e - event
     */
    const handleSubmit = (e) => {
        //dispatch action of post request
        e.preventDefault()
        dispatch({type:'createGoalAttempt'});
        CreateGoal(state,dispatch, globalState.token);
    }

    return (
        <div>
            goal Page
            <form>
                <label>
                    Start Date:
                    <input name='goalStartDate' data-testid='startDate' type='text' value={goalStartDate} onChange={handleChange} />    
                </label>
                <label>
                    End Date:
                    <input name='goalEndDate' data-testid='goalEndDate' type='text' value={goalEndDate} onChange={handleChange} />    
                </label>
                <label>
                    Daily Goal?:
                    <input name='dailyGoal' data-testid='dailyGoal' type='checkbox' checked={dailyGoal} onChange={handleChange} />    
                </label>
                <label>
                    Point Goal:
                    <input name='pointGoal' data-testid='pointGoal' type='text' value={pointGoal} onChange={handleChange} />    
                </label>
                <button data-testid='submitButton' onClick={handleSubmit}>create goal</button>
            </form>
           {isSuccess? <div data-testid="successMsg">Goal created successfully</div> : null }
           {isError? <div data-testid="errorMsg">Error creating goal, please try again</div> : null }

        </div>
    );
}

export default GoalsPage;