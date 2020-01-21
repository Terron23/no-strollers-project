import {
   FETCH_STUDIO_REVIEWS
  } from "../actions/types";
  
  export default function(state = [], action) {
    switch (action.type) {
      case FETCH_STUDIO_REVIEWS:
        return action.payload || false;
      default:
        return state;
    }
  }
  