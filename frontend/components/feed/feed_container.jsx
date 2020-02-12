import { connect } from 'react-redux';
import { fetchAllWorkouts, fetchUserWorkouts } from '../../actions/workout_actions'
import { fetchFollowers, fetchFollowing } from '../../actions/follows_actions'
import { fetchAllUsers } from '../../actions/user_actions'
import { fetchWorkoutComments } from '../../actions/comment_actions'
import { createLike } from '../../actions/like_actions'
import Feed from "./feed"

const mapStateToProps = (state) => ({
  // workouts: Object.values(state.entities.workouts),
  // followers: Object.values(state.entities.followers),
  // following: Object.values(state.entities.followers),
  // current_user: state.session.currentUser,
  // users: state.entities.users,
  // comments: state.entities.comments,
  likes: state.entities.likes,
  // currentUserWorkouts: state.entities.currentUserWorkouts
})

const mapDispatchToProps = (dispatch) => ({
  // fetchAllWorkouts: (page) => dispatch(fetchAllWorkouts(page)),
  // fetchWorkout: () => dispatch(fetchWorkout()),
  // fetchFollowers: () => dispatch(fetchFollowers()),
  // fetchFollowing: () => dispatch(fetchFollowing()),
  // fetchAllUsers: () => dispatch(fetchAllUsers()),
  // fetchUserWorkouts: (workouts) => dispatch(fetchUserWorkouts(workouts)),
  // fetchWorkoutComments: (workoutId) => dispatch(fetchWorkoutComments(workoutId)),
  createLike: (like) => dispatch(createLike(like))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)