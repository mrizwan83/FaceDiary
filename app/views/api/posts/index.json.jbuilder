json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'post', post: post
            json.author post.author
            json.comments post.comments
        end
    end
end