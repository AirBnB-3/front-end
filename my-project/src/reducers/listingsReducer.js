import { FETCH_DATA, UPDATE_LISTINGS, SET_ERROR } from "../actions";

const initialState = {
  listings: [],
  isFectiongData: false,
  error: ''
};

export const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        listings: []
      };
    case UPDATE_LISTINGS:
      return {
        ...state,
        listings: action.payload,
        isFetchingData: false
      }
    case SET_ERROR:
      return {
        ...state,
        isFectiongData: false,
        error: action.payload 
      }    
    default:
      return state;
  }
};