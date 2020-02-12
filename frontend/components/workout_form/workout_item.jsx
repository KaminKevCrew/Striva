import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkoutMap from './map/workout_map'
import { formatDate } from '../../util/date_api_util'
import { calculateElevationGain } from '../../util/gpx_api_util.js'
import CommentIndex from './comments/comment_index'
import CommentFormContainer from './comments/comment_form_container'
import LikeIndex from './likes/like_index'



class WorkoutItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      makeComment: false
    }
    this.elevation = JSON.parse(this.props.workout.elevation)
    this.handleClick = this.handleClick.bind(this);
    this.likeWorkout = this.likeWorkout.bind(this);
  }

  handleClick() {
    this.setState({ makeComment: !this.state.makeComment })
  }

  getElapseTime() {
    let measuredTime = new Date(null)
    measuredTime.setSeconds(this.props.workout.elapse_time);
    let MHSTime = measuredTime.toISOString().substr(11, 8);
    return MHSTime.slice(1)
  }

  likeWorkout() {
    const like = {
      user_id: this.props.currentUser.id,
      workout_id: this.props.workout.id
    }
    this.props.createLike(like)
  }

  render() {
    const comments = this.props.workout.comment_ids.map(commentId => this.props.comments[commentId])
    // const likes = this.props.workout.like_ids.map(likeId => this.props.likes[likeId])

    const ele = calculateElevationGain(this.elevation);
    const dist = Math.round(this.props.workout.distance * 100) / 100
    const speed = Math.round(this.props.workout.average_speed * 100) / 100
    return (

      <div id="workout-item">
        <div id="workout-username">
          <div className="profile-picture-small">
            <img src={this.props.user.photoUrl} />
          </div>
          <div>
            <p>{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
            <p id="time">{formatDate(this.props.workout.time)}</p>
          </div>
        </div>

        <section id="workout-details">
          {/* {this.props.workout.workout_type !== 'Bike' ? (
            <img src={window.images.running_icon} alt="" />
          ) :
            <img src={window.images.biking_icon} alt="" />
          } */}

          <div id="workout-header">
            <h3 id="workout-title">{this.props.workout.title}</h3>
            <p id="workout-description">{this.props.workout.description}</p>
          </div>
        </section>

        <section id="show-stats">
          <div>
            <h3>Distance</h3>
            <p>{dist} mi</p>
          </div>
          <section></section>

          <div>
            <h3>Avg Speed</h3>
            <p>{speed}</p>
          </div>
          <section></section>

          <div>
            <h3>Time</h3>
            <p>{this.getElapseTime()}</p>
          </div>

        </section>
        <div id='map'></div>
        <WorkoutMap
          key={this.props.workout.id}
          workout={this.props.workout}
          user={this.props.user}
          interactive={false}
          container={'map'}
        />

        <div className="like-comment">
          {/* <LikeIndex
            key={this.props.workout.id}
            workout={this.props.workout}
            currentUser={this.props.currentUser}
            page={this.props.page}
            // likes={likes}
          /> */}
          <div id='comment-icon' onClick={this.handleClick}>
            {/* <img src={window.images.comment_icon} alt="" /> */}
          </div>

          <div id='comment-icon' onClick={this.likeWorkout}>
            {/* <img src={window.images.like_icon} alt="" /> */}
          </div>
        </div>

        {/* <CommentIndex
          users={this.props.users}
          workout={this.props.workout}
          currentUser={this.props.currentUser}
          page={this.props.page}
        /> */}

        {this.state.makeComment ?
          <CommentFormContainer workout={this.props.workout} /> :
          ""
        }
      </div>
    )
  }
};

export default withRouter(WorkoutItem);