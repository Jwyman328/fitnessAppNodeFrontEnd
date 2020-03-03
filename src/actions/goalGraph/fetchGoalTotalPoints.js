import React from 'react';
import axios from 'axios'
/**
 * Fetch accumulated points for the range of dates of the selected goal.
 * 
 * @param {Function} dispatch -- Graph goal dispatcher.
 * @param {String} token -- JWT token for authorization.
 * @param {Date} goalStartDate -- Goal start date.
 * @param {Date} goalEndDate -- Goal end date.
 */
async function fetchGoalTotalPoints(dispatch,token,goalStartDate,goalEndDate){
   dispatch({type:'getTotalAccumulatedAttempt'})
   const config = {
    data:{ Authorization: `Bearer ${token}` },
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
    key: "value"
 };
try{
    const response = await axios.get(`http://localhost:3001/goalPoints/${goalStartDate}/${goalEndDate}/`, {headers: { Authorization: `Bearer ${token}` }},config)
    dispatch({type: 'addGoalTotalPointsForDateRange', totalPointForDateRange: response.data.totalPointForDateRange})     
}catch(error){
    dispatch({type:'getTotalAccumulatedError'})
}
}

export default fetchGoalTotalPoints;