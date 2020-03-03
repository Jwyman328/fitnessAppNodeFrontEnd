import React from 'react'
import axios from 'axios'
import {sanitizeActivityPointDateValues} from '../../utils/helperFunctions'
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
        const response = await axios.get('https://enigmatic-springs-36428.herokuapp.com/allActivityPoints/mine/', {headers: { Authorization: `Bearer ${token}` }},config)
        const sanitizedActivityPointValues = sanitizeActivityPointDateValues(response.data)
        dispatch({type:'addDailyPoints', dailyPoints: sanitizedActivityPointValues})
    }catch(error){
         dispatch({type:'dailyPointsFetchError'})
    }

}
export default getDailyPoints;