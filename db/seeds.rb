# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


### testing out the seeding 
#require 'nokogiri'
#require 'GPX'

puts "here"
# Distance = sqrt((miles_per_degree_latitude*latitude)^2 + (miles_per_degree_longitude*l longitude)^2)

def makeRoute(path, userId)
  # path = "/Users/aliashafi/Documents/AppAcademy/Projects/summit/db/gpx/Morning_Ride_1.gpx"
  doc = Nokogiri::XML(open(path))
  gpx =  GPX::GPXFile.new(:gpx_file => path)

  lon = doc.xpath('//xmlns:trkpt/@lon').map{|pt| pt.to_s.to_f}
  lat = doc.xpath('//xmlns:trkpt/@lat').map{|pt| pt.to_s.to_f}

  work_type = doc.xpath('//xmlns:type/text()').map{|pt| pt.to_s}

  route = {}
  (0..lat.length).each do |c|
    route[c] = [lon[c],lat[c]]
  end
  route = route.to_json

  ele = doc.xpath('//xmlns:ele/text()').map{|pt| pt.to_s.to_f}
  ele = ele.to_json
  title = doc.xpath('//xmlns:name/text()').map{|pt| pt.to_s}
  
  all_time = doc.xpath('//xmlns:time/text()').map{|pt| pt.to_s}
  all_time = all_time.to_json

  workout_type = ""
  if work_type[0] == "9"
    workout_type = "Run"
  elsif work_type[0] == "1"
    workout_type = "Bike"
  end

  p workout_type


  duration = gpx.duration()
  distance = gpx.distance(opts = { :units => 'miles' })
  average_speed = gpx.average_speed()
  # time = gpx.time()
  Workout.create!(
    "athlete_id": userId,
    # "workout_type": workout_type,
    "title": title[0],
    "description": "So fun",
    "elapsed_time": duration,
    "coordinates": route,
    # "elevation": ele, 
    "distance": distance,
    "average_speed": average_speed,
    # "time": time,
    # "time_stamps": all_time
  )
end

file_names_kevin = Dir.entries("#{Rails.root}/db/gpx_kevin")
file_names_anna = Dir.entries("#{Rails.root}/db/gpx_anna")
file_names_kertu = Dir.entries("#{Rails.root}/db/gpx_kertu")
file_names_joe = Dir.entries("#{Rails.root}/db/gpx_joe")

puts "files!"


ActiveRecord::Base.transaction do

  User.destroy_all

  puts "starting users.."

  u1 = User.create!(username: "kaminkevcrew", password:"123456")
  u2 = User.create!(username: "annarows", password:"123456")
  u3 = User.create!(username: "WannbePro", password:"123456")
  u4 = User.create!(username: "JoeGo", password:"123456")
  u5 = User.create!(username: "TheFastest", password:"123456")
  u6 = User.create!(username: "tooslowforme", password:"123456")
  u7 = User.create!(username: "pocketrugger", password:"123456")
  u8 = User.create!(username: "Isain", password:"123456")
  u9 = User.create!(username: "iLoveWalks", password:"123456")
  u10 = User.create!(username: "ColdEesti", password:"123456")
  u11 = User.create!(username: "hillsSuck", password:"123456")
  u12 = User.create!(username: "HarryPotter", password:"123456")
  u13 = User.create!(username: "Indigo", password:"123456")
  u14 = User.create!(username: "johnnydepp", password:"123456")
  u15 = User.create!(username: "brownrowing", password:"123456")
  
  p "done with users"

  Follow.destroy_all

  Follow.create!(followee_id: u1.id, follower_id: u2.id)
  Follow.create!(followee_id: u1.id, follower_id: u3.id)
  Follow.create!(followee_id: u1.id, follower_id: u4.id)
  Follow.create!(followee_id: u1.id, follower_id: u5.id)
  Follow.create!(followee_id: u1.id, follower_id: u6.id)
  Follow.create!(followee_id: u1.id, follower_id: u7.id)
  Follow.create!(followee_id: u1.id, follower_id: u8.id)
  Follow.create!(followee_id: u1.id, follower_id: u9.id)
  Follow.create!(followee_id: u1.id, follower_id: u10.id)
  Follow.create!(followee_id: u1.id, follower_id: u11.id)
  Follow.create!(followee_id: u1.id, follower_id: u13.id)
  Follow.create!(followee_id: u1.id, follower_id: u14.id)
  Follow.create!(followee_id: u1.id, follower_id: u15.id)
  Follow.create!(followee_id: u1.id, follower_id: u12.id)

  Follow.create!(followee_id: u2.id, follower_id: u1.id)
  Follow.create!(followee_id: u3.id, follower_id: u1.id)
  Follow.create!(followee_id: u4.id, follower_id: u1.id)
  Follow.create!(followee_id: u5.id, follower_id: u1.id)
  Follow.create!(followee_id: u6.id, follower_id: u1.id)
  Follow.create!(followee_id: u7.id, follower_id: u1.id)
  Follow.create!(followee_id: u8.id, follower_id: u1.id)
  Follow.create!(followee_id: u9.id, follower_id: u1.id)
  Follow.create!(followee_id: u10.id, follower_id: u1.id)
  Follow.create!(followee_id: u11.id, follower_id: u1.id)
  Follow.create!(followee_id: u12.id, follower_id: u1.id)
  Follow.create!(followee_id: u13.id, follower_id: u1.id)
  Follow.create!(followee_id: u14.id, follower_id: u1.id)

  Follow.create!(followee_id: u10.id, follower_id: u12.id)
  Follow.create!(followee_id: u9.id, follower_id: u12.id)
  Follow.create!(followee_id: u14.id, follower_id: u12.id)

  Follow.create!(followee_id: u7.id, follower_id: u15.id)
  Follow.create!(followee_id: u8.id, follower_id: u15.id)
  Follow.create!(followee_id: u9.id, follower_id: u15.id)
  Follow.create!(followee_id: u10.id, follower_id: u15.id)

  Follow.create!(followee_id: u11.id, follower_id: u3.id)
  Follow.create!(followee_id: u12.id, follower_id: u3.id)
  Follow.create!(followee_id: u13.id, follower_id: u3.id)
  Follow.create!(followee_id: u14.id, follower_id: u3.id)

  p "done with follows"
  
  Workout.destroy_all

  p "starting workout....u1"

  file_names_kevin[2..-1].each do |file|
      next if File.extname(file) != ".gpx"
      r1 = makeRoute("#{Rails.root}/db/gpx_kevin/#{file}", u1.id)
      Like.create!(user_id: u2.id, workout_id: r1.id)
      Like.create!(user_id: u3.id, workout_id: r1.id)
      Like.create!(user_id: u4.id, workout_id: r1.id)
      Like.create!(user_id: u5.id, workout_id: r1.id)
      Like.create!(user_id: u6.id, workout_id: r1.id)
      Like.create!(user_id: u7.id, workout_id: r1.id)
      # Comment.create!(body: "SOOO COOL!", user_id: u1.id, workout_id: r1.id)
      # Comment.create!(body: "So so so fast!", user_id: u2.id, workout_id: r1.id)
      # Comment.create!(body: "race ya next time", user_id: u3.id, workout_id: r1.id)
  end

    p "starting workout....all users"

  file_names_joe[2..-1].each do |file|
    p "starting u1"
    next if File.extname(file) != ".gpx"
    r3 = makeRoute("#{Rails.root}/db/gpx_joe/#{file}", u3.id)

    # Comment.create!(body: "you are a beast!", user_id: u1.id, workout_id: r3.id)
    # Comment.create!(body: "dude so fast!", user_id: u2.id, workout_id: r3.id)
    # Comment.create!(body: "next time, invite me", user_id: u3.id, workout_id: r3.id)
    # Comment.create!(body: "Can I be as cool as you?", user_id: u4.id, workout_id: r3.id)


    # Comment.create!(body: "SOOO COOL!", user_id: u1.id, workout_id: r3.id)
    # Comment.create!(body: "So so so fast!", user_id: u2.id, workout_id: r3.id)
    # Comment.create!(body: "race ya next time", user_id: u3.id, workout_id: r3.id)

    Like.create!(user_id: u2.id, workout_id: r3.id)
    Like.create!(user_id: u1.id, workout_id: r3.id)
    Like.create!(user_id: u10.id, workout_id: r3.id)
    Like.create!(user_id: u11.id, workout_id: r3.id)
    Like.create!(user_id: u12.id, workout_id: r3.id)
    Like.create!(user_id: u15.id, workout_id: r3.id)
    Like.create!(user_id: u9.id, workout_id: r3.id)
    Like.create!(user_id: u3.id, workout_id: r3.id)
  end

  file_names_anna[2..-1].each do |file|
    p 'starting u2'
    next if File.extname(file) != ".gpx"
    r2 = makeRoute("#{Rails.root}/db/gpx_anna/#{file}", u2.id)

    # Comment.create!(body: "you are a beast!", user_id: u1.id, workout_id: r2.id)
    # Comment.create!(body: "dude so fast!", user_id: u2.id, workout_id: r2.id)
    # Comment.create!(body: "next time, invite me", user_id: u3.id, workout_id: r2.id)
    # Comment.create!(body: "send ittt", user_id: u4.id, workout_id: r2.id)


    # Comment.create!(body: "SOOO COOL!", user_id: u1.id, workout_id: r2.id)
    # Comment.create!(body: "heeeellllla sick!", user_id: u2.id, workout_id: r2.id)
    # Comment.create!(body: "im so pumped for you to race", user_id: u12.id, workout_id: r2.id)

    Like.create!(user_id: u2.id, workout_id: r2.id)
    Like.create!(user_id: u1.id, workout_id: r2.id)
    Like.create!(user_id: u10.id, workout_id: r2.id)
    Like.create!(user_id: u11.id, workout_id: r2.id)
    Like.create!(user_id: u12.id, workout_id: r2.id)
    Like.create!(user_id: u15.id, workout_id: r2.id)
    Like.create!(user_id: u9.id, workout_id: r2.id)
    Like.create!(user_id: u3.id, workout_id: r2.id)
  end

  file_names_kertu[2..-1].each do |file|
    p 'starting u3'
    next if File.extname(file) != ".gpx"
    r4 = makeRoute("#{Rails.root}/db/gpx_kertu/#{file}", u4.id)

    # Comment.create!(body: "you are a beast!", user_id: u1.id, workout_id: r4.id)
    # Comment.create!(body: "dude so fast!", user_id: u2.id, workout_id: r4.id)
    # Comment.create!(body: "next time, invite me", user_id: u3.id, workout_id: r4.id)
    # Comment.create!(body: "Can I be as cool as you?", user_id: u4.id, workout_id: r4.id)


    # Comment.create!(body: "SOOO COOL!", user_id: u1.id, workout_id: r4.id)
    # Comment.create!(body: "So so so fast!", user_id: u2.id, workout_id: r4.id)
    # Comment.create!(body: "race ya next time", user_id: u3.id, workout_id: r4.id)

    Like.create!(user_id: u2.id, workout_id: r4.id)
    Like.create!(user_id: u1.id, workout_id: r4.id)
    Like.create!(user_id: u10.id, workout_id: r4.id)
    Like.create!(user_id: u11.id, workout_id: r4.id)
    Like.create!(user_id: u15.id, workout_id: r4.id)
    Like.create!(user_id: u12.id, workout_id: r4.id)
    Like.create!(user_id: u9.id, workout_id: r4.id)
    Like.create!(user_id: u3.id, workout_id: r4.id)
  end
end