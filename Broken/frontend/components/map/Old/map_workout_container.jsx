import { fetchActivity } from '../../../actions/workouts/workout_actions.js'
import { fetchAllUsers } from '../../../actions/user_actions.js'
import WorkoutShow from '../workouts/workout_show.jsx';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return ({
    activity: state.entities.activities[ownProps.match.params.activityId],
    users: state.entities.users
  })
}


const mapDispatchToProps = (dispatch) => ({
  fetchActivity: (id) => dispatch(fetchActivity(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivtyShow))