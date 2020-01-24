class Likes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :workout_id, null: false, indexed: true
      t.integer :user_id, null: false, indexed: true
      t.timestamps
    end
    add_index :likes, [:user_id, :workout_id], unique: true
  end
end
