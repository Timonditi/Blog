class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end
    
    def show
        post = Post.find_by(id: params[:id])
        if post
            render json: post
        else
            render json: {error: "post not found"}, status: :not_found
        end        
    end
    
    def create
        post = Post.create(title: params[:title], image: params[:image], content: params[:content], user_id: params[:user_id])
        if post.valid?
            render json: {success: "Post created successfully"}
        else
            render json: {error: post.errors.full_messages}, status: :unprocessable_entity
        end               
    end
    
    def update
        post = Post.find_by(id: params[:id])

        if post
            post.update(title: params[:title], image: params[:image], content: params[:content], user_id: params[:user_id])
            render json: {success: "post updated successful"}, status: :created
        else
            render json: {error: "post not found"}, status: :not_found
        end
    end
    
    def destroy
        post = Post.find_by(id: params[:id])
        if post
            post.destroy
            render json: {success: "post deleted successful"}, status: :created
        else
            render json: {error: "post you are trying to delete does not exist"}, status: :not_found
        end        
    end    
end
