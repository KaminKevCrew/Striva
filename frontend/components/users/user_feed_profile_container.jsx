import { connect } from 'react-redux';
import UserFeedProfile from './user_feed_profile'
import { fetchFollowers, fetchFollowing } from '../../actions/follows_action'
import { fetchAllWorkouts, fetchUserWorkouts } from '../../actions/workout_actions'
import { fetchUser } from '../../actions/user_actions'

const mapStateToProps = (state) => ({
  followers: Object.values(state.entities.followers),
  following: Object.values(state.entities.followers),
  current_user: state.session.currentUser,
  workouts: Object.values(state.entities.workouts),
  users: Object.values(state.entities.users)
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllWorkouts: () => dispatch(fetchAllWorkouts()),
  fetchUserWorkouts: () => dispatch(fetchUserWorkouts()),
  fetchFollowers: () => dispatch(fetchFollowers()),
  fetchFollowing: () => dispatch(fetchFollowing()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFeedProfile)