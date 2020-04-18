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
import SubmitDataButton from "../../components/buttons/SubmitDataButton";
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";

//message components
import ReturnSuccessMsgOnSuccess from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnSuccessMsgOnSuccess";
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";
import ReturnLoadingMsgOnLoading from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnLoadingMsgOnLoading";

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
          <ReturnLoadingMsgOnLoading
            isLoading={isLoadingActivityInput}
            loadingMsg="fetching activity..."
          />
          <ReturnErrorMsgOnError
            isError={isErrorActivityInput}
            errorMsg="Error fetching activity"
          />
          <ReturnLoadingMsgOnLoading
            isLoading={isLoadingUpdateActivityInput}
            loadingMsg="updating activity..."
          />
          <ReturnErrorMsgOnError
            isError={isErrorUpdateActivityInput}
            errorMsg="Error updating activity, please try again"
          />
          <ReturnSuccessMsgOnSuccess
            isSuccess={upDateActivityInputSuccess}
            successMsg="Update successful!"
          />
        </UserCreateDataCardContainer>
      </div>
    </UpdateActivityInputContext.Provider>
  );
}

export default withRouter(UpdateActivityInput);
