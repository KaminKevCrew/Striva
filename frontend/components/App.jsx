//TODO: figure out if there's a way to keep track of whether or not a user presses enter in the search bar after manually changing the url. 

//TODO: Is it possible to create a route that redirects to home page if a user manually enters an invalid url?

import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import SignupContainer from './session/signup_container.jsx';
import LoginContainer from './session/login_container';
import UserProfileContainer from './user_profile/user_profile_container';
import WorkoutShowContainer from './workout/workout_show_container';
import WorkoutFormContainer from './workout/workout_form_container';
import FeedContainer from './feed/feed_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
    <ProtectedRoute path="/workouts/:workoutId" component={WorkoutShowContainer} />
    <ProtectedRoute path="/newworkout" component={WorkoutFormContainer} />
    <ProtectedRoute exact path="/feed" component={FeedContainer} />
  </div>
);
