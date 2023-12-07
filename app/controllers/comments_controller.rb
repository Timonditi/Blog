class CommentsController < ApplicationController
    def create
        post = Post.find(params[:id])
        comment = post.comments.new(comment_params)
    
        if comment.save
          redirect_to post_path(post), notice: 'Comment was successfully created.'
        else
          redirect_to post_path(post), alert: comment.errors.full_messages.join(', ')
        end
    end
    

	def destroy
        post = Post.find(params[:id])
        comment = post.comments.find(params[:id])
        comment.destroy
        redirect_to post_path(post), notice: 'Comment was successfully destroyed.'
      end
      
   
    def comment_params
        # params.require(:comment).permit(:name, :comment)
    end
end
