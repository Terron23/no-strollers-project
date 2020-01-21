import {
    FETCH_FEATURE_STUDIOS,
  } from "../actions/types";
  
  export default function(state = [], action) {
    switch (action.type) {
      case FETCH_FEATURE_STUDIOS:
        return action.payload || false;
      default:
        return state;
    }
  }
  