import React from 'react'
import '../authNavBar.css'
import NavLink from './navLink'

//subNavContainer
function GoalNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink testid='navigateGoalPage' destination='/GoalPage' linkName='Create'/>
            <NavLink destination='/CurrentFutureGoals' linkName='Current-future '/>
            <NavLink destination='/PastGoals' linkName='Past'/>
        </div>
    )
}

export default GoalNavBar;