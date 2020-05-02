import React, { createContext, useReducer } from "react";
import globalReducer from "../reducers/globalReducer";
import globalInitialState from "../../../initialState/global_initial_state/globalInitialState";

// initialize the store with initial global state.
const store = createContext({
  token: "",
  isLoggedIn: false
});
const { Provider } = store;

/**
 * Wrap a component in global state, giving them access to global state and the global state dispatcher.
 *
 * Will allow wrapped components to consume the state data in the store.
 * As well as use the dispatcher to dispatch events to change the global state data.
 * @param {*} chldren - component to be wrapped in a global state.
 */
const StateProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    globalInitialState
  );
  return (
    <Provider value={{ globalState, globalDispatch }}>{children}</Provider>
  );
};

export { store, StateProvider };
