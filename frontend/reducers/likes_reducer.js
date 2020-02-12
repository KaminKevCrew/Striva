import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_ALL_WORKOUTS } from '../actions/workout_actions'
import merge from 'lodash/merge';

export default (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return merge({}, action.likes)
    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.id]: action.like })
    case RECEIVE_ALL_WORKOUTS:
      return merge({}, action.workouts.likes)
    case REMOVE_LIKE:
      let newState = merge({}, state)
      delete newState[action.likeId]
      return newState
    default:
      return state;
  }
};