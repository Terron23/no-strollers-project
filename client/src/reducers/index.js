import { combineReducers } from "redux";
import authReducers from "./authReducers.js";
import studioReducers from "./studioReducers.js";
import bookReducers from "./bookReducers.js";
import locationReducers from "./locationReducers.js";
import studiotypeReducers from "./studiotypeReducers";
import featStudioReducers from "./featStudioReducers";
import reviewReducers from "./reviewReducers"

export default combineReducers({
  auth: authReducers,
  studio: studioReducers,
  booked: bookReducers,
  locate: locationReducers,
  studiotype: studiotypeReducers,
  featStudios: featStudioReducers,
  reviews: reviewReducers,
});
