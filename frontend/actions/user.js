import { fetchUser } from "../utils/user"
export const RECEIVE_USER = "RECEIVE_USER"


const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
}); // Action Creator. Has a payload and type. (Is a POJO)

export const fetchUserData = userId => dispatch => fetchUser(userId)
  .then(user => dispatch(receiveUser(user)));

