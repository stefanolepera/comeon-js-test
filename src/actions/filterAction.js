export const filterByCategory = index => dispatch => {
  dispatch({
    type: "FILTER_BY_CATEGORY",
    payload: index
  });
};

export const filterByName = name => dispatch => {
  dispatch({
    type: "FILTER_BY_NAME",
    payload: name
  });
};
