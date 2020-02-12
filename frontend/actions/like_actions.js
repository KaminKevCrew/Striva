import * as LikeUtil from '../util/like_api_util'

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"
export const REMOVE_LIKE = "REMOVE_LIKE"

const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
})

const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes
})

const removeLike = (likeId) => {
  return ({
    type: REMOVE_LIKE,
    likeId
  })
}

export const fetchLike = (likeId) => dispatch =>
  LikeUtil.fetchLike(likeId).then((like) => dispatch(receiveLike(like)))

export const createLike = (like) => dispatch =>
  LikeUtil.createLike(like).then((like) => dispatch(receiveLike(like)))
    .fail(like =>
      dispatch(removeLike(like.responseJSON[0])))

export const fetchAllLikes = (id) => dispatch =>
  LikeUtil.fetchAllLikes(id).then((likes) => dispatch(receiveAllLikes(likes)))

