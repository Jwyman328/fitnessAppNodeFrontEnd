const currentGoalsFetchAttemptFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorCurrentGoals: false,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingCurrentGoals: true,
  isLoadingFutureChallenges: false
};

const futureGoalsFetchAttemptFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isErrorFutureGoals: false,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false,
  isLoadingFutureGoals: true
};

const futureGoalsFetchErrorFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isErrorFutureGoals: true,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false,
  isLoadingFutureGoals: false
};

const currentGoalsFetchErrorFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorCurrentGoals: true,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingCurrentGoals: false,
  isLoadingFutureChallenges: false
};

const addFutureGoalsFinalStateMock = {
  currentChallenges: false,
  futureChallenges: false,
  futureGoals: "mock future goal",
  isErrorCurrentChallenges: false,
  isErrorFutureChallenges: false,
  isErrorFutureGoals: false,
  isLoadingCurrentChallenges: false,
  isLoadingFutureChallenges: false,
  isLoadingFutureGoals: false
};

const addCurrentGoalsFinalStateMock = {
  currentChallenges: false,
  currentGoals: "mock current goal",
  futureChallenges: false,
  isErrorCurrentChallenges: false,
  isErrorCurrentGoals: false,
  isErrorFutureChallenges: false,
  isLoadingCurrentChallenges: false,
  isLoadingCurrentGoals: false,
  isLoadingFutureChallenges: false
};

export {
  currentGoalsFetchAttemptFinalStateMock,
  futureGoalsFetchAttemptFinalStateMock,
  futureGoalsFetchErrorFinalStateMock,
  currentGoalsFetchErrorFinalStateMock,
  addFutureGoalsFinalStateMock,
  addCurrentGoalsFinalStateMock
};
