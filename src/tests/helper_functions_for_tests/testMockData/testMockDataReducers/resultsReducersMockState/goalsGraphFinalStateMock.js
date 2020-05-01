const today = new Date().toISOString().split("T")[0];

const getTotalAccumulatedAttemptFinalStateMock = {
  dailyGoal: false,
  goalEndDate: today,
  goalStartDate: today,
  isError: false,
  isLoading: true,
  pointGoal: 50
};

const getTotalAccumulatedErrorFinalStateMock = {
  dailyGoal: false,
  goalEndDate: today,
  goalStartDate: today,
  isError: true,
  isloading: false,
  pointGoal: 50
};

const addGoalTotalPointsForDateRangeFinalStateMock = {
  dailyGoal: false,
  goalEndDate: today,
  goalStartDate: today,
  isError: false,
  isLoading: false,
  pointGoal: 50,
  totalPointForDateRange: "mock total point date ranges"
};

export {
  getTotalAccumulatedAttemptFinalStateMock,
  getTotalAccumulatedErrorFinalStateMock,
  addGoalTotalPointsForDateRangeFinalStateMock
};
