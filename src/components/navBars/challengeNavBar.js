import React from 'react'
import '../authNavBar.css'
import NavLink from './navLink'

function ChallengeNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink destination='/' linkName='Current Challenges'/>
            <NavLink destination='/Challenges' linkName='Create'/>
            <NavLink destination='/PendingChallenges' linkName='Pending'/>
            <NavLink destination='/PastChallenges' linkName='Past'/>
            <NavLink destination='/CurrentFutureChallenges' linkName='Current-future'/>
        </div>
    )
}

export default ChallengeNavBar;