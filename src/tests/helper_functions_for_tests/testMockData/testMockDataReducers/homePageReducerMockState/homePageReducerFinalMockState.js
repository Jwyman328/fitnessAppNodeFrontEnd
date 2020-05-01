const addPointFinalStateMock = {
  isError: false,
  isLoading: false,
  pastMonthDates: [],
  pastMonthPoints: [],
  todaysPoints: "mock todays points"
};

const todaysPointsFetchAttemptFinalStateMock = {
  isError: false,
  isLoading: true,
  pastMonthDates: [],
  pastMonthPoints: [],
  todaysPoints: false
};

const todaysPointsFetchErrorFinalStateMock = {
  isError: true,
  isLoading: false,
  pastMonthDates: [],
  pastMonthPoints: [],
  todaysPoints: false
};

const addPastMonthsPointsDatesFinalStateMock = {
  isError: false,
  isLoading: false,
  pastMonthDates: "mock past month dates",
  pastMonthPoints: "mock past month points",
  todaysPoints: false
};

export {
  addPointFinalStateMock,
  todaysPointsFetchAttemptFinalStateMock,
  todaysPointsFetchErrorFinalStateMock,
  addPastMonthsPointsDatesFinalStateMock
};
