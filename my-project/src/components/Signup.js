import React, {useState} from 'react'



export default function Login(props) {



    return(
        <form>
            <div>
            <h3>Sign Up:</h3>
            </div>
            
            <label>First Name:&nbsp;
                <input
                    type='text'
                    name='firstName'
                />
            </label>

            <label>Last Name:&nbsp;
                <input
                    type='text'
                    name='lastName'
                />
            </label>

            <label>Email:&nbsp;
                <input
                    type='email'
                    name='email'
                />
            </label>

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