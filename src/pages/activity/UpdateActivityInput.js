import React, { useEffect, useContext, useReducer } from "react";
import { withRouter } from "react-router-dom";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import { store } from "../../store/globalStore";
import UpdateActivityInputReducer from "../../reducers/activityReducers/updateActivityInputReducer";
import initialState from "../../initialState/updateActivityInputInitialState";
import getActivityInput from "../../actions/updateActivityInputActions/getActivityInput";
import inputPointReducer from "../../reducers/activityReducers/inputPointReducer";
import inputPointInitialState from "../../initialState/pointInputInitialState";
import updateActivityInput from "../../actions/updateActivityInputActions/updateActivityInputAction";
import ResultsNavBar from "../../components/navBars/resultsNavBar";

//contet
import UpdateActivityInputContext from "./activityContext/UpdateActivityInputContext";

//components
import UpdatePointsForm from "../../components/forms/UpdatePointsForm";
import SubmitDataButton from "../../components/cardComponents/SubmitDataButton";
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";

//messages
import ErrorMessage from "../../components/messagesAboutProgramStatus/ErrorMessage";
import SuccessMessage from "../../components/messagesAboutProgramStatus/successMessage";
import LoadingMessage from "../../components/messagesAboutProgramStatus/LoadingMessage";

function UpdateActivityInput(props) {
  const globalState = getGlobalState(useContext(store));

  const [state, dispatch] = useReducer(
    UpdateActivityInputReducer,
    initialState
  );

  // deconstruct reducer state
  let {
    isLoadingActivityInput,
    isErrorActivityInput,
    isLoadingUpdateActivityInput,
    isErrorUpdateActivityInput,
    upDateActivityInputSuccess,
    activityInput
  } = state;

  const activityId = props.location.state.activityID;

  /**
   * Fetch activity input data.
   */
  useEffect(() => {
    getActivityInput(dispatch, globalState.token, activityId);
  }, []);

  /**
   * Submit updated activity data to the server.
   * @param {*} e - event
   */
  const handleClick = e => {
    e.preventDefault();
    updateActivityInput(dispatch, globalState.token, activityId, activityInput);
  };

  return (
    <UpdateActivityInputContext.Provider
      value={{
        updatePointsFormState: activityInput,
        updateActivityInputDispatch: dispatch
      }}
    >
      <div className="rulePageContainer">
        <ResultsNavBar />
        <UserCreateDataCardContainer>
          <h1 data-testid="updatePageHeader">Update activity input</h1>

          {activityInput ? <UpdatePointsForm /> : null}
          <SubmitDataButton handleSubmit={handleClick} />
          {isLoadingActivityInput ? (
            <LoadingMessage loadingText={"fetching activity..."} />
          ) : null}
          {isErrorActivityInput ? (
            <ErrorMessage errorText="Error fetching activity" />
          ) : null}
          {isLoadingUpdateActivityInput ? (
            <LoadingMessage loadingText={"updating activity..."} />
          ) : null}
          {isErrorUpdateActivityInput ? (
            <ErrorMessage errorText="Error updating activity, please try again" />
          ) : null}
          {upDateActivityInputSuccess ? (
            <SuccessMessage successText="Update successful!" />
          ) : null}
        </UserCreateDataCardContainer>
      </div>
    </UpdateActivityInputContext.Provider>
  );
}

export default withRouter(UpdateActivityInput);
