require "rest-client"

class IpDetails
  def self.get_details(visit)
    result = RestClient.get "http://api.ipstack.com/#{visit.ip}?access_key=#{ENV["IPSTACK_KEY"]}&output=json"
    result = JSON(result)
    country, city, latitude, longitude = result["country_name"], result["city"], result["latitude"], result["longitude"]
    visit.update_attributes({ country: country, city: city, latitude: latitude, longitude: longitude })
  end
end
