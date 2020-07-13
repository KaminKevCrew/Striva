import { RECEIVE_USER } from "../actions/user"

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user
      return Object.assign({}, { user });
    default:
      return state;
  }
};