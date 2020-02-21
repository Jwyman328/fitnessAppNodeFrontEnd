import React from 'react'
import moxios from 'moxios'
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react'
import ChallengePage from '../pages/ChallengePage';

let element;
const today = new Date().toISOString().split('T')[0]

describe('challenge inputs can accept data changes', () => {
    beforeEach(() => {
         element = render(<StateProvider><ChallengePage/></StateProvider>)
    })

    test('Challenge type default to total points', () => {
        const {getByTestId} = element;
        const challengeType = getByTestId('challengeType')
        expect(challengeType.value).toBe('totalPoints')
    })
    test('Challenge type can be changed' ,() => {
        const {getByTestId} = element;
        const challengeType = getByTestId('challengeType')
        fireEvent.change(challengeType,{target: {value: 'Sleep'}})
        expect(challengeType.value).toBe('sleep')
    })

    test('title  can be changed' ,() => {
        const {getByTestId} = element;
        const title = getByTestId('title')
        fireEvent.change(title,{target: {value: 'Hello world'}})
        expect(title.value).toBe('Hello world')
    })

    test('Start date start today' ,() => {
        const {getByTestId} = element;
        const startDate = getByTestId('challengeStartDate')
        expect(startDate.value).toBe(today)
    })

    test('Start date can be changed' ,() => {
        const {getByTestId} = element;
        const startDate = getByTestId('challengeStartDate')
        fireEvent.change(startDate,{target: {value: '2020-10-24'}})
        expect(startDate.value).toBe('2020-10-24')
    })
})

describe('mock create challenge request returns success', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/challenge/',{ status: 200})
        element = render(<StateProvider><ChallengePage/></StateProvider>)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('success msg on success post request', async() => {
        const {getByTestId} = element;
        const submitButton = getByTestId('submitButton');
        fireEvent.click(submitButton)
        const successMsg = await waitForElement(() => getByTestId('successMsg'))
        expect(successMsg.innerHTML).toBe('Challenge created successfully')
    })
})

describe('mock create challenge request returns error', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/challenge/',{ status: 400})
        element = render(<StateProvider><ChallengePage/></StateProvider>)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('error msg on success post request', async() => {
        const {getByTestId} = element;
        const submitButton = getByTestId('submitButton');
        fireEvent.click(submitButton)
        const successMsg = await waitForElement(() => getByTestId('errorMsg'))
        expect(successMsg.innerHTML).toBe('Error creating challenge, please try again')
    })
})