import React from 'react'
import moxios from 'moxios'
import { render, fireEvent, waitForElement, wait } from '@testing-library/react'


const loginUserForTest = async (getByTestId) => {


        const loginPage = await waitForElement (() => getByTestId('navigateToLogin') ) 
        fireEvent.click(loginPage)

        const passwordInput = await waitForElement(() =>  getByTestId('passwordInput') )
        fireEvent.change(passwordInput,{target: {value: 'myExistingPassword'}})
        //enter email
        const emailInput = await waitForElement(() =>  getByTestId('emailInput'))
        fireEvent.change(emailInput,{target: {value: 'testEmail@gmail.com'}})
        //submit loginData
        const submitButton = await waitForElement(() =>  getByTestId('submitButton'))
        fireEvent.click(submitButton)
}

export default loginUserForTest;