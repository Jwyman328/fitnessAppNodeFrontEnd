import React from 'react'
import '../authNavBar.css'
import NavLink from './navLink'

function GoalNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink destination='/' linkName='Current Goals'/>
            <NavLink testid='navigateGoalPage' destination='/GoalPage' linkName='Create'/>
            <NavLink destination='/CurrentFutureGoals' linkName='Current-future '/>
            <NavLink destination='/PastGoals' linkName='Past'/>
        </div>
    )
}

export default GoalNavBar;