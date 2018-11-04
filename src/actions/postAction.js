import axios from "axios";
import { LOGIN_ERROR, LOGIN_SUCCESS, ADD_USERNAME, PLAYER_DATA, RESET_FILTERS } from '../actions/types';

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
  dispatch(loginError(''));
  axios({
    method: "post",
    url: "http://localhost:3001/login",
    data: postData,
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
  axios({
    method: "post",
    url: "http://localhost:3001/logout",
    data: postData,
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
