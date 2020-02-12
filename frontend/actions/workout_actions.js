import * as APIUtil from '../util/workout_api_util';

export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_CURRENT_USER_WORKOUTS = "RECEIVE_CURRENT_USER_WORKOUTS";

export const receiveAllWorkouts = workouts => ({
  type: RECEIVE_ALL_WORKOUTS,
  workouts,
});

export const receiveCurrentUserWorkouts = workouts => ({
  type: RECEIVE_CURRENT_USER_WORKOUTS,
  workouts,
});

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout,
});


export const fetchWorkouts = filters => dispatch => (
  APIUtil.fetchWorkouts(filters).then(workouts => (
    dispatch(receiveWorkouts(workouts))
  ))
);

export const fetchAllWorkouts = page => dispatch =>
  APIUtil.fetchWorkouts(page).then((workouts) => dispatch(receiveAllWorkouts(workouts))
);

export const fetchUserWorkouts = () => dispatch => (
  APIUtil.fetchUserWorkouts().then((workouts) => dispatch(receiveCurrentUserWorkouts(workouts)))
);

export const fetchWorkout = id => dispatch => (
  APIUtil.fetchWorkout(id).then(workout => (
    dispatch(receiveWorkout(workout))
  ))
);

// export const createWorkout = workout => dispatch => (
//   APIUtil.createWorkout(workout).then(workout)
// );

