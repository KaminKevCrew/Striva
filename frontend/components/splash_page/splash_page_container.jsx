import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';
import SplashPage from './splash_page';

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);