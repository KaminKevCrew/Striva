class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer "follower_id", null: false
      t.integer "followee_id", null: false
      t.timestamps
    end
    add_index :follows, :follower_id, name: "index_follows_on_follower_id"
    add_index :follows, :followee_id, name: "index_follows_on_followee_id"
  end
end
