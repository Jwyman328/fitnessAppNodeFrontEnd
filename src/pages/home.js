import React from 'react';
import {  Redirect, Link, withRouter } from "react-router-dom";

function homePage(props) {
    return (
        <div >
           <h1 data-testid='homeHeader'>
            welcome to home page
            </h1> 
        </div>  
    );
}

export default homePage;