import * as types from '../types';

const initialState = {
  workouts: [],
  currentSession: null,
  isLoading: false,
  error: null,
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WORKOUTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.FETCH_WORKOUTS_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
        isLoading: false,
      };
    case types.FETCH_WORKOUTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.START_WORKOUT:
      return {
        ...state,
        currentSession: action.payload,
      };
    case types.END_WORKOUT:
      return {
        ...state,
        currentSession: null,
      };
    default:
      return state;
  }
};

export default workoutReducer;
