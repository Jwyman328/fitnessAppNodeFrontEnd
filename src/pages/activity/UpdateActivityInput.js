import React, { useEffect, useReducer } from "react";
import { withRouter } from "react-router-dom";

import UpdateActivityInputReducer from "../../reducers/activityReducers/updateActivityInputReducer";
import updateActivityInputInitialState from "../../initialState/updateActivityInputInitialState";
import getActivityInput from "../../actions/updateActivityInputActions/getActivityInput";
import updateActivityInput from "../../actions/updateActivityInputActions/updateActivityInputAction";
import ResultsNavBar from "../../components/navBars/resultsNavBar";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

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

/**
 * Form for updating a selected activity.
 *
 * @param {String} activityID id of the activityInput.
 */
function UpdateActivityInput({
  location: {
    state: { activityID }
  }
}) {
  const { globalState } = useGlobalState();

  const [state, dispatch] = useReducer(
    UpdateActivityInputReducer,
    updateActivityInputInitialState
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

  /**
   * Fetch activity input data.
   */
  useEffect(() => {
    getActivityInput(dispatch, globalState.token, activityID);
  }, [globalState.token, activityID]);

  /**
   * Submit updated activity data to the server.
   *
   * @param {Event} e - click event
   */
  const handleClick = e => {
    e.preventDefault();
    updateActivityInput(dispatch, globalState.token, activityID, activityInput);
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
