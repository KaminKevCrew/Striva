import { combineReducers } from 'redux';
import usersReducer from './users';
import workoutsReducer from './workouts'

export default combineReducers({
  users: usersReducer,
  workouts: workoutsReducer,
});