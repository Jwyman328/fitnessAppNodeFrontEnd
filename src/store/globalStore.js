import React, { createContext, useReducer } from "react";
import globalReducer from "../reducers/globalReducers/globalReducer";
import globalInitialState from "../initialState/global_initial_state/globalInitialState";

// initialize the store with initial global state.
const store = createContext(globalInitialState);
const { Provider } = store;

/**
 * Wrap a component in global state, giving them access to global state and the global state dispatcher.
 *
 * Will allow wrapped components to consume the state data in the store.
 * As well as use the dispatcher to dispatch events to change the global state data.
 * @param {*} chldren - component to be wrapped in a global state.
 */
const StateProvider = props => {
  var [globalState, globalDispatch] = useReducer(
    globalReducer,
    globalInitialState
  );
  // add ability to change global state with props

  globalState = props.globalState ? props.globalState : globalState;

  return (
    <Provider value={{ globalState, globalDispatch }}>
      {props.children}
    </Provider>
  );
};

export { store, StateProvider };
