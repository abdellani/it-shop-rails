class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.references :owner, foreign_key: {to_table: :users}
      t.string :name
      t.text :description
      t.float :price
      t.integer :quantity
      t.string :category

      t.timestamps
    end
  end
end
