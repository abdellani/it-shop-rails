class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.references :product, foreign_key: true
      t.string :ip
      t.string :country
      t.string :city
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
