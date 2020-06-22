import React, {useState} from 'react'
import styled from 'styled-components'
import {Form, Button, Label} from '../style/style'


export default function Signup(props) {

    const {onSubmit, values} = props

    return(
        <Form onSubmit={onSubmit}>
            <div>
            <h3>Sign Up:</h3>
            </div>
            
            <Label>First Name:&nbsp;
                <input
                    type='text'
                    name='firstName'
                />
            </Label>

            <Label>Last Name:&nbsp;
                <input
                    type='text'
                    name='lastName'
                />
            </Label>

            <Label>Email:&nbsp;
                <input
                    type='email'
                    name='email'
                />
            </Label>

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


            <Button id='submitBtn'>Sign Up</Button>
        </Form>
    )
}