import React from 'react';

const initialState = {
    isLoadingActivityInput: false,
    isErrorActivityInput:false,
    isLoadingUpdateActivityInput: false,
    isErrorUpdateActivityInput:false,
    upDateActivityInputSuccess:false,
    activityInput: {
        date: new Date().toISOString().split('T')[0],
        hoursOfSleep:0,
        water100Oz:false,
        cleanEating:false,
        workoutIntensity: 0,
        workoutTimeLength: 0,
        steps: 0
    },
}

export default initialState;