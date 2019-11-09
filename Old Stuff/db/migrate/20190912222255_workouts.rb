class Workouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :workout_type
      t.string :title
      t.text :description
      t.float :lat
      t.float :lng
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :workouts, :user_id, unique: true
  end
end
