class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :owner, foreign_key: {to_table: :users}
      t.references :product, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
