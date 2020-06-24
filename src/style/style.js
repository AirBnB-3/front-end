import styled from 'styled-components'


const Form = styled.form`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:4px solid black;
    background-color:lightgray;
    padding: 0% 0% 3% 0%;
    margin-top: 3%;
    border-radius: 20px;
`

const Button = styled.button`
    width:10%;
    color: #FF5A5F;
    border: 2px solid #FF5A5F;
    border-radius:20px;
`

const Label = styled.label`
    margin: 2%;
`

const Error = styled.p`
    font-size:.8rem;
    color: red;
`



export {Form, Button, Label, Error }