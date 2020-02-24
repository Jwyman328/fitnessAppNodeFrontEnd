import React from 'react'
import moxios from 'moxios'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import ViewResults from '../pages/ViewResults'
import { StateProvider } from '../store/globalStore';

let element;
describe('mock point results fetch request success', () => {
    beforeEach(() => {
        moxios.install()
        moxios.stubRequest(`http://localhost:3001/allActivityPoints/mine/`)
        element = render(<StateProvider><ViewResults /></StateProvider>)
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('input point date shows', () => {
        const {getByTestId} = element;
        const dateElement = getByTestId('inputDate');
        expect(dateElement.innerHTML).toBe('a date')
    })
})