json.set! comment.id do
    json.extract! comment, :id, :user_id, :workout_id, :body
end