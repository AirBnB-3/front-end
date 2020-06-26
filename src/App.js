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
  roomtype: '',
  neighbourhood: '',
  accomodates:'',
  minnum_nights:'',

}

const initialDisabled= false
const initialListings = []


 function App() {

  const [loginValues, setLoginValues] = useState(initialLoginValues)
  const [signupValues, setSignupValues] = useState(initialSignupValues)
  const history = useHistory();
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [userInfo, setUserInfo] = useState({})
  const [listingValues, setListingValues] = useState(initialListingValues)
  const [listings, setListings] = useState(initialListings)

  const getUserInfo = () => {
    axiosWithAuth()
    // .get('https://reqres.in/api/users/2')
    .get('https://seanmx96-airbnb-optimal-price.herokuapp.com/users/getuserinfo')
    .then(res => {
      // setUserInfo(res.data.data)
      setUserInfo(res.data)
    })
    .catch(err => {
      debugger
    })
    // .finally(() =>{
    //   console.log(userInfo)
    // })
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

  // const postNewUser = newUser => {
  //   axios.post('https://seanmx96-airbnb-optimal-price.herokuapp.com/createnewuser', newUser)
  //   .then(res => {
  //     setUsers([...users, res.data])
  //   })
  //   .catch(err => {
  //     debugger
  //   })
  // }

  const onSignup = evt => {
    evt.preventDefault()
    const newUser = {
      firstname: signupValues.firstName,
      lastname: signupValues.lastName,
      username: signupValues.username,
      password: signupValues.password,
      primaryemail: signupValues.email,

    }

        axios
            .post('https://seanmx96-airbnb-optimal-price.herokuapp.com/createnewuser', newUser)
            .then(res=>{
                console.log(res.data)
                history.push('/login')
                setSignupValues(initialSignupValues)
            })

            // .then(() => {
            //   axios
            //   .post('https://reqres.in/api/users/3', newUser)
            //   .finally(() =>{
            //     axios
            //     .
            //   })
            // })
            .catch(err=>{
                console.log(err)
            })
  }
  

  const onLogin = e => {
    e.preventDefault()
    axiosWithAuth()
        .post('https://seanmx96-airbnb-optimal-price.herokuapp.com/login', `grant_type=password&username=${loginValues.username}&password=${loginValues.password}`, {
          headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'

          }
        })
        .then(res=>{
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('user id', res.data.userId)
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('user id')
            history.push('/userprofile')
            console.log(token)
            console.log(userId)
            console.log(res)
            setLoginValues(initialLoginValues)
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(() => {
          getUserInfo()
        })
  }

  const onAddListing = e => {
    e.preventDefault()
    
    const newListing = {
      
      roomtype: listingValues.roomtype,
      neighbourhood: listingValues.neighbourhood,
      accomodates: listingValues.accomodates,
      minnum_nights: listingValues.minnum_nights,
    }

    axios
      .post('https://seanmx96-airbnb-optimal-price.herokuapp.com/listings/user/:id/', newListing)
      .then(res => {
          console.log(res)
          setListings(res.data)
          // history.push('http://localhost:3000/userprofile')
      })
      .catch(err =>{
        debugger
      })
      .finally(() => {
        console.log(listings)
      })
  }

  // useEffect(() => {
  //   formSchema.isValid(signupValues).then(valid => {
  //     setDisabled(!valid);
  //   });
  // }, [signupValues])

  // useEffect(() => {
  //   axios
  //     .get('https://reqres.in/api/users/')
  //     .then(res => {
  //       console.log(res.data)
  //     })
  // }, [signupValues])

  return (
  <div className="App">
      <nav className="App-header">
        <h1>AirBnb Price Optimization</h1>
        <div className='nav-links'>
          <a className='link' href='https://airbnb-3.github.io/user-interface-zave/'>About</a>
          <Link className='link' to='/login'>Login</Link>
          <Link className='link' to='/signup'>Sign Up</Link>
        </div>
      </nav>
      <div className='body'>
      <Switch>

      <PrivateRoute exact path='/userprofile'>
        <UserProfile onChange={onInputChange} values={listingValues} userInfo={userInfo}/>
      </PrivateRoute>
      <PrivateRoute exact path='/listingcard' component={ListingCard}/>
      {/* <PrivateRoute>
          <CreateListing path='/createlisting' onSubmit={onAddListing} values={listingValues} onChange={onInputChange}/>
      </PrivateRoute> */}
   
      {/* <PrivateRoute exact path='/createlisting' component={CreateListing}/>
      <PrivateRoute path='/listingcard/:id' component={ListingCard}/> */}

        {/* <PrivateRoute exact path='/createlisting'>
          <CreateListing onChange={onInputChange} values={listingValues}/>
        </Route> */}

        <Route exact path='/login'>
          <Login onSubmit={onLogin} onChange={onInputChange} values={loginValues}/>
        </Route>

        <Route exact path='/signup'>
          <Signup onSubmit={onSignup} onChange={onInputChange} values={signupValues} errors={formErrors} disabled={disabled}/>
          {/* <CreateListing onChange={onAddListing} values={listingValues}/> */}
        </Route>

        <Route exact path='/'>
          <Login onSubmit={onLogin} onChange={onInputChange} values={loginValues}/>
        </Route>

      </Switch>

    </div>
  </div>

  );
}

export default App;