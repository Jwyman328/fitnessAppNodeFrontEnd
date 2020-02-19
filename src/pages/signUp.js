import React, { useReducer } from 'react';

function SignUpPage(){
    console.log('running')
    const signUpInitialState = {
        email:'',
        password:'',
        password2:'',
        firstName:'',
        lastName:'',
        isLoading:false,
        isError:false,
        isLoggedIn:false,
        token:''
    }
    const [state, dispatch] = useReducer(signUpReducer, signUpInitialState)

    return(
        <div>
            sign up page
            <form >
                <label>
                    email:
                    <input type='text' value={}  />
                </label>

            </form>
        </div>
    )
}

export default SignUpPage;