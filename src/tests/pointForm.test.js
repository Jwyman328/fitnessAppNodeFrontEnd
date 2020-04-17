import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId
} from "@testing-library/react";
import moxios from "moxios";
import InputPointsPage from "../pages/activity/inputPointsPage";
import { StateProvider } from "../store/globalStore";
import { MemoryRouter } from "react-router-dom";

let element;
describe("point form inputs accept data", () => {
  beforeEach(() => {
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/inputPoints"]}>
          {" "}
          <InputPointsPage />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  test("date filled with todays date in yyyy-mm-dd format", () => {
    const today = new Date().toISOString().split("T")[0];
    const { getByTestId } = element;
    const dateInput = getByTestId("dateInput");
    expect(dateInput.value).toEqual(today);
  });
  test("date can be changed by input", () => {
    const { getByTestId } = element;
    const dateInput = getByTestId("dateInput");
    fireEvent.change(dateInput, { target: { value: "2020-12-20" } });
    expect(dateInput.value).toEqual("2020-12-20");
  });

  test("sleepHours can be changed", () => {
    const { getByTestId } = element;
    const sleepInput = getByTestId("sleepHoursInput");
    fireEvent.change(sleepInput, { target: { value: 6 } });
    expect(sleepInput.value).toEqual("6");
  });

  test("workoutIntenisty can be changed", () => {
    const { getByTestId } = element;
    const workoutIntensity = getByTestId("workoutIntenistyInput");
    fireEvent.change(workoutIntensity, { target: { value: 3 } });
    expect(workoutIntensity.value).toEqual("3");
  });

  test("workoutTime can be changed", () => {
    const { getByTestId } = element;
    const workoutTime = getByTestId("workoutTimeInput");
    fireEvent.change(workoutTime, { target: { value: 30 } });
    expect(workoutTime.value).toEqual("30");
  });

  test("total steps can be changed", () => {
    const { getByTestId } = element;
    const steps = getByTestId("stepsInput");
    fireEvent.change(steps, { target: { value: 10000 } });
    expect(steps.value).toEqual("10000");
  });
  test("water 100 oz can be changed", async () => {
    const { getByTestId } = element;
    const water = getByTestId("water100ozInput");
    fireEvent.click(water);
    const waterAfterClick = await waitForElement(() =>
      getByTestId("water100ozInput")
    );
    expect(waterAfterClick.checked).toBe(true);
  });
  test("clean eating can be changed", () => {
    const { getByTestId } = element;
    const cleanEating = getByTestId("cleanEatingInput");
    fireEvent.click(cleanEating);
    expect(cleanEating.checked).toBe(true);
  });
});

describe("mock successful post request", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/activityInput/",
      { status: 200 }
    );
    element = render(
      <StateProvider>
        <InputPointsPage />
      </StateProvider>
    );
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("successful post shows success message", async () => {
    const { getByTestId } = element;
    const submitButton = getByTestId("submitButton");
    fireEvent.click(submitButton);
    const successMsg = await waitForElement(() => getByTestId("successMsg"));
    expect(successMsg.innerHTML).toBe("new input successfully created");
  });
});

describe("mock error on post request", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/activityInput/",
      { status: 400 }
    );
    element = render(
      <StateProvider>
        <InputPointsPage />
      </StateProvider>
    );
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Error message shows on bad request", async () => {
    const { getByTestId } = element;
    const submitButton = getByTestId("submitButton");
    fireEvent.click(submitButton);
    const errorMsg = await waitForElement(() => getByTestId("errorMsg"));
    expect(errorMsg.innerHTML).toBe(
      "Error on making new input activity, please try again"
    );
  });
});
