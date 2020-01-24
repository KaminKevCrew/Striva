class Workouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.string :workout_type, null: false
      t.string :title
      t.string :description
      t.float :elapse_time
      t.string :elevation
      t.string :coordinates
      t.float :distance
      t.float :average_speed
      t.datetime :time
      t.text :time_stamp

      t.timestamps
    end
    add_index :workouts, :user_id
    add_index :workouts, :title
  end
end