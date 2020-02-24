import React from 'react'
import moxios from 'moxios'
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId, wait } from '@testing-library/react'
import CurrentFutureChallenges from '../pages/CurrentFutureChallenges'
import futureChallengeData from './testUtils/testMockData/futureChallengeData'
import currentChallengeData from './testUtils/testMockData/currentChallengeData'

let element;
describe('mock fetch current and future challenge request success',() => {
    beforeEach(() =>{
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/currentChallenges/`,{ status: 200, response: currentChallengeData} )
        moxios.stubRequest(`http://localhost:3001/futureChallenges/`,{ status: 200, response: futureChallengeData} )
        element = render(<StateProvider><CurrentFutureChallenges /></StateProvider>)
    })
    
    afterEach(() => {
        moxios.uninstall()
    })

    test('current challenge data title shows', () => {
        const {queryAllByTestId} = element;
        const title = queryAllByTestId('title')
        expect(title[0].innerHTML).toBe('Title:current challenge ')
    })

    test('future challenge data title shows', () => {
        const {queryAllByTestId} = element;
        const title = queryAllByTestId('title')
        expect(title[2].innerHTML).toBe('Title:future challenge ')
    })
})

describe('mock fetch current and future challenge request failure',() => {
    beforeEach(() =>{
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/currentChallenges/`,{ status: 400, response: currentChallengeData} )
        moxios.stubRequest(`http://localhost:3001/futureChallenges/`,{ status: 400, response: futureChallengeData} )
        element = render(<StateProvider><CurrentFutureChallenges /></StateProvider>)
    })
    
    afterEach(() => {
        moxios.uninstall()
    })

    test('current challenge fetch error shows', async() => {
        const {getByTestId} = element;
        const currentFetchError = await waitForElement(() => getByTestId('isCurrentError') ) 
        expect(currentFetchError.innerHTML).toBe('Error loading current challenges')
    }) 

    test('future challenge fetch error shows', async() => {
        const {getByTestId} = element;
        const futureFetchError = await waitForElement(() => getByTestId('isFutureError') ) 
        expect(futureFetchError.innerHTML).toBe('Error loading future challenges')
    }) 


})