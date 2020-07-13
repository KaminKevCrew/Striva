import { 
  fetchWorkout, 
  createWorkout, 
  fetchUsersWorkouts,
  fetchEveryWorkout
} from '../utils/workout';

export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_CURRENT_USER_WORKOUTS = "RECEIVE_CURRENT_USER_WORKOUTS";
export const RECEIVE_ALL_WORKOUTS = 'RECEIVE_ALL_WORKOUTS';


export const receiveAllWorkouts = workouts => ({
  type: RECEIVE_ALL_WORKOUTS,
  workouts,
});

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout,
});

export const receiveCurrentUserWorkouts = workouts => ({
  type: RECEIVE_CURRENT_USER_WORKOUTS,
  workouts,
});

export const fetchAllWorkouts = () => dispatch => fetchEveryWorkout()
  .then((workouts) => dispatch(receiveAllWorkouts(workouts)));

export const fetchUserWorkouts = (userId) => dispatch => (fetchUsersWorkouts(userId).then((workouts) => dispatch(receiveCurrentUserWorkouts(workouts))));

export const fetchWorkoutData = id => dispatch => fetchWorkout(id)
  .then(workout => dispatch(receiveWorkout(workout)));

export const createNewWorkout = workout => dispatch => createWorkout(workout)
  .then(workout => dispatch(receiveWorkout(workout.id)));

