import React from "react";
import moxios from "moxios";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";
import ViewResults from "../pages/results/ViewResults";
import App from "../App";
import { StateProvider } from "../store/globalStore";
import { BrowserRouter as Router } from "react-router-dom";
import activityPointData from "./testUtils/testMockData/activityPointData";
import loginUserForTest from "./testUtils/loginUserForTest";
import { MemoryRouter } from "react-router-dom";

//mock these
let handleClickNavigationFunctions = jest.requireActual(
  "../utils/tableHelperfunctions"
);
handleClickNavigationFunctions.navigateToDailyPointGraph = jest.fn();
handleClickNavigationFunctions.navigateToUpdatePointInput = jest.fn();

//return mock function
const MockClickNavigation = jest.fn().mockReturnValue(true);

let element;
describe("mock point results fetch request success", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/user/login",
      { status: 200, response: { token: "mockToken" } }
    );
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/allActivityPoints/mine/`,
      { status: 200, response: activityPointData }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/ViewResults"]}>
          {" "}
          <ViewResults />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("input point date shows", () => {
    const { getByTestId } = element;
    const dateElement = getByTestId("inputDate");
    expect(dateElement.innerHTML).toBe("2020-02-24");
  });
  test("input total point data shows", () => {
    const { getByTestId } = element;
    const totalPoints = getByTestId("totalPoints");
    expect(totalPoints.innerHTML).toBe("64.50");
  });
});

describe("mock point results fetch request success, start at home page to use withRouter successfully", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/user/login",
      { status: 200, response: { token: "mockToken" } }
    );

    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/allActivityPoints/mine/`,
      { status: 200, response: activityPointData }
    );

    handleClickNavigationFunctions.navigateToUpdatePointInput.mockImplementation(
      MockClickNavigation
    );
    handleClickNavigationFunctions.navigateToUpdatePointInput.mockImplementation(
      MockClickNavigation
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/ViewResults"]}>
          {" "}
          <ViewResults />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    jest.clearAllMocks();

    moxios.uninstall();
  });

  test("see graph button navigates to individual graph page", async () => {
    const { getByTestId } = element;

    const graphButton = await waitForElement(() => getByTestId("graphButton"));
    fireEvent.click(graphButton);
    expect(
      handleClickNavigationFunctions.navigateToDailyPointGraph.mock.calls.length
    ).toBe(1);
  });
  test("see update button navigates to individual update page", async () => {
    const { getByTestId } = element;

    const graphButton = await waitForElement(() => getByTestId("updateButton"));
    fireEvent.click(graphButton);
    expect(
      handleClickNavigationFunctions.navigateToUpdatePointInput.mock.calls
        .length
    ).toBe(1);
  });
});
