import React from 'react';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react'
import moxios from 'moxios';
import LoginPage from '../pages/login';
import renderWithRouter from './setUpTests'
import App from '../App'

let element;
describe('test login inputs', () => {
    beforeEach(() => {
        // set up loginPage element 
        element = render(<LoginPage />);
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
})

