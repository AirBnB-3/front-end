import styled from 'styled-components'


const Form = styled.form`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 2px solid black;
`

const Button = styled.button`
    width:10%;
`

const Label = styled.label`
    margin: 2%;
`

const Error = styled.p`
    font-size:.8rem;
    color: red;
`



export {Form, Button, Label, Error }