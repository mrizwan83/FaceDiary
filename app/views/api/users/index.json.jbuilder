
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end


# line 1 is jbuilder syntax sets explicit key of users which points to inside
# {users:{1: {email: "jjj@aa.io", firstname: "bjhfrfer"}}}
# json.set! creates dynamic key
# Fat Models skinny controllers ===> keep logic out of controller, keep in model ===> logic in model