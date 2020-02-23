import React from 'react';
import axios from 'axios'

/**
 * 
 * 
 * Dispatch results of attempted post, either succesful or error.
 * @param {object} state -- current state of challenge submission attempt.
 * @param {*} dispatch  -- dispatcher that sends an action object to the challengeReducer.
 */
async function GetAllUsers(dispatch,token){
        dispatch({type:'getAllUsertsAttempt'})
        //post configureations with jwt token and input goal data
        console.log(token)
        const config = {
            data:{ Authorization: `Bearer ${token}` },
            headers: { Authorization: `Bearer ${token}` }
        };
        // specific header format is key:value
        const bodyParameters = {
            key: "value"
         };
        try{
            const response = await axios.get('http://localhost:3001/user/allUsers/', {headers: { Authorization: `Bearer ${token}` }},config)
            // if succesful dispatch success
            console.log(response.data, 'ressy')
            dispatch({type:'getAllUsersSuccess', allUsers: response.data})
        }catch(error){
             dispatch({type:'getAllUsersError'})
        }

}
export default GetAllUsers;