class AddRefererReferencesToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :referer
  end
end
