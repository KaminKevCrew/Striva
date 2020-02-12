import { RECEIVE_ALL_WORKOUTS, RECEIVE_WORKOUT } from '../actions/workout_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_WORKOUTS:
      return merge({}, state, action.workouts.workouts);
    case RECEIVE_WORKOUT:
      return merge({}, state, { [action.workout.id]: action.workout })
    default:
      return state;
  }
}