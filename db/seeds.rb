# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

100.times do
  Job.create(
    title: Faker::Name.title,
    description: Faker::Company.profession,
    salary: Faker::Commerce.price*10000.round,
  )
end
