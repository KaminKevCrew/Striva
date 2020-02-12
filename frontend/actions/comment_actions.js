import * as CommentUtil from '../util/comment_api_util'

export const RECEIVE_WORKOUT_COMMENTS = 'RECEIVE_WORKOUT_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveWorkoutComments = (comments) => ({
  type: RECEIVE_WORKOUT_COMMENTS,
  comments
})

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

const deleteComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
})



export const fetchWorkoutComments = (workoutId) => (dispatch) =>
  CommentUtil.fetchWorkoutComments(workoutId).then((comments) => dispatch(receiveWorkoutComments(comments)))


export const createComment = (comment) => (dispatch) =>
  CommentUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)))

export const removeComment = (commentId) => (dispatch) =>
  CommentUtil.deleteComment(commentId).then(comment => dispatch(deleteComment(commentId)))