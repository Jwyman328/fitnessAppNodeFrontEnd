const pastGoalsFetchAttemptFinalStateMock = {
  isErrorCurrentGoals: false,
  isErrorPastGoals: false,
  isLoadingCurrentGoals: true,
  isLoadingPastGoals: false,
  pastGoals: false
};

const pastGoalsFetchErrorfinalStateMock = {
  isErrorFutureGoals: true,
  isErrorPastGoals: false,
  isLoadingFutureGoals: false,
  isLoadingPastGoals: false,
  pastGoals: false
};

const addPastGoalFinalStateMock = {
  isErrorFutureGoals: false,
  isErrorPastGoals: false,
  isLoadingFutureGoals: false,
  isLoadingPastGoals: false,
  pastGoals: "mock past goal"
};

export {
  pastGoalsFetchAttemptFinalStateMock,
  pastGoalsFetchErrorfinalStateMock,
  addPastGoalFinalStateMock
};
