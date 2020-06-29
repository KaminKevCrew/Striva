import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SplashPage from './splash_page';
import GreetingContainer from './greeting/greeting_container';
import FeedContainer from "./feed/feed_container";
import UserProfileContainer from "./users/user_profile_container";
import MapContainer from "./map/map_container.js";
import RouteIndexContainer from "./routes/route_index_container";
import RouteCreateContainer from "./routes/route_create_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/greeting" component={GreetingContainer} />
      <Route exact path="/feed" component={FeedContainer} />
      <Route exact path="/users/*" component={UserProfileContainer} />
      <Route path="/map" component={MapContainer} />
      <Route exact path="/routes" component={RouteIndexContainer} />
      <Route path="/routes/create" component={RouteCreateContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    
    
  </div>
);

export default App;