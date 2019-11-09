import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        <Link to="/">
          Log Out
        </Link>
      </button>
      <Link to="/map" className="map-button">View Map</Link>
      <div id="map"></div>
    </hgroup>
    
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;