import React from 'react'
import axios from 'axios'

/**
 * Fetch all pending challenge invitations for user.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 */
async function getAllPendingChallengeInvitations(dispatch,token){
    dispatch({type:'pendingChallengesFetchAttempt'})

    const config = {
        data:{ Authorization: `Bearer ${token}` },
        headers: { Authorization: `Bearer ${token}` }
    };
    // specific header format is key:value
    const bodyParameters = {
        key: "value"
     };
    try{
        const response = await axios.get('http://localhost:3001/AllChallengeInvitation/myInvitations/pending', {headers: { Authorization: `Bearer ${token}` }},config)
        dispatch({type:'addPendingChallenges', pendingChallenges: response.data})
    }catch(error){
         dispatch({type:'pendingChallengesFetchError'})
    }

}
export default getAllPendingChallengeInvitations;