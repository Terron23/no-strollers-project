import {
  FETCH_STUDIO, FETCH_SINGLE_STUDIOS
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STUDIO:
      return action.payload || false;
      case FETCH_SINGLE_STUDIOS:
        return action.payload || false;
    default:
      return state;
  }
}
