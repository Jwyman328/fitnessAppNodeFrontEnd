import React from "react";
import updateChallengeInvitationStatus from "../../../actions/pendingChallengeInvitationActions/updateChallengeInvitationStatus";
import "../../../pages/form.scss";

/**
 * Create a display card for the challenge invitation, with ability to change challenge status.
 *
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 * @param {Object} challengeInvitationData -- pending challenge invitation data
 */
const PendingChallengeInvitationCard = (
  dispatch,
  token,
  challengeInvitationData
) => {
  const changeStatusInvitation = newStatus => {
    updateChallengeInvitationStatus(
      dispatch,
      token,
      challengeInvitationData._id,
      newStatus
    );
  };

  return (
    <tr key={`${challengeInvitationData._id}`} className="table__row">
      <td className="table__item" data-testid="title">
        {challengeInvitationData.title}
      </td>
      <td className="table__item" data-testid="challengeType">
        {challengeInvitationData.challengeType}
      </td>
      <td className="table__item" data-testid="startDate">
        {challengeInvitationData.startDate}
      </td>
      <td className="table__item" data-testid="endDate">
        {challengeInvitationData.startDate}
      </td>
      <td className="table__item">
        <button
          className="rowButton"
          data-testid="acceptButton"
          onClick={() => changeStatusInvitation("accepted")}
        >
          Accept
        </button>
      </td>
      <td className="table__item">
        <button
          className="rowButton"
          data-testid="rejectButton"
          onClick={() => changeStatusInvitation("rejected")}
        >
          Reject
        </button>
      </td>
    </tr>
  );
};

export default PendingChallengeInvitationCard;
