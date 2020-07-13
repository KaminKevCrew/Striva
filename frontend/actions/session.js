import { postUser, deleteSession, postSession } from '../utils/session.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
}); // Action Creator. Has a payload and type. (Is a POJO)

// const user = {
//   id: 1,
//   username: "",
//   email: ""
// } // Properties of a user in the payload.

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

// Thunk will helps keep state in check.

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
