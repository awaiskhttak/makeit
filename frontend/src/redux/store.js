import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import workoutReducer from './reducers/workoutReducer';
import dietReducer from './reducers/dietReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  workouts: workoutReducer,
  diet: dietReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
