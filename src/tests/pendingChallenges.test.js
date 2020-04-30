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
import PendingChallenges from "../pages/challenges/PendingChallenges";
import { pendingChallengeInitialInvitationData } from "./testUtils/testMockData/pendingChallengeInvitationData";
import loginUserForTest from "./testUtils/loginUserForTest";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

let element;
describe("Mock pending challenge invitation get request success", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/AllChallengeInvitation/myInvitations/pending`,
      { status: 200, response: pendingChallengeInitialInvitationData }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/PendingChallenges"]}>
          {" "}
          <PendingChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("should show challenge invitation title", async () => {
    const { getByTestId } = element;

    const title = await waitForElement(() => getByTestId("title"));
    expect(title.innerHTML).toBe("try");
  });

  test("should show challenge invitation challenge type", () => {
    const { getByTestId } = element;
    const challengeType = getByTestId("challengeType");
    expect(challengeType.innerHTML).toBe("totalPoints");
  });
  test("should show challenge invitation start date", () => {
    const { getByTestId } = element;
    const startDate = getByTestId("startDate");
    expect(startDate.innerHTML).toBe("2020-02-23");
  });

  test("should show challenge invitation end date", () => {
    const { getByTestId } = element;
    const startDate = getByTestId("endDate");
    expect(startDate.innerHTML).toBe("2020-02-23");
  });
});

describe("Mock pending challenge invitation get request fails", () => {
  beforeEach(async () => {
    moxios.install();

    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/AllChallengeInvitation/myInvitations/pending`,
      { status: 400, response: pendingChallengeInitialInvitationData }
    );
    element = render(
      <StateProvider>
        <App />
      </StateProvider>
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/PendingChallenges"]}>
          {" "}
          <PendingChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Error message shows on failed pending challenges get request", async () => {
    const { getByTestId } = element;
    const errorMsg = await waitForElement(() => getByTestId("errorMsg"));
    expect(errorMsg.innerHTML).toBe("error loading invitation challenges");
  });
});

describe("mock pending challenge get request and update challenge status request.", () => {
  beforeEach(async () => {
    moxios.install();

    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/updateChallengeStatus/${pendingChallengeInitialInvitationData._id}/`,
      { status: 200, response: pendingChallengeInitialInvitationData }
    );
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/AllChallengeInvitation/myInvitations/pending`,
      { status: 200, response: pendingChallengeInitialInvitationData }
    );

    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/PendingChallenges"]}>
          {" "}
          <PendingChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("update is loading message shows on change status to accept button click", async () => {
    const { getByTestId } = element;
    //get button and click accept challenge invitation
    const acceptButton = await waitForElement(() =>
      getByTestId("acceptButton")
    );
    fireEvent.click(acceptButton);
    const titleAfterStatusChange = await waitForElement(() =>
      getByTestId("loadingMsg")
    );
    expect(titleAfterStatusChange.innerHTML).toBe("updating status");
  });
});

describe("mock pending challenge get request success and update challenge status request failure.", () => {
  beforeEach(async () => {
    moxios.install();

    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/updateChallengeStatus/${pendingChallengeInitialInvitationData._id}/`,
      { status: 400 }
    );
    moxios.stubRequest(
      `https://enigmatic-springs-36428.herokuapp.com/AllChallengeInvitation/myInvitations/pending`,
      { status: 200, response: pendingChallengeInitialInvitationData }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/PendingChallenges"]}>
          {" "}
          <PendingChallenges />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("update is loading message on failed patch update request", async () => {
    const { getByTestId } = element;
    const acceptButton = await waitForElement(() =>
      getByTestId("acceptButton")
    );
    fireEvent.click(acceptButton);
    const updateisLoadingMsg = await waitForElement(() =>
      getByTestId("loadingMsg")
    );
    expect(updateisLoadingMsg.innerHTML).toBe("updating status");
  });
});

// mock the update results
