# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#New Work/ Seeding/ Must clean existing database before seeding

Comment.destroy_all
Friend.destroy_all
Like.destroy_all
Post.destroy_all
User.destroy_all

#Lets make demo user/ my profile

rizzy = User.create!(email: "mhrizwandev@gmail.com", password: "starwars", firstname: "Mohammad", lastname: "Rizwan", gender: "Male", birthday: "1993-11-23", city: "New York", work: "Software Engineer", school: "App Academy", bio: "Hello, I am a developer and I created this FaceBook Clone!" )
demoUser = User.create!(email: "demo@appacademy.io", password: "starwars", firstname: "Demo", lastname: "User", gender: "Other", birthday: "2000-11-11", city: "New York", work: "Software Engineer", school: "App Academy", bio: "Hello, I am a Demo User!" )

# Create additional users
user1 = User.create!(email: "user1@example.com", password: "password", firstname: "John", lastname: "Doe", gender: "Male", birthday: "1990-01-01", city: "New York", work: "Engineer", school: "University", bio: "I'm user1.")
user2 = User.create!(email: "user2@example.com", password: "password", firstname: "Jane", lastname: "Smith", gender: "Female", birthday: "1992-02-02", city: "San Francisco", work: "Designer", school: "College", bio: "I'm user2.")
user3 = User.create!(email: "user3@example.com", password: "password", firstname: "Emma", lastname: "Johnson", gender: "Female", birthday: "1995-04-15", city: "Los Angeles", work: "Marketing Specialist", school: "University of California", bio: "Passionate about digital marketing!")
user4 = User.create!(email: "user4@example.com", password: "password", firstname: "Michael", lastname: "Lee", gender: "Male", birthday: "1988-09-03", city: "Chicago", work: "Accountant", school: "University of Chicago", bio: "Numbers are my thing!")
user5 = User.create!(email: "user5@example.com", password: "password", firstname: "Sophia", lastname: "Williams", gender: "Female", birthday: "1998-07-22", city: "London", work: "Graphic Designer", school: "Central Saint Martins", bio: "Passionate about art and design!")
user6 = User.create!(email: "user6@example.com", password: "password", firstname: "Daniel", lastname: "Brown", gender: "Male", birthday: "1992-12-10", city: "Sydney", work: "Photographer", school: "University of Sydney", bio: "Capturing moments through my lens!")



# Create friendships
Friend.create!(requester_id: rizzy.id, requestee_id: demoUser.id, accepted_request: true)
Friend.create!(requester_id: rizzy.id, requestee_id: user1.id, accepted_request: true)
Friend.create!(requester_id: rizzy.id, requestee_id: user2.id, accepted_request: true)
Friend.create!(requester_id: rizzy.id, requestee_id: user3.id, accepted_request: true)
Friend.create!(requester_id: rizzy.id, requestee_id: user4.id, accepted_request: true)
Friend.create!(requester_id: rizzy.id, requestee_id: user5.id, accepted_request: true)
Friend.create!(requester_id: rizzy.id, requestee_id: user6.id, accepted_request: true)

# More friendships

Friend.create!(requester_id: demoUser.id, requestee_id: user5.id, accepted_request: true)
Friend.create!(requester_id: demoUser.id, requestee_id: user1.id, accepted_request: true)
Friend.create!(requester_id: demoUser.id, requestee_id: user6.id, accepted_request: true)
Friend.create!(requester_id: user2.id, requestee_id: user5.id, accepted_request: true)
Friend.create!(requester_id: user3.id, requestee_id: user1.id, accepted_request: true)





# Create post seed data
post1 = Post.create!(body: "Hello, world!", author: rizzy)
post2 = Post.create!(body: "I love coding!", author: demoUser)
post3 = Post.create!(body: "Having a great day!", author: user1)
5.times do
    random_user = User.all.sample
    Post.create!(body: "Having a wonderful day!", author: random_user)
  end
Post.create!(body: "Feeling inspired!", author: user2)
Post.create!(body: "Excited about new projects!", author: user3)
Post.create!(body: "Balancing numbers and spreadsheets!", author: user4)
Post.create!(body: "Exploring new art techniques!", author: user5)
Post.create!(body: "Capturing beautiful moments!", author: user6)



# Create comment seed data
Comment.create!(body: "Great post!", author: rizzy, post: post1)
Comment.create!(body: "Nice work!", author: demoUser, post: post2)
Comment.create!(body: "Interesting thoughts!", author: rizzy, post: post3)
Comment.create!(body: "Keep it up!", author: demoUser, post: post1)

# Add more random comments
10.times do
  random_user = User.all.sample
  random_post = Post.all.sample
  Comment.create!(body: "Let's gets it!", author: random_user, post: random_post)
end

# Create like seed data
Like.create!(liker: rizzy, post: post1)
Like.create!(liker: demoUser, post: post2)
Like.create!(liker: rizzy, post: post2)
Like.create!(liker: demoUser, post: post1)

# Add more random likes
10.times do
  random_user = User.all.sample
  random_post = Post.all.sample
  Like.create!(liker: random_user, post: random_post)
end