class Post < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :image, presence: true
    validates :content, presence: true

    has_many :comments, dependent: :destroy
    belongs_to :User

end
