import React from 'react'
const today = new Date().toISOString().split('T')[0]

const initialState = {
    challengeType:'totalPoints',
    title:'',
    invitees:['testUser1'],
    challengeStartDate: today,
    challengeEndDate: today,
    isSuccess:false,
    isError:false,
    isLoading:false,
    getAllUsersIsLoading:false,
    getAllUsersIsError:false,
    allUsers:null,
    selectedUsers:[],

}

export default initialState ;