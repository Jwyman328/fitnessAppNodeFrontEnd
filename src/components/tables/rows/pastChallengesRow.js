import React from 'react'
/**
 * Create a display card for a challenge invitation
 * @param {Object} challengeInvitationData -- challenge invitation data
 */
const PastChallengesRow =(challengeInvitationData) => {

    return(
        <tr  key={`${challengeInvitationData._id}`} className='rowContainer' key={challengeInvitationData._id}>
            <td className='rowItem' data-testid='title'>{challengeInvitationData.title}</td>
            <td className='rowItem' data-testid='challengeType'>{challengeInvitationData.challengeType}</td>
            <td className='rowItem' data-testid='startDate'>{challengeInvitationData.startDate}</td>
            <td className='rowItem' data-testid='endDate'>{challengeInvitationData.endDate}</td>
        </tr>
    )
}

export default PastChallengesRow;