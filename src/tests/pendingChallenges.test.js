import React from 'react'
import moxios from 'moxios'
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId, wait } from '@testing-library/react'
import PendingChallenges from '../pages/challenges/PendingChallenges';
import {pendingChallengeInitialInvitationData} from './testUtils/testMockData/pendingChallengeInvitationData'

let element;
describe('Mock pending challenge invitation get request success', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 200, response: [pendingChallengeInitialInvitationData]} )
        element = render(<StateProvider><PendingChallenges /></StateProvider>)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('should show challenge invitation title', () => {
        const {getByTestId} = element;
        const title = getByTestId('title')
        expect(title.innerHTML).toBe('Title:try')
    })

    test('should show challenge invitation status', () => {
        const {getByTestId} = element;
        const status = getByTestId('status')
        expect(status.innerHTML).toBe('Status: pending')
    })

    test('should show challenge invitation creator', () => {
        const {getByTestId} = element;
        const creator = getByTestId('creator')
        expect(creator.innerHTML).toBe('Creator: testCreator')
    })

    test('should show challenge invitation challenge type', () => {
        const {getByTestId} = element;
        const challengeType = getByTestId('challengeType')
        expect(challengeType.innerHTML).toBe('Challenge type: totalPoints')
    })
    test('should show challenge invitation start date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('startDate')
        expect(startDate.innerHTML).toBe('Start Date: 2020-02-23T18:55:31.105Z')
    })

    test('should show challenge invitation end date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('endDate')
        expect(startDate.innerHTML).toBe('End Date: 2020-02-23T18:55:31.105Z')
    })
})

describe('Mock pending challenge invitation get request fails', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 400,response: [pendingChallengeInitialInvitationData]} )
        element = render(<StateProvider><PendingChallenges /></StateProvider>)
    }) 
    afterEach(() => {
        moxios.uninstall()
    })

     test('Error message shows on failed pending challenges get request', async() => {
        const {getByTestId} = element;
        const errorMsg = await waitForElement(() => getByTestId('isError')) 
        expect(errorMsg.innerHTML).toBe('error loading invitation challenges')
    })
       
})

describe('mock pending challenge get request and update challenge status request.', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/updateChallengeStatus/${pendingChallengeInitialInvitationData._id}/`,{ status: 200, response: [pendingChallengeInitialInvitationData]} )
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 200, response: [pendingChallengeInitialInvitationData]} )
        element = render(<StateProvider><PendingChallenges /></StateProvider>)
    })

    afterEach(() => {
        moxios.uninstall()
    })


    test('update is loading message shows on change status to accept button click', async() => {
        const {getByTestId} = element;
        //get button and click accept challenge invitation
        const acceptButton = getByTestId('acceptButton')
        fireEvent.click(acceptButton);
        const titleAfterStatusChange = await waitForElement(() => getByTestId('updateisLoading'))
        expect(titleAfterStatusChange.innerHTML).toBe('updating status')
    })
})

describe('mock pending challenge get request success and update challenge status request failure.', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/updateChallengeStatus/${pendingChallengeInitialInvitationData._id}/`,{ status: 400, response: [pendingChallengeInitialInvitationData]} )
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 200, response: [pendingChallengeInitialInvitationData]} )
        element = render(<StateProvider><PendingChallenges /></StateProvider>)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('update failure message on failed patch update request', async() => {
        const {getByTestId} = element;
        const acceptButton = getByTestId('acceptButton')
        fireEvent.click(acceptButton);
        const updateisErrorMsg = await waitForElement(() => getByTestId('updateisError'))
        expect(updateisErrorMsg.innerHTML).toBe('error updating invitation challenge status')
    })

})



    // mock the update results
