import React, { useContext } from "react";

import FormContainer from "./formElements/FormContainer";
import FormRow from "./formElements/FormRow";
import FormRowLabel from "./formElements/FormRowLabel";
import UserCreateDataFormInput from "./formElements/UserCreateDataFormInput";

//dispatch input change
import { dispatchInputChange } from "../../utils/helperFunctions";

//context
import CreateChallengeContext from "../../pages/challenges/challengeContext/CreateChallengeContext";

/**
 * Form to create a challenge object and invite other users to said challenge.
 */
function CreateChallengeForm() {
  const { createChallengeState, createChallengeDispatch } = useContext(
    CreateChallengeContext
  );
  const {
    challengeStartDate,
    challengeEndDate,
    title,
    allUsers,
    selectedUsers,
    challengeType
  } = createChallengeState;

  /**
   * Add the selected challengeType as the challenge challengeType.
   *
   * @param {Event} event onChange event.
   */
  const handleChallengeTypeSelectChange = event => {
    dispatchInputChange(createChallengeDispatch, event);
  };

  /**
   * Add the selected user to group of selectedUser.
   *
   * @param {Event} event onChange event.
   */
  const handleAddSelectedUser = event => {
    createChallengeDispatch({
      type: "handleSelectedUsers",
      selectedUser: event.target.value
    });
  };

  /**
   * Create an array of option Elements of users to optionally be invited to the challenge.
   *
   * @return {Array} option elements each containing a user's email.
   */
  const createUserSelectOptions = () => {
    return allUsers.map(userEmail => (
      <option key={userEmail} data-testid={userEmail} value={userEmail}>
        {userEmail}
      </option>
    ));
  };

  return (
    <FormContainer>
      <FormRow>
        <FormRowLabel labelText="Start Date:" />
        <UserCreateDataFormInput
          dataTestid={"challengeStartDate"}
          name={"challengeStartDate"}
          type={"text"}
          value={challengeStartDate}
          dispatch={createChallengeDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="End Date:" />
        <UserCreateDataFormInput
          dataTestid={"challengeEndDate"}
          name={"challengeEndDate"}
          type={"text"}
          value={challengeEndDate}
          dispatch={createChallengeDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Title:" />
        <UserCreateDataFormInput
          dataTestid={"title"}
          name={"title"}
          type={"text"}
          value={title}
          dispatch={createChallengeDispatch}
        />
      </FormRow>

      <FormRow>
        <FormRowLabel labelText="Catagory:" />
        <select
          className="rowFormItem"
          multiple={false}
          data-testid="challengeType"
          name="challengeType"
          value={challengeType}
          onChange={handleChallengeTypeSelectChange}
        >
          <option value="sleep">Sleep</option>
          <option value="Water">Water</option>
          <option value="Clean Eating">Clean Eating</option>
          <option value="totalPoints">Total Points</option>
          <option value="Workout">Workout</option>
        </select>
      </FormRow>

      {allUsers ? (
        <div className="rowForm">
          <label className="rowFormItem">Invitees:</label>
          <select
            className="rowFormItemInvitee"
            multiple={true}
            data-testid="selectUsersInput"
            name="userEmails"
            value={selectedUsers}
            onChange={handleAddSelectedUser}
          >
            {createUserSelectOptions()}
          </select>
        </div>
      ) : null}
    </FormContainer>
  );
}

export default CreateChallengeForm;
