//getPastChallenges
import React from 'react'
import axios from 'axios'

/**
 * Fetch all past challenges.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getPastChallenges(dispatch,token){
    dispatch({type:'pastChallengesFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/pastChallenges/', {headers: { Authorization: `Bearer ${token}` }},config)
        dispatch({type:'addPastChallenges', pastChallenges: response.data})
    }catch(error){
         dispatch({type:'pendingChallengesFetchError'})
    }

}
export default getPastChallenges;