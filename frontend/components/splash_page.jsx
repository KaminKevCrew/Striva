import React from 'react'
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'

export default (props) => {
  return (
    <div className="splash-page">
      <div className='content'>
        Introducing
        <h2 className='splash-title'>Striva</h2>
        <p>For those Striving for more performance.</p>
        {/* <section className="signup-splash-page"
          onClick={() =>
            props.history.push('/signup')}>Join Now</section> */}
        <section className="signup-splash-page">
          <Link to="/greeting" className='signup-splash-page'>
              Join Now
          </Link>
        </section>
      </div>
    </div>
  )
}