class AddColumnstoUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bio, :text
    add_column :users, :city, :string
    add_column :users, :work, :string
    add_column :users, :school, :string
  end
end
