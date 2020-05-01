const today = new Date().toISOString().split("T")[0];

const createGoalSuccessFinalStateMock = {
  dailyGoal: false,
  goalEndDate: today,
  goalStartDate: today,
  isError: false,
  isSuccess: true,
  pointGoal: 50
};

const createGoallErrorFinalStateMock = {
  dailyGoal: false,
  goalEndDate: today,
  goalStartDate: today,
  isError: true,
  isLoading: false,
  isSuccess: false,
  pointGoal: 50
};

const createGoalAttemptFinalStateMock = {
  dailyGoal: false,
  goalEndDate: today,
  goalStartDate: today,
  isError: false,
  isLoading: true,
  isSuccess: false,
  pointGoal: 50
};

export {
  createGoalSuccessFinalStateMock,
  createGoallErrorFinalStateMock,
  createGoalAttemptFinalStateMock
};
