import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'
import Signup from './components/Signup'
import * as Yup from 'yup'
import formSchema from './validation/formSchema';

const initialLoginValues = {
  username:'',
  password:'',
}

const initialSignupValues = {
  firstName:'',
  lastName:'',
  username:'',
  password:'',
  email:'',
}

const initialErrors= {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
}



function App() {

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [signupValues, setSignupValues] = useState(initialSignupValues)
  const [formErrors, setFormErrors] = useState(initialErrors)

  const onInputChange = evt => {
    const {name, value} = evt.target

    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })

    setLoginValues({
      ...loginValues,
      [name]: value
    })

    setSignupValues({
      ...signupValues,
      [name]: value
    })
  }

  const onSignup = evt => {
    // evt.preventDefault()

    // const newUser = {
    //   firstName: signupValues.firstName,
    //   lastName: signupValues.lastName,
    //   username: signupValues.username,
    //   password: signupValues.password,
    //   email: signupValues.email
    // }

    setSignupValues(initialSignupValues)
  }

  const onLogin = evt => {
    // evt.preventDefault()
    setLoginValues(initialLoginValues)
  }

  return (
    <div className="App">
      <nav className="App-header">
        <h1>AirBnb Price Finder</h1>
        <div className='nav-links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/login'>Login</Link>
          <Link className='link' to='/signup'>Signup</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/login'>
          <Login onSubmit={onLogin} onChange={onInputChange} values={loginValues}/>
        </Route>

        <Route path='/signup'>
          <Signup onSubmit={onSignup} onChange={onInputChange} values={signupValues} errors={formErrors}/>
        </Route>

        <Route path='/'>
          <div className='home'>
            <p>Our app will help you find the best price for your property, and guarantee an increase in guests!</p>
          </div>
        </Route>
      </Switch>





    </div>
  );
}

export default App;
