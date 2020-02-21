import React from 'react';
import axios from 'axios'

/**
 * Create a challenge  with a post request.
 * 
 * Dispatch results of attempted post, either succesful or error.
 * @param {object} state -- current state of challenge submission attempt.
 * @param {*} dispatch  -- dispatcher that sends an action object to the challengeReducer.
 */
async function CreateChallenge(state,dispatch,token){
        const {challengeStartDate,challengeEndDate, title, challengeType,invitees} = state;
        const createGoalInput = {challengeStartDate:challengeStartDate,challengeEndDate:challengeEndDate, title:title, challengeType:challengeType,invitees:invitees}
        
        //post configureations with jwt token and input goal data
        const config = {
            data:createGoalInput,
            headers: { Authorization: `Bearer ${token}` }
        };
        // specific header format is key:value
        const bodyParameters = {
            key: "value"
         };
        try{
            const response = await axios.post('http://localhost:3001/challenge/',bodyParameters,config)
            // if succesful dispatch success
            dispatch({type:'createChallengeSuccess'})
        }catch(error){
             dispatch({type:'createChallengeError'})
        }

}
export default CreateChallenge;