import React from 'react'
import axios from 'axios'

/**
 * Fetch all current challenges.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getCurrentChallenges(dispatch,token){
    dispatch({type:'currentChallengesFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/currentChallenges/', {headers: { Authorization: `Bearer ${token}` }},config)
        dispatch({type:'addCurrentChallenges', currentChallenges: response.data})
    }catch(error){
         dispatch({type:'currentChallengesFetchError'})
    }

}
export default getCurrentChallenges;