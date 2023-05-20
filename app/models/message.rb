class Message < ApplicationRecord
  def self.random_message
    all.sample
  end
end
