import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllLikes } from '../../../actions/like_actions'
import { fetchWorkouts } from '../../../actions/workout_actions'


const mapStateToProps = (state, ownProps) => ({
  likes: state.entities.likes,
  users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllWorkouts: (page) => dispatch(fetchAllWorkouts(page)),
  fetchAllLikes: (id) => dispatch(fetchAllLikes(id))
})

class LikeIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.likes).length !== Object.values(this.props.likes).length) {
      this.props.fetchWorkouts(this.props.page)
    }
  }

  render() {
    // let likes = this.props.workout.like_ids.map(likeId => this.props.likes[likeId])
    let users = []
    // if (likes[0]) {

    //   users = likes.map(like => {
    //     if (like) {
    //       return this.props.users[like.user_id];
    //     }
    //   })
    // }
    users = users.filter(user => user)
    return (
      <div id="likes">
        <div id="user-likes"> {users.slice(0, 3).map(user => {
          return (<div key={user.id} className="profile-picture-small-comment">
            {/* <img src={user.photoUrl} alt="" /> */}
          </div>)
        })}
        </div>
        {users.length > 0 ?
          <p>{users.length} likes </p> : ""
        }
        {this.props.workout.comment_ids.length >= 2 ?
          <h1 id="num-comments">
            {this.props.likes.length ? <p id="dot"> . </p> : ""}
            <p id="comment-num">
              {this.props.workout.comment_ids.length} comments</p>
          </h1> :
          this.props.workout.comment_ids.length > 0 ?

            <h1 id="num-comments">
              {this.props.likes.length ? <p id="dot"> . </p> : ""}
              <p id="comment-num">
                {this.props.workout.comment_ids.length} comment</p>
            </h1> : ""
        }
      </div>

    )
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeIndex))