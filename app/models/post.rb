class Post < ApplicationRecord
    belongs_to :User

    validates :title, presence: true, uniqueness: true
    validates :image, presence: true
    validates :content, presence: true

    has_many :comments, dependent: :destroy
end
