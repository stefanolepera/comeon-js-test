import axios from "axios";
import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  LOGOUT_SUCCESS,
  ADD_USERNAME, 
  PLAYER_DATA 
} from '../actions/types';

const loginStart = () => ({
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

const logoutSuccess = payload => ({
  type: LOGOUT_SUCCESS,
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

const networkErrorMessage = 'There is a nextwork problem. Please try again in few minutes';

export const login = postData => dispatch => {
  dispatch(loginStart());
  return axios.post("http://localhost:3001/login", postData, {
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
      err.response ? 
        dispatch(loginError(err.response.data.error)) : 
        window.alert(networkErrorMessage);
    });
};

export const logout = postData => dispatch => {
  return axios.post("http://localhost:3001/logout", postData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      dispatch(logoutSuccess(true));
    })
    .catch(err => {
      const errorMessage = (err.response && err.response.data.error) || networkErrorMessage;
      window.alert(errorMessage);
    });
};
