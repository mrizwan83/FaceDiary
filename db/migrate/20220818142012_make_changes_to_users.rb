class MakeChangesToUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    add_column :users, :firstname, :string, null: false 
    add_column :users, :lastname, :string ,null: false 
  end
end
