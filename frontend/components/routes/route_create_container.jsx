import { connect } from 'react-redux';
import { createRoute } from '../../actions/route_actions'
import RouteCreate from './route_create'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser

})

const mapDispatchToProps = (dispatch) => ({
  createRoute: (userId, route) => dispatch(createRoute(userId, route))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteCreate);