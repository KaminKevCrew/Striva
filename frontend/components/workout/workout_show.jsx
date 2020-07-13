//TODO: Make a map appear when a user enters coordinate data so they can preview their workout.

import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Map from '../map/map'


class WorkoutShow extends React.Component {
  constructor(props) {
    super(props)
    this.getWorkoutData()
    
    this.mapOptions = {
      container: `map`,
      // center: [-122, 38],
      // zoom: 12,
      interactive: true,
      // coordinates: [[-122, 38], [-121, 37], [-120, 36]],
      bounds: [],
      // data: null
    }
    
    this.getAthleteData = this.getAthleteData.bind(this)
    this.getWorkoutData = this.getWorkoutData.bind(this)
    this.updateMapOptions = this.updateMapOptions.bind(this)
  }

  componentDidUpdate() {
    if(this.props.entities.workouts.workout && !this.props.entities.users.user) {
      this.getAthleteData()
    }
  }

  updateMapOptions() {
    // if (this.props.entities.workouts.workout) { 
    //   this.mapOptions.container = 
    //   `map${this.props.entities.workouts.workout.id}`
    // }
    const coordinates = JSON.parse(this.props.entities.workouts.workout.coordinates)
    const coordinateValues = Object.values(coordinates)
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for(let i = 0; i < coordinateValues.length - 1; i ++) {
      let x = coordinateValues[i][0];
      let y = coordinateValues[i][1];
      if (x <= minX) {minX = x};
      if (y <= minY) {minY = y};
      if (x >= maxX) {maxX = x};
      if (y >= maxY) {maxY = y};
    }
    let centerX = (minX + maxX) / 2;
    let centerY = (minY + maxY) / 2;
    this.mapOptions.coordinates = coordinateValues.slice(0, coordinateValues.length - 1);
    minX -= 0.01;
    minY -= 0.01;
    maxX += 0.01;
    maxY += 0.01;
    this.mapOptions.bounds = [minX, minY, maxX, maxY];
  }

  getWorkoutData() {
    const workoutId = this.props.match.params.workoutId
    this.props.fetchWorkoutData(workoutId)
  }

  getAthleteData() {
    const athleteId = this.props.entities.workouts.workout.athlete_id
    this.props.fetchUserData(athleteId)
  }

  render() {
    console.log(this.props)
    let display = <div>No Workout Found</div>
    
    if (this.props.entities.users.user) {
      const athlete = this.props.entities.users.user
      const workout = this.props.entities.workouts.workout
      this.updateMapOptions()
      
      display = <div>
                Athlete: {athlete.username}
                <br />
                {workout.title}
                <br />
                {workout.description}
                <br />
                Elapsed time: {workout.elapsed_time}
                <br />
                Average speed: {workout.average_speed}
                <br />
                Distance: {workout.distance}
                <br />
                Start time: {workout.start_time}
                <br />
                End time: {workout.end_time}
                <br />
                <br />
                <Map {...this.mapOptions}/>
              </div>
    }
    // debugger
    return(
      <div>
        {display}
      </div>
    )
  }
}

export default WorkoutShow;