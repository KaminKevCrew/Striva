import { fetchWorkout } from '../../../actions/workouts/workout_actions'
import { fetchAllUsers } from '../../../actions/users/user_actions'
import WorkoutShow from './workout_show';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return ({
    activity: state.entities.workouts[ownProps.match.params.workoutId],
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