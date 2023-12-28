class CommentsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]


  def index
    posts = Post.all
    render json: posts.as_json(include: :user)
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
      post = Post.find(params[:id])
      comment = post.comment.new(comment_params)
  
      if comment.save
        redirect_to post_path(post), notice: 'Comment was successfully created.'
      else
        redirect_to post_path(post), alert: comment.errors.full_messages.join(', ')
      end
  end
    

	def destroy
        post = Post.find(params[:id])
        comment = post.comment.find(params[:id])
        comment.destroy
        redirect_to post_path(post), notice: 'Comment was successfully destroyed.'
      end
      
   
    def comment_params
        # params.require(:comment).permit(:username, :comment)
    end
end
