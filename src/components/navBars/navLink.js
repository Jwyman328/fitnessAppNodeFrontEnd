import React from 'react';
import {withRouter} from 'react-router-dom'

function NavLink(props){
    const handleClick = () => {
        props.history.push(props.destination)
    }

    return (
        <div data-testid={props.testid} className='navLink' onClick={handleClick}>
            {props.linkName}
        </div>
    )
}

export default withRouter(NavLink);