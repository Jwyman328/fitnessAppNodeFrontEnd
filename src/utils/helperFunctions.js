import React from 'react';
//    const {globalState, globalDispatch} = contextState;

/**
 * Return the current global state 
 * @param {Object} store -- Global store object taken from a useContextHook.
 */
function getGlobalState(store){
    const {globalState} = store;
    return globalState
}

/**
 * Return global store dispatcher.
 * @param {Object} store -- lobal store object taken from a useContextHook.
 */
function getGlobalDispatcher(store){
    //const contextState = useContext(store)
    const {globalDispatch} = store;
    return globalDispatch
}
/**
 * Dispatch action to handle change of input value.
 * 
 * Handle checkbox or value change
 * @param {Function} dispatcher -- Dispatcher to dispatch actions.
 * @param {*} event -- browser event.
 */
function dispatchInputChange(dispatch, event){
    console.log(event.target.type, 'evvy')
    if (event.target.type === 'checkbox'){
        dispatch({type:'handleCheckbox', name: event.target.name, checked: event.target.checked})
    }else{
        dispatch({type:'handleChange', name:event.target.name, value:event.target.value})
    }
}

function getAllUsers(){

}

/**
 * Add new user to the selected users, remove selected user if already in the selectedUsers array.
 * @param {Array} selectedUsers -- All previously selected users
 * @param {String} selectedUser -- new selected user.
 */
function handleSelectedUsers(selectedUsers, selectedUser){
    if (selectedUsers.includes(selectedUser)){
        selectedUsers  = selectedUsers.filter(selectedUserValue => 
            selectedUserValue != selectedUser)     
   }else{
       selectedUsers.push(selectedUser)
   }
   return selectedUsers
}

const sanitizeChallengeDateValues = (responseData) => {
    const sanitizedChalllengeData = responseData.map(challenge => {
        challenge.startDate= challenge.startDate.split('T')[0];
        challenge.endDate= challenge.endDate.split('T')[0];
        return challenge
    }) 
    return sanitizedChalllengeData
}

const sanitizeGoalDateValues = (responseData) => {
    const sanitizedGoalData = responseData.map(goal => {
        goal.goalStartDate= goal.goalStartDate.split('T')[0];
        goal.goalEndDate= goal.goalEndDate.split('T')[0];
        return goal
    }) 
    return sanitizedGoalData
}

const sanitizeActivityPointDateValues = (responseData) => {
    const sanitizedActivityPointData = responseData.map(activityPoint => {
        activityPoint.date= activityPoint.date.split('T')[0];
        return activityPoint
    }) 
    return sanitizedActivityPointData
}

export {getGlobalState,getGlobalDispatcher,dispatchInputChange,handleSelectedUsers, sanitizeChallengeDateValues, sanitizeGoalDateValues, sanitizeActivityPointDateValues}
