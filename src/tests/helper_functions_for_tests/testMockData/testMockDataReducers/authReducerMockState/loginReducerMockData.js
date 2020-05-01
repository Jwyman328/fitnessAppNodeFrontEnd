const loginAttemptFinalStateMock = {
  email: "",
  isErrorLoginAttempt: false,
  isLoading: true,
  isLoggedIn: false,
  password: "",
  token: ""
};

const loginSuccessFinalStateMock = {
  email: "",
  isErrorLoginAttempt: false,
  isLoading: false,
  isLoggedIn: true,
  password: "",
  token: undefined
};

const loginLoginErrorState = {
  email: "",
  isErrorLoginAttempt: false,
  isLoading: false,
  isLoggedIn: true,
  password: "",
  token: undefined
};

export {
  loginAttemptFinalStateMock,
  loginSuccessFinalStateMock,
  loginLoginErrorState
};
