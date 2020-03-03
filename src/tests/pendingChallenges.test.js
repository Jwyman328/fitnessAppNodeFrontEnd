import React from 'react'
import moxios from 'moxios'
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId, wait } from '@testing-library/react'
import PendingChallenges from '../pages/challenges/PendingChallenges';
import {pendingChallengeInitialInvitationData} from './testUtils/testMockData/pendingChallengeInvitationData'
import loginUserForTest from './testUtils/loginUserForTest'
import App from '../App'

let element;
describe('Mock pending challenge invitation get request success', () => {
    beforeEach(async() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 200, response: pendingChallengeInitialInvitationData} )
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const challengeNavLink = await waitForElement(() => getByTestId('navigateToChallenges') ) 
        fireEvent.click(challengeNavLink)
        const PendingChallenges = await waitForElement(() =>  getByTestId('PendingChallenges'));
        fireEvent.click(PendingChallenges)


    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('should show challenge invitation title', async() => {

        const {getByTestId} = element;

        const title = await waitForElement(() =>getByTestId('title') ) 
        expect(title.innerHTML).toBe('try')
    })


    test('should show challenge invitation challenge type', () => {
        const {getByTestId} = element;
        const challengeType = getByTestId('challengeType')
        expect(challengeType.innerHTML).toBe('totalPoints')
    })
    test('should show challenge invitation start date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('startDate')
        expect(startDate.innerHTML).toBe('2020-02-23')
    })

    test('should show challenge invitation end date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('endDate')
        expect(startDate.innerHTML).toBe('2020-02-23')
    })
})

describe('Mock pending challenge invitation get request fails', () => {
    beforeEach(async() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})

        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 400,response: pendingChallengeInitialInvitationData} )
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const challengeNavLink = await waitForElement(() => getByTestId('navigateToChallenges') ) 
        fireEvent.click(challengeNavLink)
        const PendingChallenges = await waitForElement(() =>  getByTestId('PendingChallenges'));
        fireEvent.click(PendingChallenges)

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
    beforeEach(async() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})

        moxios.stubRequest(`http://localhost:3001/updateChallengeStatus/${pendingChallengeInitialInvitationData._id}/`,{ status: 200, response: pendingChallengeInitialInvitationData} )
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 200, response: pendingChallengeInitialInvitationData} )
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const challengeNavLink = await waitForElement(() => getByTestId('navigateToChallenges') ) 
        fireEvent.click(challengeNavLink)
        const PendingChallenges = await waitForElement(() =>  getByTestId('PendingChallenges'));
        fireEvent.click(PendingChallenges)

    })

    afterEach(() => {
        moxios.uninstall()
    })


    test('update is loading message shows on change status to accept button click', async() => {
        const {getByTestId} = element;
        //get button and click accept challenge invitation
        const acceptButton = await waitForElement(() =>  getByTestId('acceptButton') )
        fireEvent.click(acceptButton);
        const titleAfterStatusChange = await waitForElement(() => getByTestId('updateisLoading'))
        expect(titleAfterStatusChange.innerHTML).toBe('updating status')
    })
})

describe('mock pending challenge get request success and update challenge status request failure.', () => {
    beforeEach(async() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})

        moxios.stubRequest(`http://localhost:3001/updateChallengeStatus/${pendingChallengeInitialInvitationData._id}/`,{ status: 400} )
        moxios.stubRequest(`http://localhost:3001/AllChallengeInvitation/myInvitations/pending`,{ status: 200, response: pendingChallengeInitialInvitationData} )
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const challengeNavLink = await waitForElement(() => getByTestId('navigateToChallenges') ) 
        fireEvent.click(challengeNavLink)
        const PendingChallenges = await waitForElement(() =>  getByTestId('PendingChallenges'));
        fireEvent.click(PendingChallenges)

    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('update is loading message on failed patch update request', async() => {
        const {getByTestId} = element;
        const acceptButton = await waitForElement(() => getByTestId('acceptButton') ) 
        fireEvent.click(acceptButton);
        const updateisLoadingMsg = await waitForElement(() => getByTestId('updateisLoading'))
        expect(updateisLoadingMsg.innerHTML).toBe('updating status')
    })

})



    // mock the update results
