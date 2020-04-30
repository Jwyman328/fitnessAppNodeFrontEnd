//import the sign up component
// import moxios
import React from "react";
import moxios from "moxios";
import SignUpPage from "../../pages/auth/signUp";
import App from "../../App";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import homePage from "../../pages/home/home";

//set up global context for tests
import { StateProvider } from "../../store/globalStore";
import { MemoryRouter } from "react-router-dom";

//mock imports
import signUpAction from "../../actions/authActions/signUp";

//mocks
const MockSignUpUserAction = jest.fn();
jest.mock("../../actions/authActions/signUp", () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn()
}));

let element;
describe("Test input onChange values", () => {
  beforeEach(async () => {
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: "myToken" }}>
        <MemoryRouter initialEntries={["/signup"]}>
          <SignUpPage />
        </MemoryRouter>
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  test("test email input accepts email", () => {
    const { getByTestId } = element;

    const emailInput = getByTestId("emailInput");
    expect(emailInput.name).toBe("email");
  });

  test("test onChange emailInput", async () => {
    const { getByTestId } = element;
    const emailInput = getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });
    expect(emailInput.value).toBe("testEmail@gmail.com");
  });
  test("test onChange password input", async () => {
    const { getByTestId } = element;
    const passwordInput = getByTestId("passwordInput");
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(passwordInput.value).toBe("testPassword");
  });
});

describe("Test signup request", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/user/create/",
      { status: 200, response: { token: "mockToken" } }
    );
    //mock going to the next page
    signUpAction.mockImplementation(MockSignUpUserAction);

    element = render(
      <StateProvider globalState={{ loggedIn: false, token: null }}>
        <MemoryRouter initialEntries={["/signup"]}>
          {" "}
          <SignUpPage />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  afterEach(() => {
    moxios.uninstall();
    jest.clearAllMocks();
  });

  test("create a user and be logged in", async () => {
    const { getByTestId, getByText } = element;
    const emailInput = getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });
    const passwordInput = getByTestId("passwordInput");
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    const passwordInput2 = getByTestId("passwordInput2");
    fireEvent.change(passwordInput2, { target: { value: "testPassword" } });
    const signUpButton = getByTestId("submitButton");
    fireEvent.click(signUpButton);
    expect(MockSignUpUserAction.mock.calls.length).toBe(1);
  });
});
