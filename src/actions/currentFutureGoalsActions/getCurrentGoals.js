import React from 'react'
import axios from 'axios'

/**
 * Fetch all current goals.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getCurrentGoals(dispatch,token){
    dispatch({type:'currentGoalsFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/currentGoals/', {headers: { Authorization: `Bearer ${token}` }},config)
        dispatch({type:'addCurrentGoals', currentGoals: response.data})
    }catch(error){
         dispatch({type:'currentGoalsFetchError'})
    }

}
export default getCurrentGoals;