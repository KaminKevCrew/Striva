@routes.each do |route|
    json.partial! 'route', route: route
end

# Haven't quite finished my routes#index yet.