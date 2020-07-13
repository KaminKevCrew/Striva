import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import WorkoutShow from './workout_show'
import { fetchWorkoutData } from '../../actions/workout.js'
import { fetchUserData } from '../../actions/user.js'


const mapStateToProps = (state) => {
  return (state)
}


const mapDispatchToProps = (dispatch) => ({
  fetchWorkoutData: workoutId => dispatch(fetchWorkoutData(workoutId)),
  fetchUserData: userId => dispatch(fetchUserData(userId)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutShow))