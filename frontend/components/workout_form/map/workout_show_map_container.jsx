import { connect } from 'react-redux'
import WorkoutShowMap from './workout_show_map'

const mapStateToProps = (state) => ({
  ui: state.ui
})



export default connect(
  mapStateToProps,
  null
)(WorkoutShowMap)