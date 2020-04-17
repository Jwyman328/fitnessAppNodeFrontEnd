import React, { useReducer, useContext, useEffect } from "react";

//state
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import inputPointReducer from "../../reducers/activityReducers/inputPointReducer";
import inputPointInitialState from "../../initialState/pointInputInitialState";

//css
import "../form.scss";

//components
import InputPointsForm from "../../components/forms/InputPointsForm";
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";
import CreateInputPoint from "../../actions/inputPointActions/createInputPoint";
import SubmitDataButton from "../../components/cardComponents/SubmitDataButton";
import ErrorMessage from "../../components/messagesAboutProgramStatus/ErrorMessage";
import SuccessMessage from "../../components/messagesAboutProgramStatus/successMessage";

// context
import InputPointsContext from "./activityContext/InputPointsContext";

/**
 * Input point data for a selected date.
 * @param {*} props
 */
function InputPointsPage(props) {
  const [state, dispatch] = useReducer(
    inputPointReducer,
    inputPointInitialState
  );
  const {
    isLoading,
    isError,
    isSuccess,
    date,
    sleepHours,
    water100oz,
    cleanEating,
    workoutIntenisty,
    workoutTime,
    steps
  } = state;

  // global store containing the use token for making requests
  const globalState = getGlobalState(useContext(store));

  /**
   * Submit point data to the server.
   * @param {*} e - event
   */
  const handleClick = e => {
    e.preventDefault();
    dispatch({ type: "inputPointSent" });
    CreateInputPoint(state, dispatch, globalState.token);
  };

  return (
    <InputPointsContext.Provider
      value={{ inputPointsState: state, inputPointsDispatch: dispatch }}
    >
      <div className="rulePageContainer">
        <UserCreateDataCardContainer>
          <h1>Input Activity</h1>
          <InputPointsForm />
          <SubmitDataButton handleSubmit={handleClick} />
          {/* handle results of input point activity submission post request */}
          {isSuccess ? (
            <SuccessMessage successText="new input successfully created" />
          ) : null}
          {isError ? (
            <ErrorMessage errorText="Error on making new input activity, please try again" />
          ) : null}
        </UserCreateDataCardContainer>
      </div>
    </InputPointsContext.Provider>
  );
}

export default InputPointsPage;
