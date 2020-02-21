import React from 'react'
import moxios from 'moxios'
import GoalsPage from '../pages/GoalsPage'
//set up global context for tests 
import { StateProvider } from '../store/globalStore';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react'


let element;
let today;
describe('goal inputs', () => {
    beforeEach(() => {
        element = render(<StateProvider><GoalsPage /></StateProvider>)
        today = new Date().toISOString().split('T')[0]

    })

    test('start date starts with todays date',()=>{
        const {getByTestId} =element;
        const startDate = getByTestId('startDate')
        expect(startDate.value).toBe(today)
    })

    test('goal start date can be changed', () => {
        const {getByTestId} =element;
        const startDate = getByTestId('startDate')
        fireEvent.change(startDate,{target: {value: '2020-11-25'}}) 
        expect(startDate.value).toBe('2020-11-25')
    })
    test('goal end date can be changed', () => {
        const {getByTestId} =element;
        const endDate = getByTestId('goalEndDate')
        fireEvent.change(endDate,{target: {value: '2020-11-25'}}) 
        expect(endDate.value).toBe('2020-11-25')
    })

    test('daily goal value start as false', ()=>{
        const {getByTestId} = element;
        const dailyGoal = getByTestId('dailyGoal');
        expect(dailyGoal.checked).toBe(false)
    })

    test('can change daily goal to true', async() => {
        const {getByTestId} = element;
        const dailyGoal = getByTestId('dailyGoal');
        fireEvent.click(dailyGoal)
        //expect(dailyGoal.value).toBe('true')
        //const dailyGoalValue = await waitForElement(() => expect(dailyGoal.checked).toBe(true))
        expect(dailyGoal.checked).toBe(true)
    })
    test('point goal starts at 0', () =>{
        const {getByTestId} = element;
        const pointGoal = getByTestId('pointGoal');
        expect(pointGoal.value).toEqual("50")
    })

})

describe('mock a success post request', ()=>{

    beforeEach(() => {
        element = render(<StateProvider><GoalsPage /></StateProvider>)

        moxios.install()
        moxios.stubRequest('http://localhost:3001/totalPointGoal/',{ status: 200})

    })

    afterEach(() => {
        moxios.uninstall()
    })
    test('submit goal shows success msg', async() => {
        const {getByTestId} = element;
        const submitButton = getByTestId('submitButton')
        fireEvent.click(submitButton)
        //const successMSg = await waitForElement(() => expect(getByTestId('successMsg').innerHTML).toBe('Goal created successfully'))
        const successMsg = await waitForElement(() => getByTestId('successMsg'))
        expect(successMsg.innerHTML).toBe('Goal created successfully')
    })

})

describe('error msg shows on bad request', () => {
    beforeEach(() => {
        element = render(<StateProvider><GoalsPage /></StateProvider>)

        moxios.install()
        moxios.stubRequest('http://localhost:3001/totalPointGoal/',{ status: 400})
    })

    afterEach(() => {
        moxios.uninstall()
    })
    test('error message shows on bad request', async() => {
        const {getByTestId} = element;
        const submitButton = getByTestId('submitButton')
        fireEvent.click(submitButton)
        const errorMsg = await waitForElement(() => getByTestId('errorMsg'))
        expect(errorMsg.innerHTML).toBe('Error creating goal, please try again')
    })
})