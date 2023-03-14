# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create()


#New Work/ Seeding/ Must clean existing database before seeding

Comment.destroy_all
Friend.destroy_all
Like.destroy_all
Post.destroy_all
User.destroy_all

#Lets make demo user/ my profile

rizzy = User.create!(email: "mhrizwandev@gmail.com", password: "starwars", firstname: "Mohammad", lastname: "Rizwan", gender: "Male", birthday: "1993-11-23", city: "New York", work: "Software Engineer", school: "App Academy", bio: "Hello, I am a developer and I created this FaceBook Clone!" )
demoUser = User.create!(email: "demo@appacademy.io", password: "starwars", firstname: "Demo", lastname: "User", gender: "Other", birthday: "2000-11-11", city: "New York", work: "Software Engineer", school: "App Academy", bio: "Hello, I am a Demo User!" )