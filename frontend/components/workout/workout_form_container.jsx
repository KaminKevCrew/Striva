import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import WorkoutForm from './workout_form'
import { createNewWorkout } from '../../actions/workout.js'
// import { fetchUserData } from '../../actions/user.js'


const mapStateToProps = (state) => {
  return (state)
}


const mapDispatchToProps = (dispatch) => ({
  createNewWorkout: workoutId => dispatch(createNewWorkout(workoutId)),
  fetchUserData: userId => dispatch(fetchUserData(userId)),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutForm))