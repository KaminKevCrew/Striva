import { logout } from '../../actions/session';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserData } from '../../actions/user.js'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserData: userId => dispatch(fetchUserData(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));