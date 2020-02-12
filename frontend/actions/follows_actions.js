import * as UsersUtil from '../util/user_api_util'

export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';

const receiveFollowers = (follows) => {
  return ({
    type: RECEIVE_FOLLOWERS,
    followers: follows.follows.followers
  })
}

const receiveFollowing = (follows) => ({
  type: RECEIVE_FOLLOWING,
  following: follows.follows.following
})


export const fetchFollowers = () => (dispatch) =>
  UsersUtil.fetchAllFollows().then((follows) => dispatch(receiveFollowers(follows)))

export const fetchFollowing = () => (dispatch) =>
  UsersUtil.fetchAllFollows().then((follows) => dispatch(receiveFollowing(follows)))