import React  from 'react';

/**
 * 
 * @param {String} name -- name of the input to be changed.
 * @param {*} value -- value of the entered value.
 */
function handleInputAction(name,value){
    return {type:'handleChange',name:name, value:value}
}

export default handleInputAction;