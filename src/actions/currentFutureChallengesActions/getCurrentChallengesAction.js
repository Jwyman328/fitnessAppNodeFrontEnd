import React from 'react'
import axios from 'axios'
import {sanitizeChallengeDateValues} from '../../utils/helperFunctions'

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
        const response = await axios.get('https://enigmatic-springs-36428.herokuapp.com/currentChallenges/', {headers: { Authorization: `Bearer ${token}` }},config)
        const sanitizedChallengeDateValues = sanitizeChallengeDateValues(response.data)
        dispatch({type:'addCurrentChallenges', currentChallenges: sanitizedChallengeDateValues})
    }catch(error){
        console.log(error)
         dispatch({type:'currentChallengesFetchError'})
    }

}
export default getCurrentChallenges;