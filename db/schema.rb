# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_24_231350) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "owner_id"
    t.bigint "product_id"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_comments_on_owner_id"
    t.index ["product_id"], name: "index_comments_on_product_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.string "content"
    t.date "read_at"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "product_id"
    t.bigint "owner_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_orders_on_owner_id"
    t.index ["product_id"], name: "index_orders_on_product_id"
  end

  create_table "photos", force: :cascade do |t|
    t.bigint "product_id"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_photos_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.bigint "owner_id"
    t.string "name"
    t.text "description"
    t.float "price"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_products_on_owner_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "access_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "visits", force: :cascade do |t|
    t.bigint "product_id"
    t.string "ip"
    t.datetime "date"
    t.string "country"
    t.string "city"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_visits_on_product_id"
  end

  add_foreign_key "comments", "products"
  add_foreign_key "comments", "users", column: "owner_id"
  add_foreign_key "notifications", "users"
  add_foreign_key "orders", "products"
  add_foreign_key "orders", "users", column: "owner_id"
  add_foreign_key "photos", "products"
  add_foreign_key "products", "users", column: "owner_id"
  add_foreign_key "visits", "products"
end
