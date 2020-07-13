import React from 'react'
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentUser: null}
  }
  // debugger
  // console.log(this)
  componentDidMount() {
    let windowState = window.getState()
    let currentUser = windowState.session.currentUser
    this.setState({currentUser: currentUser})
  }

  render() {
    const display = this.state.currentUser ? (
      <div>
        <GreetingContainer />
      </div>
    ) : (
      <div>
        <Link className="btn" id="signIn-button" to="/signup" >Sign Up</Link>
        <Link className="btn" id="signIn-button" to="/login">Log In</Link>
      </div>
      )

    return (
      <div className="home-page">
        <div className='content'>
          <h2 className='home-title'>Striva</h2>
          <p>Striving for more performance.</p>
          <section className="home-page-section">
            {display}
            {/* Put an image in here */}
          </section>
        </div>
      </div>
    )
  }
}

export default Home;