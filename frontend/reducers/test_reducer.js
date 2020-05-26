import { RECEIVE_USER } from "../actions/test_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.User.id]: action.User });
    default:
      return state;
  }
};

export default usersReducer;