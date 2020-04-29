import React, { useReducer } from "react";

//Actions & Reducers
import goalReducer from "../../reducers/goalsReducer/goalReducer";
import CreateGoal from "../../actions/goalPageActions/createGoal";

//state
import pointGoalFormInitialState from "../../initialState/pointGoalInitialState";

//context
import CreateGoalPageContext from "./GoalContext/CreateGoalPageContext";

//general components
import SubmitDataButton from "../../components/buttons/SubmitDataButton";
import GoalNavBar from "../../components/navBars/goalNavBar";

//card components
import UserCreateDataCardContainer from "../../components/cardComponents/cardContainers/UserCreateDataCardContainer";

//form components
import CreateGoalPageForm from "../../components/forms/CreateGoalPageForm";

//message components
import ReturnSuccessMsgOnSuccess from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnSuccessMsgOnSuccess";
import ReturnErrorMsgOnError from "../../components/messagesAboutProgramStatus/ReturnMessagesOnCorrectStatus/ReturnErrorMsgOnError";

// custom hooks
import useGlobalState from "../../customHooks/customAuthHooks/useGlobalState";

/**
 * Show form to allow user to create a total point goal.
 */
function CreateGoalPage() {
  // global store containing the use token for making requests
  const { globalState } = useGlobalState();

  const [createGoalPageState, dispatch] = useReducer(
    goalReducer,
    pointGoalFormInitialState
  );
  const { isSuccess, isError } = createGoalPageState;

  /**
   * Submit goal state form input to server to create a goal.
   *
   * Dispatch that the attempt goal creation has been attempted.
   * Attempt to create goal, passing dispatcher, current state, and user's token.
   * @param {*} e - event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "createGoalAttempt" });
    CreateGoal(createGoalPageState, dispatch, globalState.token);
  };

  return (
    <CreateGoalPageContext.Provider
      value={{
        CreateGoalPageState: createGoalPageState,
        CreateGoalPageDispatch: dispatch
      }}
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
