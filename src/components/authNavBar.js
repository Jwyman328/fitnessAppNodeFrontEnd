import React from 'react'
import './authNavBar.css'
import NavLink from './navLink'

function AuthNavBar(){
    return (
        <div className='navContainer'>
            <NavLink destination='/signup' linkName='Signup'/>
            <NavLink destination='/login' linkName='login'/>
            <NavLink destination='/howTo' linkName='How To'/>
            <NavLink destination='/Rules' linkName='Rules'/>
        </div>
    )
}

export default AuthNavBar;