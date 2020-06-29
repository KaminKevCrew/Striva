import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/user_actions";
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser});
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users)
    default:
      return state;
  }
};

export default usersReducer;