import React from "react";
//    const {globalState, globalDispatch} = contextState;

/**
 * Return the current global state
 * @param {Object} store -- Global store object taken from a useContextHook.
 */
function getGlobalState(store) {
  const { globalState } = store;
  return globalState;
}

/**
 * Return global store dispatcher.
 * @param {Object} store -- lobal store object taken from a useContextHook.
 */
function getGlobalDispatcher(store) {
  //const contextState = useContext(store)
  const { globalDispatch } = store;
  return globalDispatch;
}
/**
 * Dispatch action to handle change of input value.
 *
 * Handle checkbox or value change
 * @param {Function} dispatcher -- Dispatcher to dispatch actions.
 * @param {*} event -- browser event.
 */
function dispatchInputChange(dispatch, event) {
  if (event.target.type === "checkbox") {
    dispatch({
      type: "handleCheckbox",
      name: event.target.name,
      checked: event.target.checked
    });
  } else {
    dispatch({
      type: "handleChange",
      name: event.target.name,
      value: event.target.value
    });
  }
}

/**
 * Add new user to the selected users, remove selected user if already in the selectedUsers array.
 * @param {Array} selectedUsers -- All previously selected users
 * @param {String} selectedUser -- new selected user.
 */
function handleSelectedUsers(selectedUsers, selectedUser) {
  if (selectedUsers.includes(selectedUser)) {
    selectedUsers = selectedUsers.filter(
      selectedUserValue => selectedUserValue != selectedUser
    );
  } else {
    selectedUsers.push(selectedUser);
  }
  return selectedUsers;
}

/**
 * Remove time portion (minute,seconds, etc.) from each challenge object start and end date.
 *
 * @param {Array} goalObjects array of goalObjects.
 */
const removeTimeFromChallengeDateValues = challengeObjects => {
  const sanitizedChalllengeData = challengeObjects.map(challenge => {
    challenge.startDate = challenge.startDate.split("T")[0];
    challenge.endDate = challenge.endDate.split("T")[0];
    return challenge;
  });
  return sanitizedChalllengeData;
};

/**
 * Remove time portion (minute,seconds, etc.) from each goal object start and end date.
 *
 * @param {Array} goalObjects array of goalObjects.
 */
const removeTimeFromGoalObjectDateValues = goalObjects => {
  const sanitizedGoalData = goalObjects.map(goal => {
    goal.goalStartDate = goal.goalStartDate.split("T")[0];
    goal.goalEndDate = goal.goalEndDate.split("T")[0];
    return goal;
  });
  return sanitizedGoalData;
};

/**
 * Remove time portion (minute,seconds, etc.) from each activityPoint date.
 *
 * @param   {Array} pastThirtyDaysActivityPointObjs array of past thirty days of activity point objects.
 * @return  {Array}                                 array of past thirty days of activity point objects
 *    without time (minute,seconds, etc.) portion of date.
 */
const removeTimeFromActivityPointDateValues = pastThirtyDaysActivityPointObjs => {
  const sanitizedActivityPointData = pastThirtyDaysActivityPointObjs.map(
    activityPoint => {
      activityPoint.date = activityPoint.date.split("T")[0];
      return activityPoint;
    }
  );
  return sanitizedActivityPointData;
};

/**
 * Remove time portion (minute,seconds, etc.) from full date string value.
 *
 * @param   {String} dateStr date value in full string form.
 * @return  {String}         str date value without time (minute,seconds, etc.) portion.
 */
const sanitizeSingleDateValue = dateStr => {
  return dateStr.split("T")[0];
};

/**
 * Return yyyy-mm-dd string of date object input.
 *
 * @param {Date} date Date object
 * @return {String}   yyyy-mm-dd of inputted date.
 */
function formatDate(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = yyyy + "-" + mm + "-" + dd;
  return date;
}

/**
 * Create an array of 30 yyyy-mm-dd dates for the past 30 days.
 *
 * @return {Array} past 30 days in yyyy-mm-dd format.
 */
function getDatesForLast30Days() {
  let result = {};
  for (let i = 0; i < 30; i++) {
    let d = new Date();
    d.setDate(d.getDate() - i);
    result[formatDate(d)] = 0;
  }

  return result;
}

/**
 *
 *
 * @param {*} pastMonthValues
 * @param {*} sanitizedActivityPointValues
 */
const createMonthDatePointValue = (
  pastThirtyDaysStrDateValues,
  sanitizedActivityPointValues
) => {
  let arrayOfValuesWithDate = Object.keys(pastThirtyDaysStrDateValues).map(
    day => {
      let tom = sanitizedActivityPointValues.map(pointValue => {
        if (pointValue.date === day) {
          pastThirtyDaysStrDateValues[day] = pointValue.totalPoints;
          return;
        } else {
          return;
        }
        return;
      });
    }
  );
};

export {
  getGlobalState,
  getGlobalDispatcher,
  dispatchInputChange,
  handleSelectedUsers,
  removeTimeFromChallengeDateValues,
  removeTimeFromGoalObjectDateValues,
  removeTimeFromActivityPointDateValues,
  getDatesForLast30Days,
  createMonthDatePointValue,
  sanitizeSingleDateValue,
  formatDate
};
