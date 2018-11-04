import axios from "axios";
import { GET_ALL_GAMES, GET_ALL_CATEGORIES } from '../actions/types';

const getGames = payload => ({
    type: GET_ALL_GAMES,
    payload
  });
  
  const getCategories = payload => ({
      type: GET_ALL_CATEGORIES,
      payload
  });

export const getAllGames = () => dispatch => {
    axios({
      method: "get",
      url: "http://localhost:3001/games"
    })
      .then(res => {
          dispatch(getGames(res.data));
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
          dispatch(getCategories(res.data));
      })
      .catch(err => {
        console.log(err.response);
      });
  };