import React  from 'react';

/**
 * Return the input name and value in an action object form.
 * @param {String} name -- name of the input to be changed.
 * @param {*} value -- value of the entered value.
 */
function handleInputAction(name,value){
    return {type:'handleChange',name:name, value:value}
}

export default handleInputAction;