class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: {posts: posts}
    end
    
    def show
        post = Post.find_by(id: params[:id])
        if post 
            render json: post
        else
            render json: {error: "post not found"}
        end    
    end  
    
    def create
        post = Post.create(post_params)

        if post.valid?
            render json: post, status: :created
          else
            render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
          end
      end
      
    
    def update
        post = Post.find_by(id: params[:id])

        if post
            post.update(title: params[:title], image: params[:image_url], content: params[:content])
            render json: {success: "post updated successfuly"}, status: :created
        else
            render json: {error: "post not found"}
        end        
    end    
    
    def destroy
        post = Post.find_by(id: params[:id])

        if post
            post.destroy
            render json: {success: "post deleted successfuly"}, status: :created
        else
            render json: {error: "post you are trying to delete does not existd"}
        end  
    end    

    private
    def post_params
        params.permit(:title, :image_url, :content, :user_id)
    end
   
end
