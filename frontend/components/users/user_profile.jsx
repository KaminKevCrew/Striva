import React from 'react'
// import CountUp, { startAnimation } from 'react-countup';
// import WorkoutCalendar from './stats/workout_calendar'
// import UserFeedRecentActivity from './user_feed_recent_activity';
// import WorkoutMap from '../workout_form/map/workout_map'
import { formatDate } from '../../util/date_api_util'


class UserProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
    this.workouts = []
    this.getUserWorkouts = this.getUserWorkouts.bind(this)
  }

  componentDidMount() {
    this.workouts = this.props.fetchUserWorkouts()
    // this.props.fetchUser(this.props.match.params.currentUser)
    // .then(
    //     () => this.setState({ loading: false })
    // )
  }

  subtractDays(time, d) {
    // let test = time;
    // test.setTime(test.getTime() - (d * 24 * 60 * 60 * 1000));
    // return test;
  }

  getLastFourWeeks() {
    // let workouts = this.props.workouts;
    // let end = new Date(workouts[this.props.workouts.length - 1].time);
    // let copy = `${end}`
    // let start = this.subtractDays(end, 28)
    // let newEnd = new Date(copy)
    // return [start, newEnd]
  }

  between(dates, currentDate) {
    // let current = new Date(currentDate)
    // if ((current >= dates[0]) && (current <= dates[1])) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  getElapseTime(workout) {
    // let measuredTime = new Date(null)
    // measuredTime.setSeconds(workout.elapse_time);
    // let MHSTime = measuredTime.toISOString().substr(11, 8);
    // return MHSTime.slice(1)
  }

  getUserWorkouts() {
    let workouts = this.workouts
    let userId = this.props.currentUser
    let userWorkouts = []
    debugger
    // for(let i = 0; i < workouts.length; i++) {
    for (let i = 0; i < 10; i++) {
      if(workouts[i].userId == userId) {
        userWorkouts.push(workouts[i])
      }
    }
    return userWorkouts
  }


  render() {
    // let user = {}
    // let workouts = this.getUserWorkouts()
    // debugger
    
    // user = this.props.users[this.props.currentUser]
    console.log(this.props)
    console.log("Props should be above")
    return (
      <div>
        <br /><br /><br /><br />
        User Profile is here!
        <br/>
        <br/>
        <br /><br />
        <br />
        <br />
        What is happening???
        <br />
        {/* {workouts} */}
        {/* {user.username}
        {workouts} */}
      </div>
    )
  }
}

export default UserProfile;