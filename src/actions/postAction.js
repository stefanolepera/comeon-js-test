import axios from "axios";

export const login = postData => dispatch => {
  dispatch({
    type: "LOGIN_ERROR",
    payload: ''
  });
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
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: true
      });
      dispatch({
        type: "ADD_USERNAME",
        payload: postData.username
      });
      dispatch({
        type: "PLAYER_DATA",
        payload: res.data.player
      });
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_ERROR",
        payload: err.response.data.error
      });
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
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: false
      });
      dispatch({
        type: 'RESET_FILTERS'
      })
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const getAllGames = () => dispatch => {
  axios({
    method: "get",
    url: "http://localhost:3001/games"
  })
    .then(res => {
      dispatch({
        type: "GET_ALL_GAMES",
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const getAllCategories = () => dispatch => {
  axios({
    method: "get",
    url: "http://localhost:3001/categories"
  })
    .then(res => {
      dispatch({
        type: "GET_ALL_CATEGORIES",
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};
