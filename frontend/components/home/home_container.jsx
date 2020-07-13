import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/user';
import Home from './home';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserData: (id) => dispatch(fetchUserData(id)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);