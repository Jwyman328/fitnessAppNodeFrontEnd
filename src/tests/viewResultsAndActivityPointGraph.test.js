import React from 'react'
import moxios from 'moxios'
import { render, fireEvent, waitForElement, wait } from '@testing-library/react'
import ViewResults from '../pages/ViewResults'
import App from '../App'
import { StateProvider } from '../store/globalStore';
import { BrowserRouter as Router} from "react-router-dom";
import activityPointData from './testUtils/testMockData/activityPointData'
import loginUserForTest from './testUtils/loginUserForTest'

let element;
describe('mock point results fetch request success', () => {
    beforeEach(async() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})
        moxios.stubRequest(`http://localhost:3001/allActivityPoints/mine/`,{ status: 200, response: activityPointData})
        element = render(<StateProvider><Router><App /></Router></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const resultsNavLink = await waitForElement(() => getByTestId('navigateViewResults') ) 
        fireEvent.click(resultsNavLink)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('input point date shows', () => {
        const {getByTestId} = element;
        const dateElement = getByTestId('inputDate');
        expect(dateElement.innerHTML).toBe('2020-02-24')
    })
    test('input total point data shows', () => {
        const {getByTestId} = element;
        const totalPoints = getByTestId('totalPoints');
        expect(totalPoints.innerHTML).toBe('64.5')
    })
})

describe('mock point results fetch request success, start at home page to use withRouter successfully', () => {
    beforeEach(async() => {
        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})

        moxios.stubRequest(`http://localhost:3001/allActivityPoints/mine/`,{ status: 200, response: activityPointData})
        element = render(<StateProvider><App /></StateProvider>)

        const {getByTestId} = element;
        loginUserForTest(getByTestId)

        const resultsNavLink = await waitForElement(() => getByTestId('navigateViewResults') ) 
        fireEvent.click(resultsNavLink)

    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('see graph button navigates to individual graph page' , async() => {
      
        const {getByTestId} = element;

        const graphButton = await waitForElement(() =>  getByTestId('graphButton'));
        fireEvent.click(graphButton)
        const graphPageHeader = await waitForElement(() => getByTestId('graphPageHeader'))
        expect(graphPageHeader.innerHTML).toBe('Daily Point Graph')

    } )
    test('see update button navigates to individual update page' , async() => {

        const {getByTestId} = element;

        const graphButton = await waitForElement(() =>  getByTestId('updateButton'));
        fireEvent.click(graphButton)
        const graphPageHeader = await waitForElement(() => getByTestId('updatePageHeader'))
        expect(graphPageHeader.innerHTML).toBe('Update activity input')

    } )

})