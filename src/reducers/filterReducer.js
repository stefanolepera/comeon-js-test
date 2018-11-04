const initialState = {
  categoryIndex: 0,
  gameName: ""
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        categoryIndex: action.payload
      };
    case "FILTER_BY_NAME":
      return {
        ...state,
        gameName: action.payload
      };
    default:
      return state;
  }
};
