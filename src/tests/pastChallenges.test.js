import React from "react";
import moxios from "moxios";
import { StateProvider } from "../store/globalStore";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  wait
} from "@testing-library/react";
import PastChallenges from "../pages/challenges/PastChallenges";
import { pendingChallengeInitialInvitationData } from "./testUtils/testMockData/pendingChallengeInvitationData";
import App from "../App";
import loginUserForTest from "./testUtils/loginUserForTest";
import { MemoryRouter } from "react-router-dom";

let element;
describe("mock fetch past challenges request success", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/pastChallenges/`,
      { status: 200, response: pendingChallengeInitialInvitationData }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/PastChallenges"]}>
          {" "}
          <PastChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should show challenge  title", () => {
    const { getByTestId } = element;
    const title = getByTestId("title");
    expect(title.innerHTML).toBe("try");
  });

  test("should show challenge  challenge type", () => {
    const { getByTestId } = element;
    const challengeType = getByTestId("challengeType");
    expect(challengeType.innerHTML).toBe("totalPoints");
  });
  test("should show challenge  start date", () => {
    const { getByTestId } = element;
    const startDate = getByTestId("startDate");
    expect(startDate.innerHTML).toBe("2020-02-23");
  });

  test("should show challenge  end date", () => {
    const { getByTestId } = element;
    const startDate = getByTestId("endDate");
    expect(startDate.innerHTML).toBe("2020-02-23");
  });
});

describe("mock fetch past challenges request failure", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/pastChallenges/`,
      { status: 400, response: pendingChallengeInitialInvitationData }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/PastChallenges"]}>
          {" "}
          <PastChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  test("Error message shows on failed pending challenges get request", async () => {
    const { getByTestId } = element;
    const errorMsg = await waitForElement(() => getByTestId("errorMsg"));
    expect(errorMsg.innerHTML).toBe("Error loading past challenges");
  });
});
