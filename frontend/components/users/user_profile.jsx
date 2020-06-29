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
  }

  componentDidMount() {
    this.props.fetchUserWorkouts()
    // this.props.fetchUser(this.props.match.params.current_user)
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
    let workouts = this.props.workouts
    
  }


  render() {
    // let dateBounds4 = [];
    // let last4 = [];
    let user = {}
    let workouts = {}
    // if (this.props.workouts.length !== 0) {
    //   dateBounds4 = this.getLastFourWeeks()
    //   last4 = this.props.workouts.filter(workout => {
    //     let date = new Date(workout.time)
    //     if (this.between(dateBounds4, date)) return workout
    //   })


    //   user = this.props.users[this.props.match.params.userId]
    // }

    user = this.props.users[this.props.current_user]
    workouts = this.props.workouts[this.props.match.params.current_user]
    

    return (
      // <div>
      //   {this.props.workouts.length === 0 ?
      //     <div className="spinner">
      //       {/* <img src={window.images.spinner} alt="" /> */}
      //     </div>
      //     :
      //     <div className="user-profile-page">
      //       <div id="background-prof">
      //         {/* <img src={window.images.biking2} alt="" /> */}
      //       </div>

      //       <div className="user-content">
      //         <div className="profile-page-picture">
      //           {/* <img src={user.photoUrl} /> */}
      //         </div>

      //         <p id="user-name">{user.first_name} {user.last_name}</p>

      //         <div className="top-section">
      //           <section>
      //             <div id="user-feed-recent-profile">
      //               {/* <UserFeedRecentActivity activity={this.props.workouts} /> */}
      //             </div>
      //             <div id="last-4-weeks">
      //               <p>Last 4 Weeks</p>
      //               {/* <p>{last4.length}</p> */}
      //               {/* <CountUp end={last4.length} delay={2} /> */}
      //               <p>Total Workouts</p>
      //             </div>
      //             <div>
      //               {/* <WorkoutCalendar workouts={last4} bounds={dateBounds4} /> */}
      //             </div>
      //           </section>
      //         </div>
      //       </div>
      //       <div className="user-profile-maps">
      //         <h2> Recent Workouts </h2>
      //         {last4.map(workout => {
      //           return (
      //             <div >
      //               <div id="profile-workout-details">
      //                 <section id="workout-details">
      //                   {/* {workout.workout_type !== 'Bike' ? (
      //                     // <img src={window.images.running_icon} alt="" />
      //                   ) :
      //                     // <img src={window.images.biking_icon} alt="" />
      //                   } */}
      //                   <div id="workout-header-profile">
      //                     <h3 id="workout-title">{workout.title}</h3>
      //                     <p>{formatDate(workout.time)}</p>
      //                   </div>
      //                 </section>
      //                 <section id="show-stats">
      //                   <div>
      //                     <h3>Distance</h3>
      //                     <p>{Math.round(workout.distance * 100) / 100} mi</p>
      //                   </div>
      //                   <section></section>
      //                   <div>
      //                     <h3>Avg Speed</h3>
      //                     <p>{Math.round(workout.average_speed * 100) / 100}</p>
      //                   </div>
      //                   <section></section>
      //                   <div>
      //                     <h3>Time</h3>
      //                     <p>{this.getElapseTime(workout)}</p>
      //                   </div>
      //                 </section>
      //               </div>

      //               {/* <WorkoutMap
      //                 key={workout.id}
      //                 workout={workout}
      //                 interactive={false}
      //                 container={`map-${workout.id}`}
      //               /> */}
      //             </div>
      //           )
      //         })}
      //       </div>
      //     </div>
      //   }
      // </div>
      <div>
        User Profile is here!
        <br/>
        {user.username}
        <br/>
        {workouts}
      </div>
    )
  }
}

export default UserProfile;