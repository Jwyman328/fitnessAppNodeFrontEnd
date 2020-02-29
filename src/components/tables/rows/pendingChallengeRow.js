import React,{useContext, useReducer} from 'react';
import updateChallengeInvitationStatus from '../../../actions/pendingChallengeInvitationActions/updateChallengeInvitationStatus'
import initialState from '../../../initialState/pendingChallengesInitialState'
import getAllPendingChallengeInvitations from '../../../actions/pendingChallengeInvitationActions/getAllPendingChallenges'
import {store} from '../../../store/globalStore'
import pendingChallengePageReducer from '../../../reducers/challengeReducers/pendingChallengesPageReducer'

import {getGlobalState, dispatchInputChange} from '../../../utils/helperFunctions'

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
        <tr className='rowContainer'>
            <td className='rowItem' data-testid='title'>{challengeInvitationData.title}</td>
            <td className='rowItem' data-testid='creator'>{challengeInvitationData.creator}</td>
            <td className='rowItem' data-testid='challengeType'>{challengeInvitationData.challengeType}</td>
            <td className='rowItem' data-testid='startDate'>{challengeInvitationData.startDate}</td>
            <td className='rowItem' data-testid='endDate'>{challengeInvitationData.startDate}</td>
           <td className='rowItem'><button data-testid='acceptButton' onClick={() => changeStatusInvitation('accepted')}>Accept invitation</button></td>
           <td className='rowItem'><button data-testid='rejectButton' onClick={() => changeStatusInvitation('rejected')}>Reject invitation</button></td>
        </tr>
    )
}

export default PendingChallengeInvitationCard