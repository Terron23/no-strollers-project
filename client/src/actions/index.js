import axios from "axios";
import {
  FETCH_USER,
  FETCH_STUDIO,
  FETCH_AVAILIBILITY,
  FETCH_BOOKING,
  FETCH_LOCATION,
  FETCH_STUDIOTYPES,
  FETCH_SINGLE_STUDIOS,
  FETCH_FEATURE_STUDIOS,
  FETCH_STUDIO_REVIEWS,
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/v2/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchStudio = (page=0, limit=20, filterParam='&studioType=&date=&state=') => async dispatch => {
  const res = await axios.get(`/api/v2/studio-listing?limit=${limit}&page=${page}${filterParam}`);
  dispatch({ type: FETCH_STUDIO, payload: res.data });
};

export const fetchSingleStudio = (id) => async dispatch => {
  const res = await axios.get(`/api/v2/single-studio-listing/${id}`);
  dispatch({ type: FETCH_SINGLE_STUDIOS, payload: res.data });
};

export const fetchAvailibility = () => async dispatch => {
  const res = await axios.get("/api/availibility");
  dispatch({ type: FETCH_AVAILIBILITY, payload: res.data });
};

export const fetchBookings = () => async dispatch => {
  const res = await axios.get("/api/v2/studios-booked");
  dispatch({ type: FETCH_BOOKING, payload: res.data });
};

export const fetchLocation = () => async dispatch => {
  const res = await axios.get("https://json.geoiplookup.io");
  dispatch({ type: FETCH_LOCATION, payload: res.data });
};

export const fetchStudioType = () => async dispatch => {
  const res = await axios.get("/api/v2/studio-type");
  dispatch({ type: FETCH_STUDIOTYPES, payload: res.data });
};

export const fetchFeatureStudios = () => async dispatch => {
  const res = await axios.get(`/api/v2/feature-studios`);
  dispatch({ type: FETCH_FEATURE_STUDIOS, payload: res.data });
};

export const fetchStudioReviews = (id=0) => async dispatch => {
  const res = await axios.get(`/api/v2/reviews/${id}`);
  dispatch({ type: FETCH_STUDIO_REVIEWS, payload: res.data });
};
