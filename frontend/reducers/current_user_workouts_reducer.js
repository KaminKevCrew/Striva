import { RECEIVE_CURRENT_USER_WORKOUTS } from '../actions/workout_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_WORKOUTS:
      return merge({}, state, action.workouts);
    default:
      return state;
  }
}