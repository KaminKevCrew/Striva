import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className='login-signup-button'>
        Login
      </Link>
      &nbsp;or&nbsp;
      <Link to="/signup" className='login-signup-button'>
        Sign Up
      </Link>
      &nbsp;or&nbsp;
      <Link to="/login" className='login-signup-button'>
        Demo
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
        <Link to="/" className="header-button" onClick={logout}>
          Log Out
        </Link>
      <Link to="/map" className="map-button">
        View Map
      </Link>
      <div id="map"></div>
    </hgroup>
    
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;