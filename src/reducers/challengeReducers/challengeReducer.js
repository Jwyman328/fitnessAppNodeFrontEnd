import React from "react";
import { handleSelectedUsers } from "../../utils/helperFunctions";

function challengeReducer(state, action) {
  switch (action.type) {
    case "handleChange":
      return {
        ...state,
        [action.name]: action.value
      };
    case "handleCheckbox":
      return {
        ...state,
        [action.name]: action.checked
      };
    case "createChallengeSuccess":
      return {
        ...state,
        isSuccessCreateChallengeAttempt: true,
        isErrorCreateChallengeAttempt: false
      };
    case "createChallengeError":
      return {
        ...state,
        isSuccessCreateChallengeAttempt: false,
        isErrorCreateChallengeAttempt: true,
        isLoading: false
      };
    case "createChallengeAttempt":
      return {
        ...state,
        isSuccessCreateChallengeAttempt: false,
        isErrorCreateChallengeAttempt: false,
        isLoading: true
      };
    case "getAllUsersAttempt":
      return {
        ...state,
        getAllUsersIsLoading: true,
        getAllUsersIsError: false
      };
    case "getAllUsersError":
      return {
        ...state,
        getAllUsersIsLoading: false,
        getAllUsersIsError: true
      };
    case "getAllUsersSuccess":
      return {
        ...state,
        getAllUsersIsLoading: false,
        getAllUsersIsError: false,
        allUsers: action.allUsers,
        selectedUsers: []
      };

    case "handleSelectedUsers":
      let { selectedUsers } = { ...state };
      selectedUsers = handleSelectedUsers(selectedUsers, action.selectedUser);
      return {
        ...state,
        selectedUsers: selectedUsers
      };
  }
  return state;
}

export default challengeReducer;
