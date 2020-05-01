const pastChallengesFetchAttemptFinalStateMock = {
  isError: false,
  isLoading: true,
  pastChallenges: []
};

const pastChallengeFetchErrorFinalStateMock = {
  isError: true,
  isLoading: false,
  pastChallenges: []
};

const addPastChallengeFinalStateMock = {
  isError: false,
  isLoading: false,
  pastChallenges: "mockChallenge"
};

export {
  pastChallengesFetchAttemptFinalStateMock,
  pastChallengeFetchErrorFinalStateMock,
  addPastChallengeFinalStateMock
};
