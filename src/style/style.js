import styled from 'styled-components'
import img from './image.jpg'


const Form = styled.form`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:4px solid black;
    padding: 0% 0% 3% 0%;
    margin-top: 3%;
    border-radius: 20px;
    color: white;
`

const Button = styled.button`
    width:10%;
    color: #FF5A5F;
    border: 2px solid #FF5A5F;
    border-radius:20px;
`

const Label = styled.label`
    margin: 2%;
    background: rgba(0, 0, 0, 0.8);
    padding: 1%;
    border-radius:20px;
`

const Error = styled.p`
    font-size:.8rem;
    color: red;
`



export {Form, Button, Label, Error }