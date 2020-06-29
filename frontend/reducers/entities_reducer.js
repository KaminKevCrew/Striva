import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import followersReducer from './followers_reducer';
import followingReducer from './following_reducer';
import currentUserWorkouts from './current_user_workouts_reducer';
import routeReducer from './route_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  followers: followersReducer,
  following: followingReducer,
  currentUserWorkouts: currentUserWorkouts,
  routeReducer: routeReducer,

});

export default entitiesReducer;