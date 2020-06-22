import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';


import Login from './components/Login';
import Signup from './components/Signup';
import CreateListing from './components/CreateListing';
import UserProfile from './components/UserProfile';
import ListingCard from './components/ListingCard';
import PrivateRoute from './components/PrivateRoute';

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


function App() {

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [signupValues, setSignupValues] = useState(initialSignupValues)

  const onInputChange = evt => {
    const {name, value} = evt.target

    setLoginValues({
      ...loginValues,
      [name]: value
    })

    setSignupValues({
      ...signupValues,
      [name]: value
    })
  }

  const onSignup = e => {
    e.preventDefault()

    const newUser = {
      firstName: signupValues.firstName,
      lastName: signupValues.lastName,
      username: signupValues.username,
      password: signupValues.password,
      email: signupValues.email
    }

        axios
            .post('/createnewuser', {username: newUser.username , password:newUser.password })
            .then(res=>{
                console.log(res)
                // history.push('/login')
            })
            .catch(err=>{
                console.log(err)
            })
}


  const onLogin = e => {
    e.preventDefault()
    axios
        .post('/login', {username: loginValues.username , password: loginValues.password })
        .then(res=>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user id', res.data.userId)
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('user id')
            // history.push('/userprofile')
            console.log(token)
            console.log(userId)
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
  }

  return (
    <Router>
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

      <PrivateRoute exact path='/userprofile' component={UserProfile}/>
      <PrivateRoute exact path='/createlisting' component={CreateListing}/>
      <PrivateRoute path='/listingcard/:id' component={ListingCard}/>

        <Route path='/login'>
          <Login onSubmit={onLogin} values={loginValues}/>
        </Route>

        <Route path='/signup'>
          <Signup onSubmit={onSignup} values={signupValues}/>
        </Route>

        <Route path='/'>
          <div className='home'>
            <p>Our app will help you find the best price for your property, and guarantee an increase in guests!</p>
          </div>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
