import React, {useReducer} from 'react';
import loginReducer from '../reducers/loginReducer'
import handleInputAction from "../actions/handleInput";

const initialState = {
    email: '',
    password:'',
    token:'',
    isLoading:false,
    isLoggedIn:false,
    isError:false,
}
function LoginPage(props) {
    //set up a reducer
    // [state,dispatch] = useReducer(reducer,initialState)
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const {email,password,token,isLoading,isLoggedIn,isError} = state;
    
    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        dispatch(handleInputAction(e.target.name,  e.target.value))
    }
    return (
        <div>
            <form>
                <label>
                    email:
                    <input type='text' name='email' onChange={handleChange} value={email} data-testid='emailInput' />
                </label>
            </form>
        </div>
    );
}

export default LoginPage;