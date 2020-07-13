export const fetchEveryWorkout = () => (
  $.ajax({
    method: 'GET',
    url: '/api/workouts',
  })
);

export const fetchWorkout = (workoutId) => {
  return $.ajax({
    url: `/api/workouts/${workoutId}`,
    method: 'GET',
  })
};

export const fetchUsersWorkouts = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/workouts`,
  })
)

export const createWorkout = workoutForm => (
  $.ajax({
    method: 'POST',
    url: '/api/workouts',
    data: { workoutForm },
    contentType: false,
    processData: false,
  })
);

