class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.references :product, foreign_key: true
      t.references :owner, foreign_key: {to_table: :users}
      t.integer :quantity

      t.timestamps
    end
  end
end
