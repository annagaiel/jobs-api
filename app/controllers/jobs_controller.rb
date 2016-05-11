class JobsController < ApplicationController
  def index
    @jobs = Job.all
  end

  def show
    @job = Job.find_by(id: params[:id])
  end

  def create
    @job = Job.new(title: params[:title],
    description: params[:description], salary: params[:salary])
    @job.save

    render :show
  end
end
