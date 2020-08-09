import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId
} from "@testing-library/react";
import moxios from "moxios";
import LoginPage from "../../pages/auth/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import renderWithRouter from "../helper_functions_for_tests/setUpTests";
import App from "../../App";
import { createMemoryHistory } from "history";
import { StateProvider } from "../../store/globalStore";
import { MemoryRouter } from "react-router-dom";
import loginUser from "../../actions/authActions/loginUser";

//mocks
const MockLoginUserAction = jest.fn();
jest.mock("../../actions/authActions/loginUser", () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn()
}));

let element;
describe("test login inputs", () => {
  beforeEach(() => {
    element = renderWithRouter(<LoginPage />, "/");
  });

  test("test email input", () => {
    const { getByTestId } = element;
    const emailInput = getByTestId("emailInput");
    expect(emailInput.name).toBe("email");
  });

  test("test onChange email input", async () => {
    const { getByTestId } = element;
    const emailInput = getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });
    expect(emailInput.value).toBe("testEmail@gmail.com");
  });
  test("test onChange password input", async () => {
    const { getByTestId } = element;
    const passwordInput = getByTestId("passwordInput");
    fireEvent.change(passwordInput, {
      target: { value: "myExistingPassword" }
    });
    expect(passwordInput.value).toBe("myExistingPassword");
  });
});

describe("mox form submit success", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(
      "https://enigmatic-springs-36428.herokuapp.com/users/login",
      { status: 200, response: { token: "mockToken" } }
    );
    loginUser.mockImplementation(MockLoginUserAction);
    element = render(
      <StateProvider globalState={{ loggedIn: true, token: null }}>
        <MemoryRouter initialEntries={["/login"]}>
          {" "}
          <LoginPage />
        </MemoryRouter>{" "}
      </StateProvider>
    );
    const { getByTestId } = element;
  });

  afterEach(() => {
    moxios.uninstall();
    jest.clearAllMocks();
  });

  test("login user successfully", async () => {
    const { container, getByTestId } = element;
    const passwordInput = getByTestId("passwordInput");
    fireEvent.change(passwordInput, {
      target: { value: "myExistingPassword" }
    });
    const emailInput = getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });
    const submitButton = getByTestId("submitButton");
    fireEvent.click(submitButton);
    expect(MockLoginUserAction.mock.calls.length).toBe(1);
  });
});
