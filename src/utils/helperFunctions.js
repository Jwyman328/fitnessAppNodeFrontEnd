import React from 'react';
//    const {globalState, globalDispatch} = contextState;

/**
 * Return the current global state 
 * @param {Object} store -- Global store object taken from a useContextHook.
 */
function getGlobalState(store){
    const {globalState} = store;
    return globalState
}

/**
 * Return global store dispatcher.
 * @param {Object} store -- lobal store object taken from a useContextHook.
 */
function getGlobalDispatcher(store){
    //const contextState = useContext(store)
    const {globalDispatch} = store;
    return globalDispatch
}
/**
 * Dispatch action to handle change of input value.
 * 
 * Handle checkbox or value change
 * @param {Function} dispatcher -- Dispatcher to dispatch actions.
 * @param {*} event -- browser event.
 */
function dispatchInputChange(dispatch, event){
    if (event.target.type === 'checkbox'){
        dispatch({type:'handleCheckbox', name: event.target.name, checked: event.target.checked})
    }else{
        dispatch({type:'handleChange', name:event.target.name, value:event.target.value})
    }
}

export {getGlobalState,getGlobalDispatcher,dispatchInputChange}
