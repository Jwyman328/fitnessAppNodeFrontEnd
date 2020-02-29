import React from 'react'
import axios from 'axios'

/**
 * Fetch all future goals.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getfutureGoals(dispatch,token){
    dispatch({type:'futureGoalsFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/futureGoals/', {headers: { Authorization: `Bearer ${token}` }},config)
        dispatch({type:'addFutureGoals', futureGoals: response.data})
    }catch(error){
         dispatch({type:'futureGoalsFetchError'})
    }

}
export default getfutureGoals;