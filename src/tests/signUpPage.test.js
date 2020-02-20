//import the sign up component 
// import moxios 
import React from 'react'
import moxios from 'moxios'
import SignUpPage from '../pages/signUp'
import App from '../App'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { Router } from 'react-router-dom'
import renderWithRouter from './setUpTests'
import { createMemoryHistory } from 'history'
import homePage from '../pages/home'

let element;
describe('Test input onChange values', () =>{
    beforeEach(()=> {
        element = renderWithRouter(<SignUpPage />, '/')
    })
    

    test('test email input accepts email', () => {
        const {getByTestId} = element;
        const emailInput = getByTestId('emailInput')
        expect(emailInput.name).toBe('email')
    })

    test('test onChange emailInput', async() => {
        const {getByTestId} = element;
        const emailInput = getByTestId('emailInput')
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
        //const emailValue = await waitForElement(() => expect(emailInput.value).toBe('testEmail@gmail.com'))
        expect(emailInput.value).toBe('testEmail@gmail.com')
    })
    test('test onChange password input', async() => {
        const {getByTestId} = element;
        const passwordInput = getByTestId('passwordInput')
        fireEvent.change(passwordInput,{target: {value: 'testPassword'}})
        expect(passwordInput.value).toBe('testPassword')
    })
})

describe('Test signup request', () => {
    beforeEach(() => {
        //element = renderWithRouter(<SignUpPage />)

        moxios.install()
        moxios.stubRequest('http://localhost:3001/user/create/',{ status: 200, response: { token: 'mockToken' }})
        //mock going to the next page 
    })

    afterEach(() => {
        moxios.uninstall()
    })
    test('stop from creating a user by entering two different passwords', async() => {

        const element2 = renderWithRouter(<App/>,'/')
        const {getByTestId, getByText} = element2;
        //enter an email 
        const emailInput = getByTestId('emailInput')
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
        //enter both password 
        const passwordInput = getByTestId('passwordInput')
        fireEvent.change(passwordInput,{target: {value: 'testPassword'}})
        const passwordInput2 = getByTestId('passwordInput2')
        fireEvent.change(passwordInput2,{target: {value: 'wrongPassword'}})
        // sumbit data 
        const signUpButton = getByTestId('signUpButton')
        fireEvent.click(signUpButton)
        // find evidence that error created
        const errorMsg = await waitForElement(() => getByTestId('errorMsg')) 
        expect(errorMsg.innerHTML).toBe('Error creating user, please try again')
        
    })
    
     test('create a user and be logged in', async() => {
        element = renderWithRouter(<App/>,'/')
        const {getByTestId, getByText} = element;
        //enter an email 
        const emailInput = getByTestId('emailInput')
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
        //enter both password 
        const passwordInput = getByTestId('passwordInput')
        fireEvent.change(passwordInput,{target: {value: 'testPassword'}})
        const passwordInput2 = getByTestId('passwordInput2')
        fireEvent.change(passwordInput2,{target: {value: 'testPassword'}})
        // sumbit data 
        const signUpButton = getByTestId('signUpButton')
        fireEvent.click(signUpButton)
        // find evidence that in home page 
        const homePageHeader = await waitForElement(() => getByTestId('homeHeader') )
        expect(homePageHeader.innerHTML).toMatch('welcome to home page')
    }) 
    
} )
