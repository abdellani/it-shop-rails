class ChangeDateToDatetimeInVisits < ActiveRecord::Migration[5.2]
  def change
    change_column :visits, :date, :datetime
  end
end
