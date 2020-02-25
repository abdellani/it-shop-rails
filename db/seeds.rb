# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
require "base64"
Visit.all.each(&:destroy)
Photo.all.each(&:destroy)
Comment.all.each(&:destroy)
Order.all.each(&:destroy)
Notification.all.each(&:destroy)
Product.all.each(&:destroy)
User.all.each(&:destroy)
visits = [
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "Algeria",
    city: "Algiers",
    latitude: 36.7538,
    longitude: 3.0588,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "South Africa",
    city: "Johannesburg",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "India",
    city: "Delhi",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "Russia",
    city: "Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "Australia",
    city: "Perth",
    latitude: -31.9505,
    longitude: 115.8605,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "China",
    city: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "USA",
    city: "New York",
    latitude: 40.7128,
    longitude: -74.0060,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "Hungary",
    city: "Budapest",
    latitude: 47.4979,
    longitude: 19.0402,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "Germany",
    city: "Berlin",
    latitude: 52.5200,
    longitude: 13.4050,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "England",
    city: "London",
    latitude: 51.5074,
    longitude: 0.1278,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "Italy",
    city: "Roma",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    ip: "0.0.0.0",
    date: Time.new,
    country: "France",
    city: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
]
users = []
10.times do |i|
  users << User.create(
    {
      email: "user#{i + 1}@example.com",
      name: Faker::Name.name,
      password: "123456",
    }
  )
end
photos = []
5.times do |i|
  photos << "data:image/png;base64," + Base64.strict_encode64(+File.open("db/seed/photos/#{i}.jpg").read)
end
products = []
users[0, 5].each do |user|
  3.times do
    product = user.products.new({
      name: Faker::Lorem.sentence(word_count: 3),
      description: Faker::Lorem.paragraph(
        sentence_count: 5,
        supplemental: false,
        random_sentences_to_add: 8,
      ),
      price: ((rand * 1000 + 250) % 1000).to_i,
      category: "smartphone",
    })
    product.photos.new(content: photos.sample)
    product.save
    products << product
  end
end
products.each do |product|
  5.times do
    user = users.sample
    product.comments.create({
      owner: user,
      content: Faker::Lorem.paragraph(
        sentence_count: 2,
        supplemental: false,
        random_sentences_to_add: 4,
      ),
    })
    product.visits.create(visits.sample)
  end
end
