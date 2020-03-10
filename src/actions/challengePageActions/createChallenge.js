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
        const {challengeStartDate,challengeEndDate, title, challengeType,selectedUsers} = state;
        const createGoalInput = {startDate:challengeStartDate,
            endDate:challengeEndDate, title:title, challengeType:challengeType,
            invitees:selectedUsers}
        
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
            const response = await axios.post(`${process.env.REACT_APP_MAINURL}/challenge/`,{headers: { Authorization: `Bearer ${token}` }},config)
            // if succesful dispatch success
            dispatch({type:'createChallengeSuccess'})
        }catch(error){
             dispatch({type:'createChallengeError'})
        }

}
export default CreateChallenge;