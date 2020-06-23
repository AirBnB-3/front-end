import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from './utils/axiosWithAuth';
import * as Yup from 'yup';
import formSchema from './validation/formSchema';

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

const initialErrors= {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
}

const initialListingValues= {
  listingId:'',
  listingname:'',
  location:'',
  maxnumguests:'',
  minnumnights:'',
  numbeds:'',
  petsallowed:'',
}

const initialDisabled= true
const initialUsers = []
const initialListings = []


 function App() {

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [signupValues, setSignupValues] = useState(initialSignupValues)
  const history = useHistory();
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [users, setUsers] = useState(initialUsers)
  const [listingValues, setListingValues] = useState(initialListingValues)
  const [listings, setListings] = useState(initialListings)

  const getUsers = () => {
    axiosWithAuth()
    .get('https://seanmx96-airbnb-optimal-price.herokuapp.com/users/users')
    .then(res => {
      setUsers(res.data)
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

    setListingValues({
      ...listingValues,
      [name]: value
    })

    // console.log(signupValues)
  }

  const postNewUser = newUser => {
    axios.post('https://seanmx96-airbnb-optimal-price.herokuapp.com/createnewuser', newUser)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(err => {
      debugger
    })
  }

  const onSignup = evt => {
    evt.preventDefault()

    const newUser = {
      firstName: signupValues.firstName,
      lastName: signupValues.lastName,
      username: signupValues.username,
      password: signupValues.password,
      primaryemail: signupValues.email
    }

        axios
            .post('https://seanmx96-airbnb-optimal-price.herokuapp.com/createnewuser', newUser)
            .then(res=>{
                console.log(res.data)
                history.push('http://localhost:3000/login')
            })
            .catch(err=>{
                console.log(err)
            })
            // .finally(() => {
            //   getUsers()
            //   console.log(users)
            // })
  }
  

  const onLogin = e => {
    e.preventDefault()
    axios
        .post('https://seanmx96-airbnb-optimal-price.herokuapp.com/login', `grant_type=password&username=${loginValues.username}&password=${loginValues.password}`, {
          headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'

          }
        })
        .then(res=>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user id', res.data.userId)
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('user id')
            history.push('/userprofile')
            console.log(token)
            console.log(userId)
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
  }

  const onAddListing = e => {
    e.preventDefault()
    
    const newListing = {
      listingname: listingValues.listingname,
      location: listingValues.location,
      maxnumguests: listingValues.maxnumguests,
      minnumnights: listingValues.minnumnights,
      numbeds: listingValues.numbeds,
      petsallowed: listingValues.petsallowed
    }

    axios
      .post('https://seanmx96-airbnb-optimal-price.herokuapp.com/listings/user/:id/', newListing)
      .then(res => {
          console.log(res)
          history.push('http://localhost:3000/userprofile')
      })
      .catch(err =>{
        debugger
      })
  }

  useEffect(() => {
    formSchema.isValid(signupValues).then(valid => {
      setDisabled(!valid);
    });
  }, [signupValues])

  return (
    <Router>
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

      <PrivateRoute exact path='/userprofile' component={UserProfile}/>
      {/* <PrivateRoute exact path='/createlisting' component={CreateListing}/>
      <PrivateRoute path='/listingcard/:id' component={ListingCard}/> */}

        <Route path='/createlisting'>
          <CreateListing onChange={onInputChange} values={listingValues}/>
        </Route>

        {/* <Route path='/userprofile'>
          <UserProfile />
        </Route> */}

        <Route exact path='/login'>
          <Login onSubmit={onLogin} onChange={onInputChange} values={loginValues}/>
        </Route>

        <Route exact path='/signup'>
          <Signup onSubmit={onSignup} onChange={onInputChange} values={signupValues} errors={formErrors} disabled={disabled}/>
          {/* <CreateListing onChange={onAddListing} values={listingValues}/> */}
        </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;