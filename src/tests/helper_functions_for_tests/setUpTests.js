import React from "react";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

function renderWithRouter(ui, route) {
  const history = createMemoryHistory();
  //route = '/some-route'
  history.push(route);
  const element = render(<Router history={history}>{ui}</Router>);
  return element;
}

export default renderWithRouter;
