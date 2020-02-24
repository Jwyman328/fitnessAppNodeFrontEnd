import React,{useContext, useReducer} from 'react';
import updateChallengeInvitationStatus from '../actions/pendingChallengeInvitationActions/updateChallengeInvitationStatus'
import initialState from '../initialState/pendingChallengesInitialState'
import getAllPendingChallengeInvitations from '../actions/pendingChallengeInvitationActions/getAllPendingChallenges'
import {store} from '../store/globalStore'
import pendingChallengePageReducer from '../reducers/pendingChallengesPageReducer'

import {getGlobalState, dispatchInputChange} from '../utils/helperFunctions'

/**
 * Create a display card for the challenge invitation, with ability to change challenge status.
 * 
 * @param {Function} dispatch -- dispatch function to dispatch events
 * @param {String} token -- jwt token to make requests.
 * @param {Object} challengeInvitationData -- pending challenge invitation data
 */
const PendingChallengeInvitationCard =(dispatch, token, challengeInvitationData) => {

    const changeStatusInvitation = (newStatus) => {
        updateChallengeInvitationStatus(dispatch, token,challengeInvitationData._id, newStatus)
    }

    return(
        <div>
            <div data-testid='title'>Title:{challengeInvitationData.title}</div>
            <div data-testid='status'>Status: {challengeInvitationData.status}</div>
            <div data-testid='creator'>Creator: {challengeInvitationData.creator}</div>
            <div data-testid='challengeType'>Challenge type: {challengeInvitationData.challengeType}</div>
            <div data-testid='startDate'>Start Date: {challengeInvitationData.startDate}</div>
            <div data-testid='endDate'>End Date: {challengeInvitationData.startDate}</div>
            <button data-testid='acceptButton' onClick={() => changeStatusInvitation('accepted')}>Accept invitation</button>
            <button data-testid='rejectButton' onClick={() => changeStatusInvitation('rejected')}>Reject invitation</button>
        </div>
    )
}

export default PendingChallengeInvitationCard