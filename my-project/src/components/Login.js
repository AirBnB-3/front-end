import React, {useState} from 'react'



export default function Login(props) {



    return(
        <form>
            <div>
            <h3>Login:</h3>
            </div>
            
            <label>Username:&nbsp;
                <input
                    type='text'
                    name='username'
                />
            </label>

            <label>Password:&nbsp;
                <input 
                    type='text'
                    name='password'
                />
            </label>


            <button id='submitBtn'>Login</button>
        </form>
    )
}