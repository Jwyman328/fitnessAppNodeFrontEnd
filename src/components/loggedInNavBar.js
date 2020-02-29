import React from 'react'
import './authNavBar.css'
import NavLink from './navBars/navLink'
import LogOutButton from './logOutButton'

function LoggedInNavBar(){
    return (
        <div className='navContainer'>
            <NavLink destination='/home' linkName='Home'/>
            <NavLink destination='/inputPoints' linkName='Input Points'/>
            <NavLink destination='/GoalPage' linkName='Goals'/>
            <NavLink destination='/Challenges' linkName='Challenges'/>
            <NavLink destination='/viewResults' linkName='Results'/>
            <NavLink destination='/howTo' linkName='How To'/>
            <NavLink destination='/Rules' linkName='Rules'/>
            <LogOutButton  linkName='Logout'/>
        </div>
    )
}

export default (LoggedInNavBar);