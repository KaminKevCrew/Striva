import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className='login-signup-button'>
        <div className='div-container'>Login</div>
      </Link>
      &nbsp;or&nbsp;
      <Link to="/signup" className='login-signup-button'>
        <div className='div-container'>Sign Up</div>
      </Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}!</h2>
      <Link to="/" className="header-button" onClick={logout}>
        <div className='greeting-text'>Log Out</div>
      </Link>
      <Link to="/map" className="map-button">
        <div className='greeting-text'>View Map</div>
      </Link>
      <div id="map" className='map'></div>
    </hgroup>
    
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;