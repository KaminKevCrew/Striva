export const fetchLike = (likeId) => (
  $.ajax({
    url: `api/likes/${likeId}`,
    method: 'get',
  })
);

export const fetchAllLikes = (workoutId) => (
  $.ajax({
    url: `api/workouts/${workoutId}/likes`,
    method: 'get',
  })
)

export const createLike = (like) => (
  $.ajax({
    url: `api/likes`,
    method: 'post',
    data: {like},
  })
)