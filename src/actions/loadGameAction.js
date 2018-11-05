import { LOAD_GAME, BACK_TO_LOBBY } from '../actions/types';

export const loadGame = payload => ({
  type: LOAD_GAME,
  payload
});

export const backToLobby = payload => ({
  type: BACK_TO_LOBBY,
  payload
});
