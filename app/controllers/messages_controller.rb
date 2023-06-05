class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def random
    render json: Message.random_message
  end
end
