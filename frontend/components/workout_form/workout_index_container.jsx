import { fetchAllWorkouts, fetchWorkout } from '../../actions/workout_actions'
import WorkoutIndex from './workout_index'
import { fetchUser } from '../../actions/user_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    workouts: this.state.workouts

  })
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllWorkouts: () => dispatch(fetchAllWorkouts()),
})

export default withRouter(connect(
  mapStateToProps,
  null
)(WorkoutIndex))

