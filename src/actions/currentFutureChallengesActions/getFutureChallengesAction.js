//getPastChallenges
import React from 'react'
import axios from 'axios'
import {sanitizeChallengeDateValues} from '../../utils/helperFunctions'

/**
 * Fetch all future challenges.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getFutureChallenges(dispatch,token){
    dispatch({type:'futureChallengesFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/futureChallenges/', {headers: { Authorization: `Bearer ${token}` }},config)
        const sanitizedChallengeDateValues = sanitizeChallengeDateValues(response.data)
        dispatch({type:'addFutureChallenges', futureChallenges: sanitizedChallengeDateValues})
    }catch(error){
         dispatch({type:'futureChallengesFetchError'})
    }

}
export default getFutureChallenges;