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

const initialDisabled= true
const initialUsers = []



function App() {

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [signupValues, setSignupValues] = useState(initialSignupValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [users, setUsers] = useState(initialUsers)

  const getUsers = () => {
    axios.get('https://seanmx96-airbnb-optimal-price.herokuapp.com/swagger-ui.html#/users')
    .then(res => {
      setUsers(res.data.data)
    })
    .catch(err => {
      debugger
    })
  }

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

  const postNewUser = newUser => {
    axios.post('https://seanmx96-airbnb-optimal-price.herokuapp.com/swagger-ui.html#/createnewuser', newUser)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(err => {
      debugger
    })
  }

  const onSignup = evt => {
    // evt.preventDefault()

    const newUser = {
      firstName: signupValues.firstName,
      lastName: signupValues.lastName,
      username: signupValues.username,
      password: signupValues.password,
      email: signupValues.email
    }

    postNewUser(newUser)
    setSignupValues(initialSignupValues)
  }

  const onLogin = evt => {
    // evt.preventDefault()
    setLoginValues(initialLoginValues)
  }


  useEffect(() => {
    formSchema.isValid(signupValues).then(valid => {
      setDisabled(!valid);
    });
  }, [signupValues])

  return (
    <div className="App">
      <nav className="App-header">
        <h1>AirBnb Price Finder</h1>
        <div className='nav-links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/login'>Login</Link>
          <Link className='link' to='/signup'>Sign Up</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/login'>
          <Login onSubmit={onLogin} onChange={onInputChange} values={loginValues}/>
        </Route>

        <Route path='/signup'>
          <Signup onSubmit={onSignup} onChange={onInputChange} values={signupValues} errors={formErrors} disabled={disabled}/>
        </Route>

        <Route path='/'>
          <div className='home'>
            <p>Our app will help you find the best price for your property, and guarantee an increase in guests!</p>
            {console.log(users)}
          </div>
        </Route>
      </Switch>





    </div>
  );
}

export default App;
