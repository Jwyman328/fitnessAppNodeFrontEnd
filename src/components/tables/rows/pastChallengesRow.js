import React from "react";
/**
 * Create a row for a challenge invitation
 *
 * @param {Object} challengeInvitationData -- challenge invitation data
 */
const PastChallengesRow = challengeInvitationData => {
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
        {challengeInvitationData.endDate}
      </td>
    </tr>
  );
};

export default PastChallengesRow;
