const today = new Date().toISOString().split("T")[0];

const inputPointSentFinalStateMock = {
  cleanEating: false,
  date: today,
  isError: false,
  isLoading: true,
  isSuccess: false,
  sleepHours: 0,
  steps: 0,
  water100oz: false,
  workoutIntenisty: 0,
  workoutTime: 0
};

const inputPointSuccessFinalStateMock = {
  cleanEating: false,
  date: today,
  isError: false,
  isLoading: false,
  isSuccess: true,
  sleepHours: 0,
  steps: 0,
  water100oz: false,
  workoutIntenisty: 0,
  workoutTime: 0
};

const inputPointIsErrorFinalStateMock = {
  cleanEating: false,
  date: today,
  isError: true,
  isLoading: false,
  isSuccess: false,
  sleepHours: 0,
  steps: 0,
  water100oz: false,
  workoutIntenisty: 0,
  workoutTime: 0
};

export {
  inputPointSentFinalStateMock,
  inputPointSuccessFinalStateMock,
  inputPointIsErrorFinalStateMock
};
