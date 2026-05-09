import * as types from '../types';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    case types.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
