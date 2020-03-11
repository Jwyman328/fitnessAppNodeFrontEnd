import React from 'react'

/**
 * Initial global state.
 */
const localToken = JSON.parse(localStorage.getItem('token'))
const initialState = localToken?{token:localToken,isLoggedIn:true} : {token:'',isLoggedIn:false} 

export default initialState;