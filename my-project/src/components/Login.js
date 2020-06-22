import React, {useState} from 'react'
import styled from 'styled-components'
import {Form, Button, Label} from '../style/style'


export default function Login(props) {
    const {onSubmit, values, onChange} = props


    return(
        <Form onSubmit={onSubmit}>
            <div>
            <h3>Login:</h3>
            </div>
            
            <Label>Username:&nbsp;
                <input
                    type='text'
                    name='username'
                    onChange={onChange}
                />
            </Label>

            <Label>Password:&nbsp;
                <input 
                    type='text'
                    name='password'
                    onChange={onChange}
                />
            </Label>


            <Button id='submitBtn'>Login</Button>
        </Form>
    )
}