json.workouts do 
  @workouts.each do |workout|
    json.set! workout.id do
      json.partial! 'workout', workout: workout
    end
  end
end

# json.comments do 
#   @workouts.each do |workout|
#     workout.comments.each do |comment|
#       json.partial! 'api/comments/comment', comment: comment
#     end
#   end
# end

# json.kudos do 
#   @workouts.each do |workout|
#     workout.kudos.each do |kudo|
#       json.partial! 'api/kudos/kudo', kudo: kudo
#     end
#   end
# end