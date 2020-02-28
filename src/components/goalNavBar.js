import React from 'react'
import './authNavBar.css'
import NavLink from './navLink'

function GoalNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink destination='/' linkName='Current Goals'/>
            <NavLink destination='/GoalPage' linkName='Create Goal'/>
            <NavLink destination='/CurrentFutureChallenges' linkName='Current-future Goals'/>
            <NavLink destination='/PastChallenges' linkName='Past Challenges'/>
        </div>
    )
}

export default GoalNavBar;