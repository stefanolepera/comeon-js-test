export const loadGame = code => dispatch => {
  dispatch({
    type: "LOAD_GAME",
    payload: code
  });
};

export const backToLobby = () => dispatch => {
  dispatch({
    type: "BACK_TO_LOBBY",
    payload: ""
  });
};
