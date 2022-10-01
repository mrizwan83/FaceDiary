json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'post', post: post
            json.author post.author
        end
    end
end