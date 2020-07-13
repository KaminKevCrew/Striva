import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.getUserData()
    this.state = {}
  }

  getUserData() {
    const userId = this.props.match.params.userId
    this.props.fetchUserData(userId)
  }

  render() {
    // const username = this.state.user.username
    // const userId = this.state.user.id
    // debugger
    // console.log(this.props)
    const user = this.props.state.entities.users.user
    const display = user ? 
    <div>
      Username: {user.username}
      <br/>
      User Id: {user.id}
    </div> :
    <div>
      No User Found
    </div>
    return(
    <div>
      <br/>
      <br />
      <br />
      {display}
    </div>
    )
  }
}

export default UserProfile;
