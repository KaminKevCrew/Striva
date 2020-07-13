//TODO: Add/test functionality for single user. 

import React from 'react';
import Map from '../map/map';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    // this.getWorkouts();
    // this.workouts = null
    this.state = {
      
    };
    this.getWorkouts = this.getWorkouts.bind(this)
    this.createWorkoutFeed = this.createWorkoutFeed.bind(this)
    this.calculateBounds = this.calculateBounds.bind(this)
  }

  componentDidMount() {
    this.getWorkouts()
  }

  componentDidUpdate() {
    
  }

  getWorkouts() {
    if (this.props.match.path == "/feed") {
      this.props.fetchAllWorkouts();
    } else {
      this.props.fetchUserWorkouts(this.props.state.session.currentUser.id);
    }
  }

  calculateBounds(coordinates) {
    // if (this.props.entities.workouts.workout) { 
    //   this.mapOptions.container = 
    //   `map${this.props.entities.workouts.workout.id}`
    // }
    // debugger
    coordinates = JSON.parse(coordinates)
    const coordinateValues = Object.values(coordinates)
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < coordinateValues.length - 1; i++) {
      let x = coordinateValues[i][0];
      let y = coordinateValues[i][1];
      if (x <= minX) { minX = x };
      if (y <= minY) { minY = y };
      if (x >= maxX) { maxX = x };
      if (y >= maxY) { maxY = y };
    }
    minX -= 0.01;
    minY -= 0.01;
    maxX += 0.01;
    maxY += 0.01;
    return [minX, minY, maxX, maxY];
  }

  createWorkoutFeed(workouts) {
    // debugger
    let workoutList = []
    for(let i = 0; i < workouts.length; i++) {
      let workout = workouts[i]
      let coordinateValues = Object.values(JSON.parse(workout.coordinates))

      workoutList.push(
        <li className="workout" key={`li${workout.id}`}>
          <p key={`title${workout.id}`}>Title: {workout.title}</p>
          <p key={`desc${workout.id}`}>Description: {workout.description}</p>
          <p key={`avg${workout.id}`}>Average Speed: {workout.average_speed}</p>
          {/* <Map container={`map`} */}
          <Map container={`map-${workout.id}`}
            interactive={false}
            coordinates={coordinateValues
              .slice(0, coordinateValues.length - 1)}
            bounds={this.calculateBounds(workout.coordinates)} 
            key={workout.id}/>
        </li>
      )
    }
    // debugger
    return workoutList
  }

  render() {
    let data = null;
    let display = "There doesn't seem to be anything here..."
    // // debugger
    if (this.props.state.entities.workouts.workouts) {
      data = this.props.state.entities.workouts.workouts
      // debugger
      display = this.createWorkoutFeed(data.slice(0, 5))
      // display = display.slice(0, 5)
    }
    // debugger
    return(
      <div id="feed">
        <p>You're in the feed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
        <ul>
          {display}
        </ul>
      </div>
    )
  }
}

export default Feed;
