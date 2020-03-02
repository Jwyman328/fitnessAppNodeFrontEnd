import React from 'react'
import axios from 'axios'
import {sanitizeGoalDateValues} from '../../utils/helperFunctions'

/**
 * Fetch all current goals.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getPastGoals(dispatch,token){
    dispatch({type:'pastGoalsFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/pastGoals/', {headers: { Authorization: `Bearer ${token}` }},config)
        const sanitizesGoalDateValues = sanitizeGoalDateValues(response.data)

        dispatch({type:'addPastGoals', pastGoals: sanitizesGoalDateValues})
    }catch(error){
         dispatch({type:'pastGoalsFetchError'})
    }

}
export default getPastGoals;