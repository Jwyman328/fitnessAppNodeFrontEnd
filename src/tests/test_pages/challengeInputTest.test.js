import React from "react";
import moxios from "moxios";
import { StateProvider } from "../../store/globalStore";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId,
  wait
} from "@testing-library/react";
import CreateChallengePage from "../../pages/challenges/CreateChallengePage";

import App from "../../App";
import loginUserForTest from "../helper_functions_for_tests/loginUserForTest";
import { MemoryRouter } from "react-router-dom";

let element;
const today = new Date().toISOString().split("T")[0];

describe("challenge inputs can accept data changes", () => {
  beforeEach(async () => {
    moxios.install();
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/Challenges"]}>
          {" "}
          <CreateChallengePage />
        </MemoryRouter>{" "}
      </StateProvider>
    );

    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  test("Challenge type default to total points", () => {
    const { getByTestId } = element;
    const challengeType = getByTestId("challengeType");
    expect(challengeType.value).toBe("totalPoints");
  });
  test("Challenge type can be changed", () => {
    const { getByTestId } = element;
    const challengeType = getByTestId("challengeType");
    fireEvent.change(challengeType, { target: { value: "Sleep" } });
    expect(challengeType.value).toBe("sleep");
  });

  test("title  can be changed", () => {
    const { getByTestId } = element;
    const title = getByTestId("title");
    fireEvent.change(title, { target: { value: "Hello world" } });
    expect(title.value).toBe("Hello world");
  });

  test("Start date start today", () => {
    const { getByTestId } = element;
    const startDate = getByTestId("challengeStartDate");
    expect(startDate.value).toBe(today);
  });

  test("Start date can be changed", () => {
    const { getByTestId } = element;
    const startDate = getByTestId("challengeStartDate");
    fireEvent.change(startDate, { target: { value: "2020-10-24" } });
    expect(startDate.value).toBe("2020-10-24");
  });
});

describe("mock getAllusers request returns mock users", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest("https://enigmatic-springs-36428.herokuapp.com/users/", {
      status: 200,
      response: ["testEmail@gmail.com", "testEmail2@gmail.com"]
    });
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/Challenges"]}>
          {" "}
          <CreateChallengePage />
        </MemoryRouter>{" "}
      </StateProvider>
    );

    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("All users request response data shows as userSelect options", async () => {
    const { getByTestId } = element;
    const selectedUserOption = await waitForElement(() =>
      getByTestId("testEmail@gmail.com")
    );
    const selectedUserOption2 = await waitForElement(() =>
      getByTestId("testEmail2@gmail.com")
    );

    expect(selectedUserOption.value).toBe("testEmail@gmail.com");
    expect(selectedUserOption2.value).toBe("testEmail2@gmail.com");
  });

  test("All users request response data shows as unSelected to start", async () => {
    const { getByTestId } = element;
    const selectedUserOption = await waitForElement(() =>
      getByTestId("testEmail@gmail.com")
    );
    expect(selectedUserOption.selected).toBe(false);
  });
});

describe("mock create challenge request returns success", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/challenges/",
      { status: 200 }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/Challenges"]}>
          {" "}
          <CreateChallengePage />
        </MemoryRouter>{" "}
      </StateProvider>
    );

    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("success msg on success post request", async () => {
    const { getByTestId } = element;
    const submitButton = getByTestId("submitButton");
    fireEvent.click(submitButton);
    const successMsg = await waitForElement(() => getByTestId("successMsg"));
    expect(successMsg.innerHTML).toBe("Challenge created successfully");
  });
});

describe("mock create challenge request returns error", () => {
  beforeEach(async () => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/challenges/",
      { status: 400 }
    );
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/Challenges"]}>
          {" "}
          <CreateChallengePage />
        </MemoryRouter>{" "}
      </StateProvider>
    );

    const { getByTestId } = element;
    await wait(); //removes act() reac testing library error
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("error msg on success post request", async () => {
    const { getByTestId } = element;
    const submitButton = getByTestId("submitButton");
    fireEvent.click(submitButton);
    const successMsg = await waitForElement(() => getByTestId("errorMsg"));
    expect(successMsg.innerHTML).toBe(
      "Error creating challenge, please try again"
    );
  });
});
