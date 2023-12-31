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
    comment = post.comments.new(name: params[:name], comment: params[:comment])
  
    if comment.save
      render json: comment
    else
      render json: {error: comment.errors.full_messages}
    end
  end
  
  
    

  def destroy
    post = Post.find(params[:id])
    comment = post.comments.find_by(id: params[:comment_id])
    
    if comment
      comment.destroy
      redirect_to post_path(post), notice: 'Comment was successfully destroyed.'
    else
      redirect_to post_path(post), alert: 'Comment not found.'
    end
  end
  
      
   
    def comment_params
        # params.require(:comment).permit(:name, :comment)
    end
end
