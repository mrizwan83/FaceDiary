json.extract! post, :id, :body, :author_id, :created_at
json.postPhoto url_for(post.photo) if post.photo.attached?