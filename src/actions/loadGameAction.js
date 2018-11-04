import { LOAD_GAME, BACK_TO_LOBBY } from '../actions/types';

export const loadGame = code => dispatch => {
  dispatch({
    type: LOAD_GAME,
    payload: code
  });
};

export const backToLobby = () => dispatch => {
  dispatch({
    type: BACK_TO_LOBBY
  });
};
