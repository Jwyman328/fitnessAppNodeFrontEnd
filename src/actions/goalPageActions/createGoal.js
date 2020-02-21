import React from 'react';
import axios from 'axios'

/**
 * Create a new activity input with a post request.
 * 
 * Dispatch results of attempted post, either succesful or error.
 * @param {object} state -- current state of pointInput activity submission attempt.
 * @param {*} dispatch  -- dispatcher that sends an action object to the pointInputReducer.
 */
async function CreateGoal(state,dispatch,token){
        const {goalStartDate,goalEndDate, dailyGoal, pointGoal} = state;
        const createGoalInput = {goalStartDate:goalStartDate,goalEndDate:goalEndDate, dailyGoal:dailyGoal, pointGoal:pointGoal}
        
        //post configureations with jwt token and input point data
        const config = {
            data:createGoalInput,
            headers: { Authorization: `Bearer ${token}` }
        };
        // specific header format is key:value
        const bodyParameters = {
            key: "value"
         };
        try{
            const response = await axios.post('http://localhost:3001/totalPointGoal/',bodyParameters,config)
            // if succesful dispatch success
            //console.log(response, 'input response')            
            dispatch({type:'createGoalSuccess'})
        }catch(error){
             dispatch({type:'createGoalError'})
        }

}
export default CreateGoal;