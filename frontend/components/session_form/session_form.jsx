import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]:e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors">
        { this.props.errors.map((error, i) => (
          <li key={ `error-${i}` }>
            { error }
          </li>
        )) }
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Striva!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-username"
              />
            </label>
            <br/>
            <label>Password: 
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-password"
              />
            </label>
            <br/>
            <input type="submit"
              value={this.props.formType}
              className="session-submit"
            />
            &nbsp;or&nbsp;
            <button className='demo-login'>
              Demo login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;