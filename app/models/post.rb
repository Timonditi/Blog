class Post < ApplicationRecord
    # belongs_to :User
    has_many :comment

    validates :title, presence: true, uniqueness: true
    validates :image, presence: true
    validates :content, presence: true
    validates :author, presence: true
end
