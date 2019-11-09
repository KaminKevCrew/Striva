users:
| username | password_digest | profile_picture | id |
|----------|-----------------|-----------------|---------|

routes:
| id | athlete_id | description | time |
|----------|------------|-------------|------|

workouts:
| id | workout_title | calories | duration | distance |
|------------|---------------|----------|----------|----------|

```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "KevinK",
        imgUrl: "http://www.profilePicHere.com"
      },
    },
    routes: {
      1: {
        id: 1,
        description: "Check out my workout!",
        athleteId: 1,
        time: 120,
      },
    },
    workouts: {
      1: {
        id: 1,
        workoutTitle: "Running in the park",
        calories: 453,
        duration: 45,
        distance: 2.8
      }
    },
  },
  session: { currentUserId: 1 }
}
```