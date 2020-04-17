import React from "react";
import moxios from "moxios";
import CreateGoalPage from "../pages/goals/CreateGoalPage";
//set up global context for tests
import { StateProvider } from "../store/globalStore";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  wait
} from "@testing-library/react";
import App from "../App";
import loginUserForTest from "./testUtils/loginUserForTest";
import { MemoryRouter } from "react-router-dom";

let element;
let today;
describe("goal inputs", () => {
  beforeEach(async () => {
    moxios.install();
    today = new Date().toISOString().split("T")[0];

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/GoalPage"]}>
          {" "}
          <CreateGoalPage />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("start date starts with todays date", async () => {
    const { getByTestId } = element;
    const startDate = getByTestId("startDate");
    expect(startDate.value).toBe(today);
  });

  test("goal start date can be changed", async () => {
    const { getByTestId } = element;
    const startDate = getByTestId("startDate");
    fireEvent.change(startDate, { target: { value: "2020-11-25" } });
    expect(startDate.value).toBe("2020-11-25");
  });
  test("goal end date can be changed", async () => {
    const { getByTestId } = element;
    const endDate = getByTestId("goalEndDate");
    fireEvent.change(endDate, { target: { value: "2020-11-25" } });
    expect(endDate.value).toBe("2020-11-25");
  });

  test("daily goal value start as false", async () => {
    const { getByTestId } = element;
    const dailyGoal = getByTestId("dailyGoal");
    expect(dailyGoal.checked).toBe(false);
  });

  test("can change daily goal to true", async () => {
    const { getByTestId } = element;
    const dailyGoal = getByTestId("dailyGoal");
    fireEvent.click(dailyGoal);
    expect(dailyGoal.checked).toBe(true);
  });

  test("point goal starts at 0", async () => {
    const { getByTestId } = element;
    const pointGoal = await waitForElement(() => getByTestId("pointGoal"));
    expect(pointGoal.value).toEqual("50");
  });
});

describe("mock a success post request", () => {
  beforeEach(async () => {
    moxios.install();

    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/totalPointGoal/",
      { status: 200 }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/GoalPage"]}>
          {" "}
          <CreateGoalPage />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  afterEach(() => {
    moxios.uninstall();
  });
  test("submit goal shows success msg", async () => {
    const { getByTestId } = element;
    const submitButton = await waitForElement(() =>
      getByTestId("submitButton")
    );
    fireEvent.click(submitButton);
    const successMsg = await waitForElement(() => getByTestId("successMsg"));
    expect(successMsg.innerHTML).toBe("Goal created successfully");
  });
});

describe("error msg shows on bad request", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/totalPointGoal/",
      { status: 400 }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/GoalPage"]}>
          {" "}
          <CreateGoalPage />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  afterEach(() => {
    moxios.uninstall();
  });
  test("error message shows on bad request", async () => {
    const { getByTestId } = element;
    const submitButton = await waitForElement(() =>
      getByTestId("submitButton")
    );
    fireEvent.click(submitButton);
    const errorMsg = await waitForElement(() => getByTestId("errorMsg"));
    expect(errorMsg.innerHTML).toBe("Error creating goal, please try again");
  });
});
