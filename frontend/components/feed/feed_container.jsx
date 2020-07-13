import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/user';
import { fetchUserWorkouts, fetchAllWorkouts } from '../../actions/workout';
import Feed from './feed';

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: (id) => dispatch(fetchUserData(id)),
    fetchUserWorkouts: (id) => dispatch(fetchUserWorkouts(id)),
    fetchAllWorkouts: () => dispatch(fetchAllWorkouts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);