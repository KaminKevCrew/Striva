import React from 'react'
import WorkoutItem from './workout_item';
import { withRouter } from 'react-router-dom'
import debounce from "lodash.debounce";

class WorkoutIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      error: false,
      hasMore: true,
      isLoading: false,
      workouts: [],

    };
    this.fetchAllWorkouts = this.props.fetchAllWorkouts.bind(this);

    window.onscroll = debounce(() => {
      const {
        fetchAllWorkouts,
        state: {
          error,
          isLoading,
          hasMore,
          page
        },
      } = this;
      if (error || isLoading || !hasMore) return;
      const fromBottom = (window.innerHeight + document.documentElement.scrollTop
        - document.documentElement.offsetHeight)
      if (
        (fromBottom <= 2) && (fromBottom > -2)
      ) {
        this.state.page += 1
        fetchAllWorkouts(this.state.page);
      }
    }, 1000);

  }



  render() {
    const workouts = this.props.workouts.map((workout, index) => {
      const user = this.props.users[workout.user_id]
      return (
        <WorkoutItem
          key={workout.id}
          index={index}
          workout={workout}
          user={user}
          comments={this.props.comments}
          users={this.props.users}
          createKudo={this.props.createKudo}
          currentUser={this.props.users[this.props.workouts.user_id]}
          page={this.state.page}
          user={user}
          kudos={this.props.kudos}
        />
      )
    })

    return (
      <div className="grid-center">
        <div id="promotion">
          <div className="workout-img">
            {/* <img src={window.images.quick_bike} alt="" /> */}
          </div>
          <p>Check out my Linked-In</p>
          <div id="linked-in"><a rel="stylesheet" href="https://www.linkedin.com/in/kevin-kaminski-850991b7/">Click Me</a></div>
        </div>
        <section className="workout-feed">
          {workouts}
        </section>
      </div>
    )
  }
}

export default withRouter(WorkoutIndex);