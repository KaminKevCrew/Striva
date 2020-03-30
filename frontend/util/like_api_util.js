export const fetchLike = (likeId) => (
  $.ajax({
    url: `api/likes/${likeId}`,
    method: 'GET',
  })
);

export const fetchAllLikes = (workoutId) => (
  $.ajax({
    url: `api/workouts/${workoutId}/likes`,
    method: 'GET',
  })
)

export const createLike = (like) => (
  $.ajax({
    url: `api/likes`,
    method: 'POST',
    data: {like},
  })
)