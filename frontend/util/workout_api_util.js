export const fetchWorkouts = data => (
  $.ajax({
    method: 'GET',
    url: 'api/workouts',
    data
  })
);

export const fetchWorkout = workoutId => (
  $.ajax({
    method: 'GET',
    url: `api/workouts/${workoutId}`,
  })
);

export const fetchUserWorkouts = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/workouts/`,
  })
)

export const createWorkout = workoutForm => (
  $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: workoutForm,
    contentType: false,
    processData: false,
  })
);

// just testing