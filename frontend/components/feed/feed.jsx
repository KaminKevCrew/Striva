import WorkoutIndexContainer from '../workout_form/workout_index_container';
import WorkoutIndex from '../workout_form/workout_index'
import UserFeedProfile from '../users/user_feed_profile'
import React from 'react'
import { createLike } from '../../util/like_api_util';

class Feed extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Promise.all([
    //   this.props.fetchAllUsers(),
    //   this.props.fetchAllWorkouts(1),
    //   this.props.fetchUserWorkouts(),
    //   // this.props.fetchFollowers(),
    //   // this.props.fetchFollowing(),
    // ])
  }

  componentDidUpdate() {

  }

 

  render() {
    return (

      <div className="feed-container-div">
        <section>
          Hello, you are looking at the feed.
        </section>
        <section>
          
        </section>
      </div>
    )
  }
};

export default Feed;