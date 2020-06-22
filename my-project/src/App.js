import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <h1>AirBnb Price Finder</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          {/* <Signup /> */}
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
