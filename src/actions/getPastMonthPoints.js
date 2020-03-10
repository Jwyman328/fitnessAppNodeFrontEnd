import React from 'react'
import axios from 'axios'
import {sanitizeActivityPointDateValues} from '../utils/helperFunctions'
import {Last30Days, createMonthDatePointValue} from '../utils/helperFunctions'
/**
 * Fetch all daily point inputs.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getTodaysPoints(dispatch,token){
    dispatch({type:'todaysPointsFetchAttempt'});

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get(`${process.env.REACT_APP_MAINURL}/pastMonthPoints/`, {headers: { Authorization: `Bearer ${token}` }},config)
        const sanitizedActivityPointValues = sanitizeActivityPointDateValues(response.data)
        const pastMonthValues = Last30Days()
        let arrayOfValuesWithDate = createMonthDatePointValue(pastMonthValues,sanitizedActivityPointValues)

        dispatch({type:'addPastMonthPointsDates', pastMonthPoints: Object.values(pastMonthValues).reverse(), 
            pastMonthDates:Object.keys(pastMonthValues).reverse()});
    }catch(error){
         dispatch({type:'todaysPointsFetchError'})
    }

}
export default getTodaysPoints;