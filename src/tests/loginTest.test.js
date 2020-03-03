import React from 'react';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react'
import moxios from 'moxios';
import LoginPage from '../pages/auth/login';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import renderWithRouter from './testUtils/setUpTests'
import renderWithRouter2 from './testUtils/renderWithRouter'
import App from '../App'
import { createMemoryHistory } from 'history'
import { StateProvider } from '../store/globalStore';


let element;
describe('test login inputs', () => {
    beforeEach(() => {
        // set up loginPage element 
        element = renderWithRouter(<LoginPage />,'/')
    })

    test('test email input', () => {
        const {getByTestId} = element;
        const emailInput = getByTestId('emailInput')
        expect(emailInput.name).toBe('email') ;
    })

    test('test onChange email input', async() => {
        const {getByTestId} = element;
        const emailInput = getByTestId('emailInput')
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
         expect(emailInput.value).toBe('testEmail@gmail.com')
    })
    test('test onChange password input', async() => {
        const {getByTestId} = element;
        const passwordInput = getByTestId('passwordInput')
        fireEvent.change(passwordInput,{target: {value: 'myExistingPassword'}})
         expect(passwordInput.value).toBe('myExistingPassword')
    })
})



describe('mox form submit success', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 200, response: { token: 'mockToken' }})
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('login user successfully', async() => {
        // test entering username and password
        // use StateProvider to provide global context
        const {container, getByTestId} = renderWithRouter2(<StateProvider><App /></StateProvider>,{
            route: '/login',
          })
        // from landingPage navigate to loginPage
        const loginLink = getByTestId('navigateToLogin')
        fireEvent.click(loginLink)

        //enter password
        const passwordInput = getByTestId('passwordInput')
        fireEvent.change(passwordInput,{target: {value: 'myExistingPassword'}})
        //enter email
        const emailInput = getByTestId('emailInput')
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
        //submit loginData
        const submitButton = getByTestId('submitButton')
        fireEvent.click(submitButton)
        //check user is redirect to the homepage
        const homePageHeader = await waitForElement(() => getByTestId('homeHeader') )
        expect(homePageHeader.innerHTML).toMatch('Fitness Challenge')
    } )
})
let elements
describe('failed user login attempt', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('http://localhost:3001/user/login',{ status: 400, response: { token: 'mockToken' }})
        element = render(<Router><LoginPage /></Router>)

    })

    afterEach(() => {
        moxios.uninstall()
    })
    
    test('login user failure shows error message', async() => {
        const  { getByTestId} = element
        //enter password
        const passwordInput = getByTestId('passwordInput')
        fireEvent.change(passwordInput,{target: {value: 'myExistingPassword'}})
        //enter email
        const emailInput = getByTestId('emailInput')
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
        //submit loginData
        const submitButton = getByTestId('submitButton')
        fireEvent.click(submitButton)
        //check error message is displayed
        const errorMsg = await waitForElement(() => getByTestId('errorMsg')) 
        expect(errorMsg.innerHTML).toBe('Error on login, please try again')
    } )
})


