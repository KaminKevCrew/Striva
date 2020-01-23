import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom'


const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));