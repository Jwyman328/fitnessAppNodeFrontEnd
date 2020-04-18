import React, { useReducer, useContext } from "react";

//Actions & Reducers
import goalReducer from "../../reducers/goalsReducer/goalReducer";
import CreateGoal from "../../actions/goalPageActions/createGoal";

//state
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import initialState from "../../initialState/pointGoalInitialState";

//context
import CreateGoalPageContext from "./GoalContext/CreateGoalPageContext";

//general components
import SubmitDataButton from "../../components/buttons/SubmitDataButton";
import GoalNavBar from "../../components/navBars/goalNavBar";

//card components
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";

//form components
import UserCreateDataFormInput from "../../components/forms/formElements/UserCreateDataFormInput";
import FormRow from "../../components/forms/formElements/FormRow";
import FormRowLabel from "../../components/forms/formElements/FormRowLabel";
import FormContainer from "../../components/forms/formElements/FormContainer";
import CreateGoalPageForm from "../../components/forms/CreateGoalPageForm";

//message components
import ReturnSuccessMsgOnSuccess from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnSuccessMsgOnSuccess";
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";

/**
 * Allow user to create a total point goal.
 * @param {*} props
 */
function CreateGoalPage(props) {
  // global store containing the use token for making requests
  const globalState = getGlobalState(useContext(store));

  //goal's page reducer
  const [state, dispatch] = useReducer(goalReducer, initialState);
  const { isSuccess, isLoading, isError } = state;

  /**
   * Submit goal state input to server to create a goal.
   *
   * Dispatch that the attempt goal creation has been attempted.
   * Attempt to create goal, passing dispatcher, current state, and user's token.
   * @param {*} e - event
   */
  const handleSubmit = e => {
    //dispatch action of post request
    e.preventDefault();
    dispatch({ type: "createGoalAttempt" });
    CreateGoal(state, dispatch, globalState.token);
  };

  return (
    <CreateGoalPageContext.Provider
      value={{ CreateGoalPageState: state, CreateGoalPageDispatch: dispatch }}
    >
      <div className="rulePageContainer">
        <GoalNavBar />
        <UserCreateDataCardContainer>
          <h1>Create A Goal</h1>
          <CreateGoalPageForm />
          <SubmitDataButton handleSubmit={handleSubmit} />

          <ReturnSuccessMsgOnSuccess
            isSuccess={isSuccess}
            successMsg="Goal created successfully"
          />
          <ReturnErrorMsgOnError
            isError={isError}
            errorMsg="Error creating goal, please try again"
          />
        </UserCreateDataCardContainer>
      </div>
    </CreateGoalPageContext.Provider>
  );
}

export default CreateGoalPage;
