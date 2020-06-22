import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);



