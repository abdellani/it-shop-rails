class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.string :content
      t.date :read_at
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
