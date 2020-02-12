import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import SplashPage from './splash_page';

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);