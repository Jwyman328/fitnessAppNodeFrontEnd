import React, { useContext } from "react";
import { store } from "../../../store/globalStore";
import {
  getGlobalState,
  getGlobalDispatcher
} from "../../../utils/helperFunctions";

/**
 * Return global State and global disptach
 */
function useGlobalState() {
  const globalState = getGlobalState(useContext(store));
  const globalDispatch = getGlobalDispatcher(useContext(store));
  return { globalState: globalState, globalDispatch: globalDispatch };
}

export default useGlobalState;
