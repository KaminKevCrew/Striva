import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import showMap from './map'

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.entities.users
  })
}


const mapDispatchToProps = (dispatch) => ({
  
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(showMap))