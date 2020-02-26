import React, { useReducer, useContext, useEffect } from "react";
import initialState from "../../initialState/challengeInitialState";
import CreateChallenge from "../../actions/challengePageActions/createChallenge";
import challengeReducer from "../../reducers/challengeReducer";
import { store } from "../../store/globalStore";
import {
  getGlobalState,
  dispatchInputChange
} from "../../utils/helperFunctions";
import getAllUsers from "../../actions/challengePageActions/getAllUsers";

function ChallengePage(props) {
  // global store containing the use token for making requests
  const globalState = getGlobalState(useContext(store));

  //goal's page reducer
  const [state, dispatch] = useReducer(challengeReducer, initialState);
  const {
    challengeStartDate,
    challengeEndDate,
    title,
    allUsers,
    selectedUsers,
    challengeType,
    isSuccess,
    isLoading,
    isError
  } = state;

  /**
   * Handle change of each input.
   * @param {*} e -input event
   */
  const handleChange = event => {
    dispatchInputChange(dispatch, event);
  };
  const handleAddSelectedUser = e => {
    dispatch({ type: "handleSelectedUsers", selectedUser: e.target.value });
  };

  /**
   * Submit challenge state input to server to create a challenge.
   *
   * Dispatch that the attempt challenge creation has been attempted.
   * Attempt to create goal, passing dispatcher, current state, and user's token.
   * @param {*} e - event
   */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "createChallengeAttempt" });
    CreateChallenge(state, dispatch, globalState.token);
  };
  let options = {};
  useEffect(() => {
    getAllUsers(dispatch, globalState.token);
  }, []);

  /**
   * Create an aray of all users to select to invite toa challenge
   */
  const createUserSelect = () => {
    return allUsers.map(userEmail => (
      <option key={userEmail} data-testid={userEmail} value={userEmail}>
        {userEmail}
      </option>
    ));
  };

  return (
    <div className="rulePageContainer">
      <div className="containerRules">
        <h1>challenge Page</h1>

        <form className="formContainer">
          <div className="formItem">
            <label className="formTitle">
              Start Date:
              <input
                size="15"
                className="formInput"
                name="challengeStartDate"
                data-testid="challengeStartDate"
                type="text"
                value={challengeStartDate}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="formItem">
            <label className="formTitle">
              End Date:
              <input
                size="15"
                className="formInput"
                name="challengeEndDate"
                data-testid="challengeEndDate"
                type="text"
                value={challengeEndDate}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="formItem">
            <label className="formTitle">
              Title:
              <input
                input
                size="15"
                className="formInput"
                name="title"
                data-testid="title"
                type="text"
                value={title}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="formItem">
            <label className="formTitle">
              Type:
              <select
              className="formInput"
                multiple={false}
                data-testid="challengeType"
                name="challengeType"
                value={challengeType}
                onChange={handleChange}
              >
                <option value="sleep">Sleep</option>
                <option value="Water">Water</option>
                <option value="Clean Eating">Clean Eating</option>
                <option value="totalPoints">Total Points</option>
                <option value="Workout">Workout</option>
              </select>
            </label>
          </div>
          <div className="formItem">
            {allUsers ?
             (
                <label className="formTitle">
                    Invitees:
              <select
                className="formInput"
                multiple={true}
                data-testid="selectUsersInput"
                name="userEmails"
                value={selectedUsers}
                onChange={handleAddSelectedUser}
              >
                {createUserSelect()}
              </select>
              </label>
            ) : null}
          </div>
        </form>
        <button
          className="formItem"
          data-testid="submitButton"
          onClick={handleSubmit}
        >
          create challenge
        </button>

        {isSuccess ? (
          <div data-testid="successMsg">Challenge created successfully</div>
        ) : null}
        {isError ? (
          <div data-testid="errorMsg">
            Error creating challenge, please try again
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ChallengePage;
