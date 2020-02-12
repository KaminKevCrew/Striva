import React from 'react'
import { formatDate } from '../../util/date_api_util'
import UserFeedRecentActivity from './user_feed_recent_activity'
import { fetchUser } from '../../util/user_api_util'
import { withRouter } from 'react-router-dom'

class UserFeedProfile extends React.Component {

  constructor(props) {
    super(props)
  }



  ownWorkouts() {
    let ownWorkouts = [];
    this.props.currentUserWorkouts.forEach(act => {
      if (act.user_id === this.props.current_user.id) ownWorkouts.push(act);
    })

    return ownWorkouts
  }

  latestWorkout() {

    let workouts = Object.values(this.props.currentUserWorkouts)
    let last = workouts[workouts.length - 1]
    return last ? { "title": last.title, "date": last.time } : { "title": "No recent workout", "date": "" }

  }

  render() {
    const workouts = Object.values(this.props.currentUserWorkouts)

    return (
      <div className="grid-left">
        <div id="card">
          <section className="profile-picture-container">
            <div className="profile-picture"
              onClick={() =>
                this.props.history.push(`/users/${this.props.current_user.id}`)}>
              <img src={this.props.current_user.photoUrl} />
            </div>

          </section>
          <div className="user-feed-profile">
            <h3>{this.props.current_user.first_name} {this.props.current_user.last_name}</h3>

            <section className="followers-following-Workouts">
              <div>
                <h3>Following</h3>
                <p>{this.props.following.length}</p>
              </div>
              <div id="short-border-right"></div>

              <div>
                <h3>Followers</h3>
                <p>{this.props.followers.length}</p>
              </div>
              <div id="short-border-right"></div>

              <div>
                <h3>Workouts</h3>
                <p>{workouts.length}</p>
              </div>

            </section>

            <section className="recent-activity">
              <h3>Latest Workout</h3>
              <p>{this.latestWorkout().title}</p>
              <li>{this.latestWorkout().date ? formatDate(this.latestWorkout().date) : this.latestWorkout().date}</li>

            </section>

            <div id="short-border"></div>
            <div id="training-log">
              Your Training Log
                </div>

          </div>
          <UserFeedRecentActivity workout={workouts} />

        </div>
      </div>
    )
  }

}


export default withRouter(UserFeedProfile);