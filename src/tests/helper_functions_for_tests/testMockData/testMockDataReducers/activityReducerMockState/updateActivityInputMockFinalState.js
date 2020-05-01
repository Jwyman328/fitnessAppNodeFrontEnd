const today = new Date().toISOString().split("T")[0];

const updateActivityInputFetchAttemptFinalStateMock = {
  activityInput: {
    cleanEating: false,
    date: today,
    hoursOfSleep: 0,
    steps: 0,
    water100Oz: false,
    workoutIntensity: 0,
    workoutTimeLength: 0
  },
  isErrorActivityInput: false,
  isErrorUpdateActivityInput: false,
  isLoadingActivityInput: true,
  isLoadingUpdateActivityInput: false,
  upDateActivityInputSuccess: false
};
const updateActivityInputFetchErrorStateMock = {
  activityInput: {
    cleanEating: false,
    date: today,
    hoursOfSleep: 0,
    steps: 0,
    water100Oz: false,
    workoutIntensity: 0,
    workoutTimeLength: 0
  },
  isErrorActivityInput: true,
  isErrorUpdateActivityInput: false,
  isLoadingActivityInput: false,
  isLoadingUpdateActivityInput: false,
  upDateActivityInputSuccess: false
};
const updateAddInputFinalStateMock = {
  activityInput: "mockInput",
  isErrorActivityInput: false,
  isErrorUpdateActivityInput: false,
  isLoadingActivityInput: false,
  isLoadingUpdateActivityInput: false,
  upDateActivityInputSuccess: false
};
const updateAttemptFinalStateMock = {
  activityInput: {
    cleanEating: false,
    date: today,
    hoursOfSleep: 0,
    steps: 0,
    water100Oz: false,
    workoutIntensity: 0,
    workoutTimeLength: 0
  },
  isErrorActivityInput: false,
  isErrorUpdateActivityInput: false,
  isLoadingActivityInput: false,
  isLoadingUpdateActivityInput: true,
  upDateActivityInputSuccess: false
};
const updateErrorFinalStateMock = {
  activityInput: {
    cleanEating: false,
    date: today,
    hoursOfSleep: 0,
    steps: 0,
    water100Oz: false,
    workoutIntensity: 0,
    workoutTimeLength: 0
  },
  isErrorActivityInput: false,
  isErrorUpdateActivityInput: true,
  isLoadingActivityInput: false,
  isLoadingUpdateActivityInput: false,
  upDateActivityInputSuccess: false
};
const updateSuccessFinalStateMock = {
  activityInput: {
    cleanEating: false,
    date: today,
    hoursOfSleep: 0,
    steps: 0,
    water100Oz: false,
    workoutIntensity: 0,
    workoutTimeLength: 0
  },
  isErrorActivityInput: false,
  isErrorUpdateActivityInput: false,
  isLoadingActivityInput: false,
  isLoadingUpdateActivityInput: false,
  upDateActivityInputSuccess: true
};
export {
  updateActivityInputFetchAttemptFinalStateMock,
  updateActivityInputFetchErrorStateMock,
  updateAddInputFinalStateMock,
  updateAttemptFinalStateMock,
  updateErrorFinalStateMock,
  updateSuccessFinalStateMock
};
