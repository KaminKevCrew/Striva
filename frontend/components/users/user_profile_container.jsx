import { connect } from 'react-redux';
import UserProfile from './user_profile'
import { fetchFollowers, fetchFollowing } from '../../actions/follows_actions'
import { fetchUserWorkouts } from '../../actions/workout_actions'
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  followers: Object.values(state.entities.followers),
  following: Object.values(state.entities.followers),
  current_user: state.session.currentUser,
  workouts: Object.values(state.entities.currentUserWorkouts),
  users: state.entities.users,
  comments: state.entities.comments,
  likes: state.entities.likes,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserWorkouts: () => dispatch(fetchUserWorkouts()),
  fetchFollowers: () => dispatch(fetchFollowers()),
  fetchFollowing: () => dispatch(fetchFollowing()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)