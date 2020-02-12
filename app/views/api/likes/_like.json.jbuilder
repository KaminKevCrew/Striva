json.set! like.id do
    json.extract! like, :id, :user_id, :workout_id
end