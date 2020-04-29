import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId
} from "@testing-library/react";
import moxios from "moxios";
import LoginPage from "../pages/auth/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import renderWithRouter from "./testUtils/setUpTests";
import renderWithRouter2 from "./testUtils/renderWithRouter";
import App from "../App";
import { createMemoryHistory } from "history";
import { StateProvider } from "../store/globalStore";
import { MemoryRouter } from "react-router-dom";
import loginUser from "../actions/authActions/loginUser";

//mocks
const MockLoginUserAction = jest.fn();
jest.mock("../actions/authActions/loginUser", () => ({
  __esModule: true,
  namedExport: jest.fn(),
  default: jest.fn()
}));

let element;
describe("test login inputs", () => {
  beforeEach(() => {
    // set up loginPage element
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
      "https://enigmatic-springs-36428.herokuapp.com/user/login",
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
    // test entering username and password
    // use StateProvider to provide global context
    const { container, getByTestId } = element;
    // from landingPage navigate to loginPage

    //enter password
    const passwordInput = getByTestId("passwordInput");
    fireEvent.change(passwordInput, {
      target: { value: "myExistingPassword" }
    });
    //enter email
    const emailInput = getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "testEmail@gmail.com" } });
    //submit loginData
    const submitButton = getByTestId("submitButton");
    fireEvent.click(submitButton);
    //check user is redirect to the homepage
    expect(MockLoginUserAction.mock.calls.length).toBe(1);
  });
});
