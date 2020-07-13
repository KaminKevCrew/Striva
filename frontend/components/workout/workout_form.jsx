import React from 'react';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      athleteId: this.props.session.currentUser.id,
      title: '',
      description: '',
      coordinates: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.addAthleteId = this.addAthleteId.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  addAthleteId() {
    let userId = this.props.session.currentUser.id
    this.setState({ [athleteId]: userId})
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.addAthleteId();
    this.props.createNewWorkout(this.state)
      .then(() => this.props.history.push('/')); // where I redirect on signup
  }

  goToLogin(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  // Test JSON String: {"0":[-121, 37], "1":[-120, 38]}
  // Test JSON String: {"0":[-121, 37], "1":[-120, 38], "2":[null, null]}

  render() {
    // console.log(this.props);
    return (
      <div className="workout-form">
        <br />
        <br />
        <br />
        <h2>New Workout</h2>
        {/* <button onClick={this.goToLogin}>
          Log In
        </button> */}
        <form>
          <label>
            <input 
              type="hidden"
              value={this.props.session.currentUser.id}
            />
          </label>
          <label>Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
            />
          </label>
          <label>Description:
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleInput('description')}
            />
          </label>
          <label>Coordinate JSON String:
            <input
              type="text"
              value={this.state.coordinates}
              onChange={this.handleInput('coordinates')}
            />
          </label>
          <button onClick={this.handleSubmit}>Create!</button>
        </form>
      </div>
    );
  }
}

export default WorkoutForm;
