import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  wait
} from "@testing-library/react";
import moxios from "moxios";
import UpdateActivityInput from "../pages/activity/UpdateActivityInput";
import { StateProvider } from "../store/globalStore";
import activityInputData from "./testUtils/testMockData/activityInputData";
import App from "../App";
import activityPointData from "./testUtils/testMockData/activityPointData";
import loginUserForTest from "./testUtils/loginUserForTest";
import { MemoryRouter } from "react-router-dom";

let element;
describe("mock successful update and fetch requests", () => {
  beforeEach(async () => {
    moxios.install();

    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/activityInput/1234567/`,
      {
        status: 200,
        response: activityInputData
      }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter
          initialEntries={[
            {
              pathname: "/IndividualActivityPointUpdate",
              state: { activityID: "1234567" }
            }
          ]}
        >
          <UpdateActivityInput />
        </MemoryRouter>
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); // removes act() react testing library error.
  });

  //from homepage navigate to update page

  afterEach(async () => {
    moxios.uninstall();
  });

  test("see update button navigates to individual update page", async () => {
    const { getByTestId } = element;
    const updatePageHeader = await waitForElement(() =>
      getByTestId("updatePageHeader")
    );
    expect(updatePageHeader.innerHTML).toBe("Update activity input");
  });

  test("hours of sleep value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const sleepHoursInput = await waitForElement(() =>
      getByTestId("sleepHoursInput")
    );
    expect(sleepHoursInput.value).toBe("12");
  });

  test("water value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const water100Oz = await waitForElement(() =>
      getByTestId("water100ozInput")
    );
    expect(water100Oz.checked).toBe(false);
  });

  test("Clean eating value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const cleanEating = await waitForElement(() =>
      getByTestId("cleanEatingInput")
    );
    expect(cleanEating.checked).toBe(false);
  });

  test("Workout intensity value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const workoutIntensity = await waitForElement(() =>
      getByTestId("workoutIntenistyInput")
    );
    expect(workoutIntensity.value).toBe("1");
  });

  test("Workout time length value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const workoutTimeLength = await waitForElement(() =>
      getByTestId("workoutTimeInput")
    );
    expect(workoutTimeLength.value).toBe("60");
  });

  test("Steps value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const steps = await waitForElement(() => getByTestId("stepsInput"));
    expect(steps.value).toBe("10000");
  });

  test("Date value value start off as activity input data from activityInput fetch", async () => {
    const { getByTestId } = element;
    const date = await waitForElement(() => getByTestId("dateInput"));
    expect(date.value).toBe("2020-03-25");
  });

  test("Change hours of sleep value", async () => {
    const { getByTestId } = element;
    const sleepHoursInput = await waitForElement(() =>
      getByTestId("sleepHoursInput")
    );
    fireEvent.change(sleepHoursInput, { target: { value: 30 } });

    expect(sleepHoursInput.value).toBe("30");
  });

  test("Change clean eating value", async () => {
    const { getByTestId } = element;
    const cleanEatingInput = await waitForElement(() =>
      getByTestId("cleanEatingInput")
    );
    fireEvent.change(cleanEatingInput, { target: { checked: true } });
    expect(cleanEatingInput.checked).toBe(true);
  });

  test("Change water100Oz value", async () => {
    const { getByTestId } = element;
    const water100Oz = await waitForElement(() =>
      getByTestId("water100ozInput")
    );
    fireEvent.change(water100Oz, { target: { checked: true } });
    expect(water100Oz.checked).toBe(true);
  });

  test("Change workoutTime value", async () => {
    const { getByTestId } = element;
    const workoutTimeInput = await waitForElement(() =>
      getByTestId("workoutTimeInput")
    );
    fireEvent.change(workoutTimeInput, { target: { value: 35 } });
    expect(workoutTimeInput.value).toBe("35");
  });

  test("Change workoutIntensity value", async () => {
    const { getByTestId } = element;
    const workoutIntenistyInput = await waitForElement(() =>
      getByTestId("workoutTimeInput")
    );
    fireEvent.change(workoutIntenistyInput, { target: { value: 3 } });
    expect(workoutIntenistyInput.value).toBe("3");
  });

  test("Change date value", async () => {
    const { getByTestId } = element;
    const dateInput = await waitForElement(() => getByTestId("dateInput"));
    fireEvent.change(dateInput, { target: { value: "2020-03-28" } });
    expect(dateInput.value).toBe("2020-03-28");
  });

  test("success message shown on update submit", async () => {
    const { getByTestId } = element;
    const submitButton = await waitForElement(() =>
      getByTestId("submitButton")
    );
    fireEvent.click(submitButton);
    const updateSuccessMsg = await waitForElement(() =>
      getByTestId("successMsg")
    );
    expect(updateSuccessMsg.innerHTML).toBe("Update successful!");
  });
});

describe("mock fail fetch activity date request", () => {
  beforeEach(async () => {
    moxios.install();

    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/activityInput/1234567/`,
      {
        status: 400,
        response: activityInputData
      }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter
          initialEntries={[
            {
              pathname: "/IndividualActivityPointUpdate",
              state: { activityID: "1234567" }
            }
          ]}
        >
          <UpdateActivityInput />
        </MemoryRouter>
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("fetch activity data error message shows", async () => {
    const { getByTestId } = element;
    const submitButton = await waitForElement(() =>
      getByTestId("submitButton")
    );
    fireEvent.click(submitButton);
    const activityInputfetchError = await waitForElement(() =>
      getByTestId("errorMsg")
    );
    expect(activityInputfetchError.innerHTML).toBe("Error fetching activity");
  });
});
