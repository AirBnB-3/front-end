import axios from 'axios';

export const FETCH_DATA = 'GET_DATA';
export const UPDATE_LISTINGS = 'UPDATE_LISTINGS';
export const SET_ERROR ='SET_ERROR';


export const getData = () => dispatch => {
  dispatch({type: FETCH_DATA});
  axios.get('https://seanmx96-airbnb-optimal-price.herokuapp.com/listings/listings')
    .then (res => {
      console.log(res);
      dispatch({type: UPDATE_LISTINGS, payload: res.data})
      })
    .catch(err => {
      console.error('error fetching data from api. err: ', err);
    dispatch({type: SET_ERROR, payload: 'error fetching data from api'})
    })
  };
