class UsersController < ApplicationController
    def index
        users = User.all
        render json: {users: users}
    end
    
    def show
        user = User.find_by(id: params[:id])
        if user 
            render json: user
        else
            render json: {error: "user not found"}
        end    
    end  
    
    def create
        user = User.create(username: params[:username], email: params[:email], profile_image: params[:profile_image], password: params[:password])
        if user.valid?
            render json: user, status: :created
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
      end
      
    
    def update
        user = User.find_by(id: params[:id])

        if user
            user.update(title: params[:title], image: params[:image_url], content: params[:content])
            render json: {success: "user updated successfuly"}, status: :created
        else
            render json: {error: "user not found"}
        end        
    end    
    
    def destroy
        user = User.find_by(id: params[:id])

        if user
            user.destroy
            render json: {success: "user deleted successfuly"}, status: :created
        else
            render json: {error: "user you are trying to delete does not existd"}
        end  
    end
    
    def loggedin_user
        user = User.find_by(id: session[:user_id] ) 
        if(user)
           render json: {loggedin: true, user: user}
        else
           render json: {loggedin: false}
        end      
      end

    private

    def user_params
    end    
end
