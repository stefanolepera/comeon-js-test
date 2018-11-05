import { 
  LOGIN_SUCCESS, 
  LOGIN_START, 
  ADD_USERNAME, 
  LOGIN_ERROR 
} from '../actions/types.js';

const initialState = {
  username: "",
  isLoginSuccess: false,
  loginError: ""
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.payload
      };
    case LOGIN_START:
      return initialState;
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case ADD_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
};
