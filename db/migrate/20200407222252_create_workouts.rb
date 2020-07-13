class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer "athlete_id", null: false
      t.string "title", null: false
      t.text "description", null: false
      t.float "elapsed_time"
      t.string "coordinates"
      t.float "distance"
      t.float "average_speed"
      t.datetime "start_time"
      t.datetime "end_time"
      t.timestamps
    end
    add_index :workouts, :title
    add_index :workouts, :athlete_id
  end
end
