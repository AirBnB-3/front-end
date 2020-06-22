import React, {useState} from 'react'
import styled from 'styled-components'
import {Form, Button, Label} from '../style/style'


// const Form = styled.form`
//     width:60%;
//     display:flex;
//     flex-direction:column;
//     align-items:center;
// `

// const Button = styled.button`
//     width:10%;
//     display:flex;
// `

export default function Login(props) {
    const {onSubmit, values} = props


    return(
        <Form onSubmit={onSubmit}>
            <div>
            <h3>Login:</h3>
            </div>
            
            <Label>Username:&nbsp;
                <input
                    type='text'
                    name='username'
                />
            </Label>

            <Label>Password:&nbsp;
                <input 
                    type='text'
                    name='password'
                />
            </Label>


            <Button id='submitBtn'>Login</Button>
        </Form>
    )
}