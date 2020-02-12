import { fetchWorkout } from '../../../actions/workout_actions'
import { fetchAllUsers } from '../../../actions/user_actions'
import WorkoutShow from './workout_show';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return ({
    workout: state.entities.workouts[ownProps.match.params.workoutId],
    users: state.entities.users
  })
}


const mapDispatchToProps = (dispatch) => ({
  fetchWorkout: (id) => dispatch(fetchWorkout(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutShow))