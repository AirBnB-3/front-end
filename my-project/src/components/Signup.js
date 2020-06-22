import React, {useState} from 'react'
import styled from 'styled-components'
import {Form, Button, Label, Error} from '../style/style'


export default function Signup(props) {

    const {onSubmit, values, onChange, errors} = props

    return(
        <Form onSubmit={onSubmit}>
            <div>
            <h3>Sign Up:</h3>
            </div>
            
            <Label>First Name:&nbsp;
                <input
                    type='text'
                    name='firstName'
                    onChange={onChange}
                />
            </Label>
            <Error>{errors.firstName}</Error>

            <Label>Last Name:&nbsp;
                <input
                    type='text'
                    name='lastName'
                    onChange={onChange}
                />
            </Label>
            <Error>{errors.lastName}</Error>

            <Label>Email:&nbsp;
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                />
            </Label>
            <Error>{errors.email}</Error>

            <Label>Username:&nbsp;
                <input
                    type='text'
                    name='username'
                    onChange={onChange}
                />
            </Label>
            <Error>{errors.username}</Error>

            <Label>Password:&nbsp;
                <input 
                    type='text'
                    name='password'
                    onChange={onChange}
                />
            </Label>
            <Error>{errors.password}</Error>


            <Button id='submitBtn'>Sign Up</Button>
        </Form>
    )
}