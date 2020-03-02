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


function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = yyyy+'-'+mm+'-'+dd;
    return date
 }

 function Last30Days () {
    let result = {};
    for (let i=0; i<30; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        result[formatDate(d)] = 0
    }

    return(result);
 }
const createMonthDatePointValue = (pastMonthValues, sanitizedActivityPointValues) => {
 let arrayOfValuesWithDate = Object.keys(pastMonthValues).map(day => {
    let tom = sanitizedActivityPointValues.map(pointValue => {
        if (pointValue.date ===  day){
            pastMonthValues[day]= pointValue.totalPoints
            return
        }else{
            return
        }
        return
})}) }

export {getGlobalState,getGlobalDispatcher,dispatchInputChange,handleSelectedUsers, 
    sanitizeChallengeDateValues, sanitizeGoalDateValues, sanitizeActivityPointDateValues, 
    Last30Days, createMonthDatePointValue}
