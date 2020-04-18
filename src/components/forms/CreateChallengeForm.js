import React, { useContext } from "react";

import FormContainer from "./formElements/FormContainer";
import FormRow from "./formElements/FormRow";
import FormRowLabel from "./formElements/FormRowLabel";
import UserCreateDataFormInput from "./formElements/UserCreateDataFormInput";

//dispatch input change
import { dispatchInputChange } from "../../utils/helperFunctions";

//context
import CreateChallengeContext from "../../pages/challenges/challengeContext/CreateChallengeContext";

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

  const handleChange = event => {
    dispatchInputChange(createChallengeDispatch, event);
  };

  const handleAddSelectedUser = e => {
    createChallengeDispatch({
      type: "handleSelectedUsers",
      selectedUser: e.target.value
    });
  };

  const createUserSelect = () => {
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
          onChange={handleChange}
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
            {createUserSelect()}
          </select>
        </div>
      ) : null}
    </FormContainer>
  );
}

export default CreateChallengeForm;
