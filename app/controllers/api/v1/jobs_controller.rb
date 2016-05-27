class Api::V1::JobsController < ApplicationController
  def index
    @jobs = Job.all
  end

  def show
    @job = Job.find_by(id: params[:id])
  end

  def create
    @job = Job.new(title: params[:title],
    description: params[:description], salary: params[:salary])
    if @job.save
      render :show
    else
      render json: {errors: @job.errors.full_messages}, status: 422
    end
  end

  def update
    @job = Job.find_by(id: params[:id])
    @job.update(title: params[:title],
    description: params[:description], salary: params[:salary])
    render :show
  end

  def destroy
    @job = Job.find_by(id: params[:id])
    @job.destroy
    render json: @job
  end
end
