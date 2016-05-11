json.array! @jobs.each do |job|
  json.partial! 'jobs', job: job
end
