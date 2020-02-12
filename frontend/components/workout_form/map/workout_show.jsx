import React from 'react';
import WorkoutShowMapContainer from './workout_show_map_container';
import ElevationGraph from './elevation_graph'
import { getElevationPerMile, getSplits } from '../../../util/elevation_api_util'
import { formatDate } from '../../../util/date_api_util'
import { calculateElevationGain } from '../../../util/gpx_api_util.js'




class WorkoutShow extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.workoutId)
    this.props.fetchAllUsers()
  }

  getElapseTime() {
    let measuredTime = new Date(null)
    measuredTime.setSeconds(this.props.workout.elapse_time);
    let MHSTime = measuredTime.toISOString().substr(11, 8);
    return MHSTime.slice(1)
  }



  render() {
    let data = {};
    let user = {};
    let dist = 0;
    let speed = 0;
    let eleGain = 0;
    let splits = {};

    if (this.props.workout) {
      // data = getElevationPerMile(this.props.workout.elevation, this.props.workout.distance)
      user = this.props.users[this.props.workout.user_id]
      dist = Math.round(this.props.workout.distance * 100) / 100
      speed = Math.round(this.props.workout.average_speed * 100) / 100
      // let elevation = JSON.parse(this.props.workout.elevation)
      // eleGain = Math.floor(calculateElevationGain(elevation));
      // splits = getSplits(this.props.workout.time_stamps, this.props.workout.distance, this.props.workout.elevation)
    }



    return (
      <div className="workout-show-page">
        <div id="container-map">
          {user && this.props.workout ?
            <section className="userInfo-stats">
              <div id="user-info-header">
                <h1>{user.first_name} {user.last_name} - {this.props.workout.workout_type}</h1>
              </div>
              <div id="workout-show-info">
                <div className="profile-picture">
                  <img src={user.photoUrl} alt="" />
                </div>
                <div className="workout-details-show">
                  <div id="workout-time">
                    {formatDate(this.props.workout.time)}
                  </div>
                  <div id="workout-show-title">
                    {this.props.workout.title}
                  </div>
                  <div id="workout-title">
                    {this.props.workout.description}
                  </div>
                </div>
                <div id="all-workout-stats">
                  <div id="workout-show-stats">
                    <div>
                      <section>
                        <p>{dist}</p> <span>mi</span>
                      </section>
                      <h3>Distance</h3>
                    </div>
                    <div>
                      <section>
                        {/* <p>{eleGain}</p> <span>ft</span> */}
                      </section>
                      <h3>Elevation</h3>
                    </div>
                    <div>
                      <p>{this.getElapseTime()}</p>
                      <h3>Elapsed Time</h3>
                    </div>
                  </div>
                  <div>
                    <table className="route-data">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Avg</th>
                          <th>Max</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Speed</th>
                          <td>{speed}<abbr className="unit" title="miles per hour">mi/h</abbr></td>
                          <td><abbr className="unit" title="miles per hour">mi/h</abbr></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            : ""}
          <section className="workout-map">
            {this.props.workout ?
              <WorkoutShowMapContainer
                key={this.props.workout.id}
                workout={this.props.workout}
                user={this.props.users[this.props.workout.user_id]}
                interactive={true}
                container={`map-show-${this.props.workout.id}`}
                data={data[0]}
                interval={data[1]}
                splits={splits}

              /> :
              ""
            }
          </section>
        </div>
      </div>
    )
  }
}

export default WorkoutShow;