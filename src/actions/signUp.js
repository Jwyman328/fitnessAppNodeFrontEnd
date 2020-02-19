
// an action is just a function that returns an object 
// put up my mongo db server to heroku.

import React from 'react';
import axios from 'axios'
async function signUpAction(){
    try{
        // dispatch action of loading?
        const response = await axios.post('http://enigmatic-springs-36428.herokuapp.com/user/create/')
        
    }
}
