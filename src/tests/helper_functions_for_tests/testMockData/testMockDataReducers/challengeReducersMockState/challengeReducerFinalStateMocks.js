const today = new Date().toISOString().split("T")[0];

const createChallengeSuccessFinalStateMock = {
  allUsers: null,
  challengeEndDate: today,
  challengeStartDate: today,
  challengeType: "totalPoints",
  getAllUsersIsError: false,
  getAllUsersIsLoading: false,
  invitees: ["testUser1"],
  isErrorCreateChallengeAttempt: false,
  isLoading: false,
  isSuccessCreateChallengeAttempt: true,
  selectedUsers: [],
  title: ""
};

const createChallengeErrorFinalStateMock = {
  allUsers: null,
  challengeEndDate: today,
  challengeStartDate: today,
  challengeType: "totalPoints",
  getAllUsersIsError: false,
  getAllUsersIsLoading: false,
  invitees: ["testUser1"],
  isErrorCreateChallengeAttempt: true,
  isLoading: false,
  isSuccessCreateChallengeAttempt: false,
  selectedUsers: [],
  title: ""
};

const createChallengeAttemptFinalStateMock = {
  allUsers: null,
  challengeEndDate: today,
  challengeStartDate: today,
  challengeType: "totalPoints",
  getAllUsersIsError: false,
  getAllUsersIsLoading: false,
  invitees: ["testUser1"],
  isErrorCreateChallengeAttempt: false,
  isLoading: true,
  isSuccessCreateChallengeAttempt: false,
  selectedUsers: [],
  title: ""
};

const getAllUsersAttemptsFinalStateMock = {
  allUsers: null,
  challengeEndDate: today,
  challengeStartDate: today,
  challengeType: "totalPoints",
  getAllUsersIsError: false,
  getAllUsersIsLoading: true,
  invitees: ["testUser1"],
  isErrorCreateChallengeAttempt: false,
  isLoading: false,
  isSuccessCreateChallengeAttempt: false,
  selectedUsers: [],
  title: ""
};

const getAllUsersErrorFinalStateMock = {
  allUsers: null,
  challengeEndDate: today,
  challengeStartDate: today,
  challengeType: "totalPoints",
  getAllUsersIsError: true,
  getAllUsersIsLoading: false,
  invitees: ["testUser1"],
  isErrorCreateChallengeAttempt: false,
  isLoading: false,
  isSuccessCreateChallengeAttempt: false,
  selectedUsers: [],
  title: ""
};

const getAllUsersSuccessFinalStateMock = {
  allUsers: undefined,
  challengeEndDate: today,
  challengeStartDate: today,
  challengeType: "totalPoints",
  getAllUsersIsError: false,
  getAllUsersIsLoading: false,
  invitees: ["testUser1"],
  isErrorCreateChallengeAttempt: false,
  isLoading: false,
  isSuccessCreateChallengeAttempt: false,
  selectedUsers: [],
  title: ""
};

export {
  createChallengeSuccessFinalStateMock,
  createChallengeErrorFinalStateMock,
  createChallengeAttemptFinalStateMock,
  getAllUsersAttemptsFinalStateMock,
  getAllUsersErrorFinalStateMock,
  getAllUsersSuccessFinalStateMock
};
