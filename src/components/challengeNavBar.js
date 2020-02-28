import React from 'react'
import './authNavBar.css'
import NavLink from './navLink'

function ChallengeNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink destination='/' linkName='Current Challenges'/>
            <NavLink destination='/Challenges' linkName='Create Challenge'/>
            <NavLink destination='/PendingChallenges' linkName='Pending Invitations'/>
            <NavLink destination='/PastChallenges' linkName='Past Challenges'/>
            <NavLink destination='/CurrentFutureChallenges' linkName='Current-future Challenges'/>
        </div>
    )
}

export default ChallengeNavBar;