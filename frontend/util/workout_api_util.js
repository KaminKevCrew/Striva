export const fetchWorkouts = data => (
  $.ajax({
    method: 'get',
    url: 'api/workouts',
    data
  })
);

export const fetchWorkout = id => (
  $.ajax({
    method: 'get',
    url: `api/workouts/${id}`,
  })
);

export const fetchUserWorkouts = () => (
  $.ajax({
    method: 'get',
    url: `api//workouts/`,
  })
)

export const createWorkout = workoutForm => (
  $.ajax({
    method: 'post',
    url: 'api/benches',
    data: workoutForm,
    contentType: false,
    processData: false,
  })
);

