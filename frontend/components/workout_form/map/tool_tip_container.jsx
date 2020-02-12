import { connect } from 'react-redux'
import { receiveCoordinate } from '../../../actions/ui_actions'
import ToolTip from './tool_tip'

const mapStateToProps = (state) => ({
  ui: state.ui
})

const mapDispatchToProps = (dispatch) => ({
  receiveCoordinate: (coords) => dispatch(receiveCoordinate(coords))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolTip)