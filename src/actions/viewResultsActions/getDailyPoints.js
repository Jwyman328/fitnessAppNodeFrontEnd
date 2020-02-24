import React from 'react'
import axios from 'axios'

/**
 * Fetch all daily point inputs.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getDailyPoints(dispatch,token){
    dispatch({type:'dailyPointsFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/allActivityPoints/mine/', {headers: { Authorization: `Bearer ${token}` }},config)
        dispatch({type:'addDailyPoints', dailyPoints: response.data})
    }catch(error){
         dispatch({type:'dailyPointsFetchError'})
    }

}
export default getDailyPoints;