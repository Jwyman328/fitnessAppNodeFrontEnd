import React, {useReducer, useContext} from 'react';
import initialState from '../initialState/pointGoalInitialState';
import goalReducer from '../reducers/goalReducer';
import CreateGoal from '../actions/goalPageActions/createGoal'
import {store} from '../store/globalStore'

function GoalsPage(props) {
    // global store containing the use token for making requests
    const contextState = useContext(store)
    const {globalState, globalDispatch} = contextState;
    
    //goals page reducer
    const [state, dispatch] = useReducer(goalReducer, initialState)
    const {goalStartDate, goalEndDate,dailyGoal, pointGoal,isSuccess, isLoading, isError} = state;

    const handleChange = (e) => {
        console.log(e.target.checked)
        if (e.target.type === 'checkbox'){
            dispatch({type:'handleCheckbox', name: e.target.name, checked: e.target.checked})
        }else{
            dispatch({type:'handleChange', name:e.target.name, value:e.target.value})
        }
    }

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