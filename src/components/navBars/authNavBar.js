import React from 'react'
import '../authNavBar.css'
import NavLink from './navLink'

function AuthNavBar(){
    return (
        <div className='navContainer'>
            <NavLink testid='navigateToSignUp' destination='/signup' linkName='Signup'/>
            <NavLink testid='navigateToLogin' destination='/login' linkName='login'/>
            <NavLink testid='navigateToHowTo' destination='/howTo' linkName='How To'/>
            <NavLink testid='navigateToRules' destination='/Rules' linkName='Rules'/>
        </div>
    )
}

export default AuthNavBar;