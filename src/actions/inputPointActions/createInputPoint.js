import React from 'react';
import axios from 'axios'

/**
 * Create a new activity input with a post request.
 * 
 * Dispatch results of attempted post, either succesful or error.
 * @param {object} state -- current state of pointInput activity submission attempt.
 * @param {*} dispatch  -- dispatcher that sends an action object to the pointInputReducer.
 */
async function CreateInputPoint(state,dispatch,token){
        const {date, sleepHours, water100oz, cleanEating, workoutIntenisty, workoutTime, steps} = state;
        const createInputData = {date:date, hoursOfSleep:sleepHours, water100Oz:water100oz, cleanEating:cleanEating, workoutIntensity:workoutIntenisty, workoutTimeLength:workoutTime, steps:steps}
        
        //post configureations with jwt token and input point data
        const config = {
            data:createInputData,
            headers: { Authorization: `Bearer ${token}` }
        };
        // specific header format is key:value
        const bodyParameters = {
            key: "value"
         };
        try{
            const response = await axios.post(`${process.env.REACT_APP_MAINURL}/activityInput/`,bodyParameters,config)
            // if succesful dispatch success
            dispatch({type:'inputPointSuccess'})
        }catch(error){
             dispatch({type:'inputError'})
        }

}
export default CreateInputPoint;