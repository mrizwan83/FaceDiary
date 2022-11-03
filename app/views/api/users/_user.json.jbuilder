json.extract! user, :email, :id, :firstname, :lastname, :bio, :birthday, :gender, :city, :work, :school
json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?


# when adding :likes, :comment to end of partial, we get error for comments when pre-fetching or not pre-fetchin to save on the N+1 queries