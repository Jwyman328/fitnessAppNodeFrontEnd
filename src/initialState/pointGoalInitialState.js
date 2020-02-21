import React from 'react';
const today = new Date().toISOString().split('T')[0]

const initialState = {
    goalStartDate: today,
    goalEndDate: today,
    dailyGoal:false,
    pointGoal: 50,
}

export default initialState;