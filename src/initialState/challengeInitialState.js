import React from "react";
const today = new Date().toISOString().split("T")[0];

const challengeInitialState = {
  challengeType: "totalPoints",
  title: "",
  invitees: ["testUser1"],
  challengeStartDate: today,
  challengeEndDate: today,
  isSuccessCreateChallengeAttempt: false,
  isErrorCreateChallengeAttempt: false,
  isLoading: false,
  getAllUsersIsLoading: false,
  getAllUsersIsError: false,
  allUsers: null,
  selectedUsers: []
};

export default challengeInitialState;
