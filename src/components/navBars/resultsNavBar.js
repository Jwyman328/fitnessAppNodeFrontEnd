import React from 'react'
import '../authNavBar.css'
import NavLink from '../navBars/navLink'

function ResultsNavBar(){
    return (
        <div className='subNavContainer'>
            <NavLink destination='/' linkName='Graphs'/>
            <NavLink destination='/ViewResults' linkName='Data log'/>
        </div>
    )
}

export default ResultsNavBar;