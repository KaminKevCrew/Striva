export const fetchWorkoutComments = (workoutId) => (
  $.ajax({
    url: `api/workouts/${workoutId}/comments`,
    method: 'get',
  })
);

export const createComment = (comment) => (
  $.ajax({
    url: `api/comments`,
    method: 'post',
    data: {comment},
  })
);

export const deleteComment = (commentId) => (
  $.ajax({
    url: `api/comments/${commentId}`,
    method: 'delete',
  })
);

