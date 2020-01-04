# Feed Page

|Category                          |Expected Effort|Expected Time|
|----------------------------------|---------------|-------------|
|Comments                          |       3       |     30      |
|Likes                             |       2       |     15      |
|Current User Recent Activity Stats|       4       |     90      |
|Activity Feed                     |       5       |     120     | 

  ## Comments

  - Create table for comments
    - UserId 
      - Not Unique
      - Presense required
    - CommentId
      - Unique
      - Presence Required
    - Comment Body
      - Not Unique
      - Presence Required
    - ActivityId
      - Not Unique
      - Presence Required
    - Timestamps
  - Add Routes to Back End
    - Create
    - Update
    - Delete
    - Show
    - Index
  - Users have many Comments
  - Activities have many Comments
  - Comments have one User
  - Comments have one Activity

  
  ## Likes

  - Create table for likes
    - LikeId
      - Unique
      - Presence Required
    - UserId 
      - Not Unique
      - Presense required
    - CommentId
      - Not Unique
      - Presence Required
    - ActivityId
      - Not Unique
      - Presence Required
    - Timestamps
  - Add Routes to Back End
    - Create
    - Update
    - Delete
  - Users have many Likes
  - Activities have many Likes
  - Likes have one User
  - Likes have one Activity
  - Likes have one Comment

  ## Activity Feed

  - Create Follows
    - Joins table migration
      - many to many between Users
      - Timestamps
  - Pull activity from current user and their follows
    - Display in order of date created/saved

# Activity Show Page

|Category       |Expected Effort|Expected Time|
|---------------|---------------|-------------|
|Elevation Chart|       5       |     180     |
|Elevation Gain |       2       |      30     |
|Average Speed  |       2       |      30     |
|Time Elapsed   |       3       |      45     |
|Date Completed |       2       |      60     | 

  ## Elevation Chart

  - Check Elevation at each point in GPX file
  - Find minimum Elevation
  - Display chart using min elevation as zero point
  - Highlight the point being hovered over
    - Check position of mouse
    - Find closest position that's on the route
    - Change color of elevation chart at that point

  ## Elevation Gain

  - Find Elevation peaks and valleys
    - Sum all increases in elevation
    - Find max delta for elevation

  ## Average Speed

  - Sum all speed data
    - Divide by number of entries

  ## Time Elapsed

  - Find start and end time
    - Find difference and convert to relevant units

  ## Date Completed

  - Display date activity was uploaded

# Create Route Page

|Category          |Expected Effort|Expected Time|
|------------------|---------------|-------------|
|Show Map          |       2       |      20     |
|Time Estimation   |       4       |      90     |
|Allow for Clicking|       5       |     120     |
|Save Route        |       1       |      30     |

  ## Show Map
  
  - Use already created map component

  ## Time Estimation

  - Find distance and divide by typical cycling speed (16mph)

  ## Allow for Clicking

  - onClick
    - Find pointer location
    - Set point on map
    - Trace back to previous point on map

  ## Save Route

  - Create Table for Routes
    - RouteId
      - Unique
      - Presence Required
    - UserId 
      - Not Unique
      - Presense required
    - Coordinates
      - Presence Required
      - UserId with Coordinates Unique
    - Description
      - Presence Not Required
    - Timestamps
  - Add Routes to Back End
    - Through Users
      - Create
      - Update
      - Delete
      - Show
      - Index
  - Users have many Routes
  - Routes have one User

# User Profile Page

|Category           |Expected Effort|Expected Time|
|-------------------|---------------|-------------|
|Own recent activity|       2       |      30     |
|Monthly Stats      |       3       |      45     |
|Follower Count     |       1       |      20     |
|Following Count    |       1       |      20     |


  ## Own Recent Activity

  - Display activity in reverse chronological order
    - Use React to dynamically add new activities without refreshing

  ## Monthly Stats

  - Display on a calendar
    - each day will have a circle
    - Size of circle is determined by amount of activity

  ## Follower Count

  - Display follower count
    - Count number of entries for a given user

  ## Following Count
  
  - Display following count
    - Count number of entries for a given user«