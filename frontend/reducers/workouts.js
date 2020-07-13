import { 
  RECEIVE_WORKOUT, 
  RECEIVE_CURRENT_USER_WORKOUTS, 
  RECEIVER_ALL_WORKOUTS,
  RECEIVE_ALL_WORKOUTS
 } from '../actions/workout.js'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKOUT:
      const workout = action.workout;
      return Object.assign({}, { workout });
    case RECEIVE_CURRENT_USER_WORKOUTS:
      const userWorkouts = action.workouts;
      return Object.assign({}, { userWorkouts });
    case RECEIVE_ALL_WORKOUTS:
      const workouts = action.workouts;
      return Object.assign({}, { workouts });
    default:
      return state;
  }
};