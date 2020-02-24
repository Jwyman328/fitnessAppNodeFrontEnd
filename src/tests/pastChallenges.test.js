import React from 'react'
import moxios from 'moxios'
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId, wait } from '@testing-library/react'
import PastChallenges from '../pages/PastChallenges';
import {pendingChallengeInitialInvitationData} from './testUtils/testMockData/pendingChallengeInvitationData'

let element;
describe('mock fetch past challenges request success',() => {
    beforeEach(() =>{
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/pastChallenges/`,{ status: 200, response: [pendingChallengeInitialInvitationData]} )
        element = render(<StateProvider><PastChallenges /></StateProvider>)
    })
    
    afterEach(() => {
        moxios.uninstall()
    })

    test('should show challenge  title', () => {
        const {getByTestId} = element;
        const title = getByTestId('title')
        expect(title.innerHTML).toBe('Title:try')
    })
    test('should show challenge  creator', () => {
        const {getByTestId} = element;
        const creator = getByTestId('creator')
        expect(creator.innerHTML).toBe('Creator: testCreator')
    })

    test('should show challenge  challenge type', () => {
        const {getByTestId} = element;
        const challengeType = getByTestId('challengeType')
        expect(challengeType.innerHTML).toBe('Challenge type: totalPoints')
    })
    test('should show challenge  start date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('startDate')
        expect(startDate.innerHTML).toBe('Start Date: 2020-02-23T18:55:31.105Z')
    })

    test('should show challenge  end date', () => {
        const {getByTestId} = element;
        const startDate = getByTestId('endDate')
        expect(startDate.innerHTML).toBe('End Date: 2020-02-23T18:55:31.105Z')
    })

})

describe('mock fetch past challenges request failure',() => {
    beforeEach(() =>{
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/pastChallenges/`,{ status: 400, response: [pendingChallengeInitialInvitationData]} )
        element = render(<StateProvider><PastChallenges /></StateProvider>)
    })

    test('Error message shows on failed pending challenges get request', async() => {
        const {getByTestId} = element;
        const errorMsg = await waitForElement(() => getByTestId('isError')) 
        expect(errorMsg.innerHTML).toBe('Error loading past challenges')
    })

})

