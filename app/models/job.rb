class Job < ActiveRecord::Base
  validates :title, presence: true
  validates :description, presence: true
  validates :salary, presence: true
end
