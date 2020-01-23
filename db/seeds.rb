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

    act_type = doc.xpath('//xmlns:type/text()').map{|pt| pt.to_s}

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

    activity_type = ""
    if act_type[0] == "9"
        activity_type = "Run"
    elsif act_type[0] == "1"
        activity_type = "Bike"
    end

    p activity_type


    duration = gpx.duration()
    distance = gpx.distance(opts = { :units => 'miles' })
    average_speed = gpx.average_speed()
    time = gpx.time()
    Activity.create!(
        "user_id": userId,
        "activity_type": activity_type,
        "title": title[0],
        "description": "So fun",
        "elapse_time": duration,
        "coordinates": route,
        "elevation": ele, 
        "distance": distance,
        "average_speed": average_speed,
        "time": time,
        "time_stamps": all_time
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

    u1 = User.create!(username: "kaminkevcrew", password:"123456", first_name:"Kevin", last_name:"Kaminski")

    u2 = User.create!(username: "annarows", password:"123456", first_name:"Anna", last_name:"Kaminski")
    
    u3 = User.create!(username: "WannbePro", password:"123456", first_name:"Wannabe", last_name:"Pro")

    u4 = User.create!(username: "JoeGo", password:"123456", first_name:"Joe", last_name:"Riggin")
    
    u5 = User.create!(username: "TheFastest", password:"123456", first_name:"Faster", last_name:"Thanu")
    
    u6 = User.create!(username: "tooslowforme", password:"123456", first_name:"Tooslo", last_name:"Forme")
    
    u7 = User.create!(username: "pocketrugger", password:"123456", first_name:"Ricky", last_name:"Theman")
    
    u8 = User.create!(username: "Isain", password:"123456", first_name:"Usain", last_name:"Bolt")
    
    u9 = User.create!(username: "iLoveWalks", password:"123456", first_name:"Sue", last_name:"Pederson")
   
    u10 = User.create!(username: "ColdEesti", password:"123456", first_name:"Kertu", last_name:"Meerbach")
    
    u11 = User.create!(username: "hillsSuck", password:"123456", first_name:"Snowflake", last_name:"Joe")

    u12 = User.create!(username: "HarryPotter", password:"123456", first_name:"Harry", last_name:"Potter")
    
    u13 = User.create!(username: "Indigo", password:"123456", first_name:"Indigo", last_name:"Catton")
    
    u14 = User.create!(username: "johnnydepp", password:"123456", first_name:"Johnny", last_name:"Depp")
    
    u15 = User.create!(username: "brownrowing", password:"123456", first_name:"Kadie", last_name:"Brown")
    


    p "done with users"



    Follow.destroy_all

    Follow.create!(user_id: u1.id, follower_id: u2.id)
    Follow.create!(user_id: u1.id, follower_id: u3.id)
    Follow.create!(user_id: u1.id, follower_id: u4.id)
    Follow.create!(user_id: u1.id, follower_id: u5.id)
    Follow.create!(user_id: u1.id, follower_id: u6.id)
    Follow.create!(user_id: u1.id, follower_id: u7.id)
    Follow.create!(user_id: u1.id, follower_id: u8.id)
    Follow.create!(user_id: u1.id, follower_id: u9.id)
    Follow.create!(user_id: u1.id, follower_id: u10.id)
    Follow.create!(user_id: u1.id, follower_id: u11.id)
    Follow.create!(user_id: u1.id, follower_id: u13.id)
    Follow.create!(user_id: u1.id, follower_id: u14.id)
    Follow.create!(user_id: u1.id, follower_id: u15.id)
    Follow.create!(user_id: u1.id, follower_id: u12.id)


    Follow.create!(user_id: u2.id, follower_id: u1.id)
    Follow.create!(user_id: u3.id, follower_id: u1.id)
    Follow.create!(user_id: u4.id, follower_id: u1.id)
    Follow.create!(user_id: u5.id, follower_id: u1.id)
    Follow.create!(user_id: u6.id, follower_id: u1.id)
    Follow.create!(user_id: u7.id, follower_id: u1.id)
    Follow.create!(user_id: u8.id, follower_id: u1.id)
    Follow.create!(user_id: u9.id, follower_id: u1.id)
    Follow.create!(user_id: u10.id, follower_id: u1.id)
    Follow.create!(user_id: u11.id, follower_id: u1.id)
    Follow.create!(user_id: u12.id, follower_id: u1.id)
    Follow.create!(user_id: u13.id, follower_id: u1.id)
    Follow.create!(user_id: u14.id, follower_id: u1.id)

    Follow.create!(user_id: u10.id, follower_id: u12.id)
    Follow.create!(user_id: u9.id, follower_id: u12.id)
    Follow.create!(user_id: u14.id, follower_id: u12.id)

    Follow.create!(user_id: u7.id, follower_id: u15.id)
    Follow.create!(user_id: u8.id, follower_id: u15.id)
    Follow.create!(user_id: u9.id, follower_id: u15.id)
    Follow.create!(user_id: u10.id, follower_id: u15.id)

    Follow.create!(user_id: u11.id, follower_id: u3.id)
    Follow.create!(user_id: u12.id, follower_id: u3.id)
    Follow.create!(user_id: u13.id, follower_id: u3.id)
    Follow.create!(user_id: u14.id, follower_id: u3.id)

    p "done with follows"
    
    Activity.destroy_all

    p "starting activity....u1"

    file_names_alia[2..-1].each do |file|
        next if File.extname(file) != ".gpx"
        r1 = makeRoute("#{Rails.root}/db/gpx_kevin/#{file}", u1.id)
        Kudo.create!(user_id: u2.id, activity_id: r1.id)
        Kudo.create!(user_id: u3.id, activity_id: r1.id)
        Kudo.create!(user_id: u4.id, activity_id: r1.id)
        Kudo.create!(user_id: u5.id, activity_id: r1.id)
        Kudo.create!(user_id: u6.id, activity_id: r1.id)
        Kudo.create!(user_id: u7.id, activity_id: r1.id)
        Comment.create!(body: "SOOO COOL!", user_id: u1.id, activity_id: r1.id)
        Comment.create!(body: "So so so fast!", user_id: u2.id, activity_id: r1.id)
        Comment.create!(body: "race ya next time", user_id: u3.id, activity_id: r1.id)
    end

     p "starting activity....all users"

    file_names_noah[2..-1].each do |file|
        p "starting u1"
        next if File.extname(file) != ".gpx"
        r3 = makeRoute("#{Rails.root}/db/gpx_noah/#{file}", u3.id)

        Comment.create!(body: "you are a beast!", user_id: u1.id, activity_id: r3.id)
        Comment.create!(body: "dude so fast!", user_id: u2.id, activity_id: r3.id)
        Comment.create!(body: "next time, invite me", user_id: u3.id, activity_id: r3.id)
        Comment.create!(body: "Can I be as cool as you?", user_id: u4.id, activity_id: r3.id)


        Comment.create!(body: "SOOO COOL!", user_id: u1.id, activity_id: r3.id)
        Comment.create!(body: "So so so fast!", user_id: u2.id, activity_id: r3.id)
        Comment.create!(body: "race ya next time", user_id: u3.id, activity_id: r3.id)

        Kudo.create!(user_id: u2.id, activity_id: r3.id)
        Kudo.create!(user_id: u1.id, activity_id: r3.id)
        Kudo.create!(user_id: u10.id, activity_id: r3.id)
        Kudo.create!(user_id: u11.id, activity_id: r3.id)
        Kudo.create!(user_id: u12.id, activity_id: r3.id)
        Kudo.create!(user_id: u15.id, activity_id: r3.id)
        Kudo.create!(user_id: u9.id, activity_id: r3.id)
        Kudo.create!(user_id: u3.id, activity_id: r3.id)
    end

        file_names_peter[2..-1].each do |file|
        p 'starting u2'
        next if File.extname(file) != ".gpx"
        r2 = makeRoute("#{Rails.root}/db/gpx_anna/#{file}", u2.id)

        Comment.create!(body: "you are a beast!", user_id: u1.id, activity_id: r2.id)
        Comment.create!(body: "dude so fast!", user_id: u2.id, activity_id: r2.id)
        Comment.create!(body: "next time, invite me", user_id: u3.id, activity_id: r2.id)
        Comment.create!(body: "send ittt", user_id: u4.id, activity_id: r2.id)


        Comment.create!(body: "SOOO COOL!", user_id: u1.id, activity_id: r2.id)
        Comment.create!(body: "heeeellllla sick!", user_id: u2.id, activity_id: r2.id)
        Comment.create!(body: "im so pumped for you to race", user_id: u12.id, activity_id: r2.id)

        Kudo.create!(user_id: u2.id, activity_id: r2.id)
        Kudo.create!(user_id: u1.id, activity_id: r2.id)
        Kudo.create!(user_id: u10.id, activity_id: r2.id)
        Kudo.create!(user_id: u11.id, activity_id: r2.id)
        Kudo.create!(user_id: u12.id, activity_id: r2.id)
        Kudo.create!(user_id: u15.id, activity_id: r2.id)
        Kudo.create!(user_id: u9.id, activity_id: r2.id)
        Kudo.create!(user_id: u3.id, activity_id: r2.id)
    end

        file_names_anand[2..-1].each do |file|
        p 'starting u3'
        next if File.extname(file) != ".gpx"
        r4 = makeRoute("#{Rails.root}/db/gpx_kertu/#{file}", u4.id)

        Comment.create!(body: "you are a beast!", user_id: u1.id, activity_id: r4.id)
        Comment.create!(body: "dude so fast!", user_id: u2.id, activity_id: r4.id)
        Comment.create!(body: "next time, invite me", user_id: u3.id, activity_id: r4.id)
        Comment.create!(body: "Can I be as cool as you?", user_id: u4.id, activity_id: r4.id)


        Comment.create!(body: "SOOO COOL!", user_id: u1.id, activity_id: r4.id)
        Comment.create!(body: "So so so fast!", user_id: u2.id, activity_id: r4.id)
        Comment.create!(body: "race ya next time", user_id: u3.id, activity_id: r4.id)

        Kudo.create!(user_id: u2.id, activity_id: r4.id)
        Kudo.create!(user_id: u1.id, activity_id: r4.id)
        Kudo.create!(user_id: u10.id, activity_id: r4.id)
        Kudo.create!(user_id: u11.id, activity_id: r4.id)
        Kudo.create!(user_id: u15.id, activity_id: r4.id)
        Kudo.create!(user_id: u12.id, activity_id: r4.id)
        Kudo.create!(user_id: u9.id, activity_id: r4.id)
        Kudo.create!(user_id: u3.id, activity_id: r4.id)
    end
end