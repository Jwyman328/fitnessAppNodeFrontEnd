import React from 'react'
import '../authNavBar.css'
import NavLink from './navLink'

function GoalNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink destination='/' linkName='Current Goals'/>
            <NavLink testid='navigateGoalPage' destination='/GoalPage' linkName='Create Goal'/>
            <NavLink destination='/CurrentFutureGoals' linkName='Current-future Goals'/>
            <NavLink destination='/PastGoals' linkName='Past Goals'/>
        </div>
    )
}

export default GoalNavBar;