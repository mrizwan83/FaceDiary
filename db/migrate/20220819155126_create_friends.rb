class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :requester_id, null: false 
      t.integer :requestee_id, null: false 
      t.boolean :accepted_request, default: false 
      t.timestamps
    end
    add_index :friends, :requester_id
    add_index :friends, :requestee_id
  end
end
