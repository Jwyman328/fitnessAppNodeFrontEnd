import React, {useReducer, useContext, useEffect} from 'react';
import initialState from '../initialState/challengeInitialState';
import CreateChallenge from '../actions/challengePageActions/createChallenge'
import challengeReducer from '../reducers/challengeReducer'
import {store} from '../store/globalStore'
import {getGlobalState, dispatchInputChange} from '../utils/helperFunctions'



function ChallengePage(props) {
    // global store containing the use token for making requests
    const globalState = getGlobalState(useContext(store));
    
    //goal's page reducer
    const [state, dispatch] = useReducer(challengeReducer, initialState)
    const {challengeStartDate, challengeEndDate, title,
         challengeType, isSuccess, isLoading, isError} = state;

    /**
     * Handle change of each input.
     * @param {*} e -input event 
     */
    const handleChange = (event) => {
        dispatchInputChange(dispatch, event)
    }

    /**
     * Submit challenge state input to server to create a goal.
     * 
     * Dispatch that the attempt challenge creation has been attempted.
     * Attempt to create goal, passing dispatcher, current state, and user's token.
     * @param {*} e - event
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'createChallengeAttempt'});
        CreateChallenge(state,dispatch, globalState.token);
    }

    return (
        <div>
            challenge Page
            <form>
                <label>
                    Start Date:
                    <input name='challengeStartDate' data-testid='challengeStartDate' type='text' value={challengeStartDate} onChange={handleChange} />    
                </label>
                <label>
                    End Date:
                    <input name='challengeEndDate' data-testid='challengeEndDate' type='text' value={challengeEndDate} onChange={handleChange} />    
                </label>
                <label>
                    Title:
                    <input name='title' data-testid='title' type='text' value={title} onChange={handleChange} />    
                </label>

                <select data-testid='challengeType' name='challengeType' value={challengeType} onChange={handleChange}>
                    <option value="sleep">Sleep</option>
                    <option value="Water">Water</option>
                    <option  value="Clean Eating">Clean Eating</option>
                    <option  value="totalPoints">Total Points</option>
                    <option value="Workout">Workout</option>
                </select>

                <button data-testid='submitButton' onClick={handleSubmit}>create challenge</button>
            </form>
           {isSuccess? <div data-testid="successMsg">Challenge created successfully</div> : null }
           {isError? <div data-testid="errorMsg">Error creating challenge, please try again</div> : null }

        </div>
    );
}

export default ChallengePage;