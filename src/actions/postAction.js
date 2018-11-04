import axios from "axios";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, ADD_USERNAME, PLAYER_DATA, RESET_FILTERS } from '../actions/types';

const loginStart = payload => ({
  type: LOGIN_START
});

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

const loginError = payload => ({
    type: LOGIN_ERROR,
    payload
});

const addUserName = payload => ({
  type: ADD_USERNAME,
  payload
});

const playerData = payload => ({
  type: PLAYER_DATA,
  payload
});

const resetFilter = () => ({
  type: RESET_FILTERS
});

export const login = postData => dispatch => {
  dispatch(loginStart());
  axios.post("http://localhost:3001/login", postData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      dispatch(loginSuccess(true));
      dispatch(addUserName(postData.username));
      dispatch(playerData(res.data.player));
    })
    .catch(err => {
      dispatch(loginError(err.response.data.error));
    });
};

export const logout = postData => dispatch => {
  axios.post("http://localhost:3001/logout", postData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      dispatch(loginSuccess(false));
      dispatch(resetFilter());
    })
    .catch(err => {
      console.log(err.response);
    });
};
