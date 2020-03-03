import React from 'react'
import moxios from 'moxios'
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId, wait } from '@testing-library/react'
import PastChallenges from '../pages/challenges/PastChallenges';
import {pendingChallengeInitialInvitationData} from './testUtils/testMockData/pendingChallengeInvitationData'
import App from '../App'
import loginUserForTest from './testUtils/loginUserForTest'

let element;
describe('mock fetch past challenges request success',() => {
    beforeEach(async() =>{
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})
        moxios.stubRequest(`http://localhost:3001/pastChallenges/`,{ status: 200, response: pendingChallengeInitialInvitationData} )
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const challengeNavLink = await waitForElement(() => getByTestId('navigateToChallenges') ) 
        fireEvent.click(challengeNavLink)
        const PendingChallenges = await waitForElement(() =>  getByTestId('PastChallenges'));
        fireEvent.click(PendingChallenges)
    })
    
    afterEach(() => {
        moxios.uninstall()
    })

    test('should show challenge  title', () => {
        const {getByTestId} = element;
        const title = getByTestId('title')
        expect(title.innerHTML).toBe('try')
    })


    test('should show challenge  challenge type', () => {
        const {getByTestId} = element;
        const challengeType = getByTestId('challengeType')
        expect(challengeType.innerHTML).toBe('totalPoints')
    })
    test('should show challenge  start date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('startDate')
        expect(startDate.innerHTML).toBe('2020-02-23')
    })

    test('should show challenge  end date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('endDate')
        expect(startDate.innerHTML).toBe('2020-02-23')
    })

})

describe('mock fetch past challenges request failure',() => {
    beforeEach(async() =>{
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})
        moxios.stubRequest(`http://localhost:3001/pastChallenges/`,{ status: 400, response: pendingChallengeInitialInvitationData} )
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const challengeNavLink = await waitForElement(() => getByTestId('navigateToChallenges') ) 
        fireEvent.click(challengeNavLink)
        const PendingChallenges = await waitForElement(() =>  getByTestId('PastChallenges'));
        fireEvent.click(PendingChallenges)
    })

    test('Error message shows on failed pending challenges get request', async() => {
        const {getByTestId} = element;
        const errorMsg = await waitForElement(() => getByTestId('isError')) 
        expect(errorMsg.innerHTML).toBe('Error loading past challenges')
    })

})

