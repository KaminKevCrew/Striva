import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToSignup = this.goToSignup.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/')); // where I redirect on login
  }

  goToSignup(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }

  render() {
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Log In!</h2>
        <button onClick={this.goToSignup}>
          Sign Up
        </button>
        <form>
          <label>Username:
          <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>

          <label>Password:
          <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
            <button onClick={this.handleSubmit}>Log In!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
