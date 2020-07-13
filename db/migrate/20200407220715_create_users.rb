class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "username", null: false
      t.string "session_token", null: false
      t.string "password_digest", null: false
      t.timestamps
    end
    add_index :users, :username, name: "index_users_on_username",unique: true
    add_index :users, :session_token, name: "index_users_on_session_token"
  end
end
