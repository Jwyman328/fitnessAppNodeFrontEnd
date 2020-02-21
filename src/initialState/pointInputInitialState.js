import React from 'react';
// initial point input state 
const initialState = {
    isLoading:'',
    isError:'',
    date: new Date().toISOString().split('T')[0],
    sleepHours:0,
    water100oz:false,
    cleanEating:false,
    workoutIntenisty:0,
    workoutTime:0,
    steps:0,
}
export default initialState;