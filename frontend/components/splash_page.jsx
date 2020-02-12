import React from 'react'
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className="splash-page">
      <div className='content'>
        <h2 className='splash-title'>Striva</h2>
        <p>Striving for more performance.</p>
        <section className="splash-page-section">
          <Link to="/greeting" className='signup-button'>
              Signup now 
          </Link>
        </section>
      </div>
    </div>
  )
}