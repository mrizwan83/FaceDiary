class Api::FriendsController < ApplicationController

    def create
        @friend = Friend.new(friend_params)
        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def index
        @friends = Friend.all
        render :index
    end

    def show
        @friend = Friend.find_by(id: params[:id])
        render :show
    end

    def update
        @friend = Friend.find(params[:id])
        if @friend.update(friend_params)
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find(params[:id])
        if @friend.destroy
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private
    def friend_params
        params.require(:friend).permit(:requester_id, :requestee_id, :accepted_request)
    end
end