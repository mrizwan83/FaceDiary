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

ActiveRecord::Schema.define(version: 2022_08_19_155542) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "post_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
  end

  create_table "friends", force: :cascade do |t|
    t.integer "requester_id", null: false
    t.integer "requestee_id", null: false
    t.boolean "accepted_request", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["requestee_id"], name: "index_friends_on_requestee_id"
    t.index ["requester_id"], name: "index_friends_on_requester_id"
  end

  create_table "posts", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "wall_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["wall_id"], name: "index_posts_on_wall_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "gender", null: false
    t.date "birthday", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.text "bio"
    t.string "city"
    t.string "work"
    t.string "school"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
