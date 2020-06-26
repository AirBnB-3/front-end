import styled from 'styled-components'
import img from './image.jpg'


const Form = styled.form`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border:4px solid white;
    padding: 0% 0% 3% 0%;
    margin-top: 3%;
    border-radius: 20px;
    color: white;
`

const Button = styled.button`
    width:15%;
    color: #FF5A5F;
    border: 2px solid #FF5A5F;
    border-radius:20px;
`

const Label = styled.label`
    margin: 2%;
    background: rgba(0, 0, 0, 0.8);
    padding: 1%;
    border-radius:20px;
    width:40%;
    font-size: 1.2rem;
    border: 2px solid white;
`

const Error = styled.p`
    font-size:.8rem;
    color: red;
    background: rgba(0, 0, 0, 0.8);
`

const FormContainer= styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction: column;
    color:white;
`
const Card=styled.div`
    width: 50%;
    height: 100%;
    margin: 5%;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    border: 2px solid white;
    
`


export {Form, Button, Label, Error, FormContainer, Card}