import React from 'react'
/**
 * Create a display card for a challenge invitation
 * @param {Object} challengeInvitationData -- challenge invitation data
 */
const PastChallengesCard =(challengeInvitationData) => {


    return(
        <div>
            <div data-testid='title'>Title:{challengeInvitationData.title}</div>
            <div data-testid='status'>Status: {challengeInvitationData.status}</div>
            <div data-testid='creator'>Creator: {challengeInvitationData.creator}</div>
            <div data-testid='challengeType'>Challenge type: {challengeInvitationData.challengeType}</div>
            <div data-testid='startDate'>Start Date: {challengeInvitationData.startDate}</div>
            <div data-testid='endDate'>End Date: {challengeInvitationData.startDate}</div>
        </div>
    )
}

export default PastChallengesCard;