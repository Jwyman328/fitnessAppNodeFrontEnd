const addPendingChallengeFinalStateMock = {
  isError: false,
  isLoading: false,
  pendingChallenges: "mock pending challenge",
  updateIsError: false,
  updateisLoading: false
};

const pendingChallengeFetchAttemptFinalStateMock = {
  isError: false,
  isLoading: true,
  pendingChallenges: [],
  updateIsError: false,
  updateisLoading: false
};

const pendingChallengeFetchErrorFinalStateMock = {
  isError: true,
  isLoading: false,
  pendingChallenges: [],
  updateIsError: false,
  updateisLoading: false
};

const pendingChallengeUpdateAttemptFinalStateMock = {
  isError: false,
  isLoading: false,
  pendingChallenges: [],
  updateIsError: false,
  updateisLoading: false
};

const pendingChallengeUpdateSuccessFinalStateMock = {
  isError: false,
  isLoading: false,
  pendingChallenges: [],
  updateIsError: false,
  updateisLoading: false
};

const pendingChallengeUpdateErrorFinalStateMock = {
  isError: false,
  isLoading: false,
  pendingChallenges: [],
  updateIsError: false,
  updateisLoading: false
};
export {
  addPendingChallengeFinalStateMock,
  pendingChallengeFetchAttemptFinalStateMock,
  pendingChallengeFetchErrorFinalStateMock,
  pendingChallengeUpdateAttemptFinalStateMock,
  pendingChallengeUpdateSuccessFinalStateMock,
  pendingChallengeUpdateErrorFinalStateMock
};
