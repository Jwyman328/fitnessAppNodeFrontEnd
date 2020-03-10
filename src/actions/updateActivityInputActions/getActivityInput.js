import React from 'react'
import axios from 'axios'
import {sanitizeSingleDateValue} from '../../utils/helperFunctions'

/**
 * Fetch individual activity input by id.
 * 
 * @param {String} activityInputId -- id of activity input.
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getActivityInput(dispatch,token, activityInputId){
    dispatch({type:'activityInputFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get(`${process.env.REACT_APP_MAINURL}/activityInput/${activityInputId}/`, {headers: { Authorization: `Bearer ${token}` }},config)

        response.data.date = sanitizeSingleDateValue(response.data.date)
        dispatch({type:'addActivityInput', activityInput: response.data})
    }catch(error){
         dispatch({type:'activityInputFetchError'})
    }

}
export default getActivityInput;