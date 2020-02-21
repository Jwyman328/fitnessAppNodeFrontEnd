import React, {createContext, useReducer} from 'react';
import globalReducer from '../reducers/globalReducer';
import initialState from '../initialState/globalInitialState';

// initialize the store with initial global state.
const store = createContext(initialState)
const {Provider} = store;

/**
 * Wrap a component in global state, giving them access to global state and the global state dispatcher.
 * 
 * Will allow wrapped components to consume the state data in the store.
 * As well as use the dispatcher to dispatch events to change the global state data.
 * @param {*} chldren - component to be wrapped in a global state.
 */
const StateProvider = ({children}) => {
    const [globalState,globalDispatch] = useReducer(globalReducer,initialState);
    return <Provider value={{globalState, globalDispatch}}>{children}</Provider>
}

export {store, StateProvider}