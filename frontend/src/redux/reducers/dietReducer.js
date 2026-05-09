import * as types from '../types';

const initialState = {
  meals: [],
  dailySummary: null,
  isLoading: false,
  error: null,
};

const dietReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MEALS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.FETCH_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
      };
    case types.FETCH_MEALS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.ADD_MEAL:
      return {
        ...state,
        meals: [...state.meals, action.payload],
      };
    default:
      return state;
  }
};

export default dietReducer;
