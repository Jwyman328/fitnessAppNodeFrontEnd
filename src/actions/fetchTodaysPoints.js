import React from 'react'
import axios from 'axios'
import {sanitizeActivityPointDateValues} from '../utils/helperFunctions'

/**
 * Fetch all daily point inputs.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getTodaysPoints(dispatch,token){
    dispatch({type:'todaysPointsFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        
        const response = await axios.get('https://enigmatic-springs-36428.herokuapp.com/todaysPoints/', {headers: { Authorization: `Bearer ${token}` }},config)
        const sanitizedActivityPointValues = sanitizeActivityPointDateValues(response.data)
        dispatch({type:'addTodaysPoints', todaysPoints: sanitizedActivityPointValues[0]})
    }catch(error){
         dispatch({type:'todaysPointsFetchError'})
    }

}
export default getTodaysPoints;