import React from "react";
import moxios from "moxios";
import { StateProvider } from "../../store/globalStore";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  wait,
  prettyDOM,
  getAllByTestId
} from "@testing-library/react";
import CurrentFutureChallenges from "../../pages/challenges/CurrentFutureChallenges";
import futureChallengeData from "../helper_functions_for_tests/testMockData/testMockDataPages/futureChallengeData";
import currentChallengeData from "../helper_functions_for_tests/testMockData/testMockDataPages/currentChallengeData";
import App from "../../App";
import loginUserForTest from "../helper_functions_for_tests/loginUserForTest";
import { MemoryRouter } from "react-router-dom";

let element;
describe("mock fetch current and future challenge request success", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/challengeInvitations/currentChallenges/",
      { status: 200, response: currentChallengeData }
    );
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/challengeInvitations/futureChallenges/",
      { status: 200, response: futureChallengeData }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/CurrentFutureChallenges"]}>
          {" "}
          <CurrentFutureChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("current challenge data title shows", async () => {
    const { queryAllByTestId, getByTestId, getAllByTestId } = element;

    const title = await waitForElement(() => getAllByTestId("title"));

    expect(title[0].innerHTML).toBe("current challenge ");
  });

  test("future challenge data title shows", () => {
    const { queryAllByTestId } = element;
    const title = queryAllByTestId("title");
    expect(title[1].innerHTML).toBe("attempt start end different ");
  });
});

describe("mock fetch current and future challenge request failure", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/challengeInvitations/currentChallenges/`,
      { status: 400, response: currentChallengeData }
    );
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/challengeInvitations/futureChallenges/`,
      { status: 400, response: futureChallengeData }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/CurrentFutureChallenges"]}>
          {" "}
          <CurrentFutureChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("current challenge fetch error shows", async () => {
    const { getAllByTestId } = element;
    const currentFetchError = await waitForElement(() =>
      getAllByTestId("errorMsg")
    );
    expect(currentFetchError[0].innerHTML).toBe(
      "Error loading current challenges"
    );
  });

  test("future challenge fetch error shows", async () => {
    const { getAllByTestId } = element;
    const futureFetchError = await waitForElement(() =>
      getAllByTestId("errorMsg")
    );
    expect(futureFetchError[1].innerHTML).toBe(
      "Error loading future challenges"
    );
  });
});
