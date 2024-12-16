import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStaus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(""); 
  const [filteredRestaurant, setfilteredRestaurant] = useState([]); 
   
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/restaurants?lat=12.9715987&lng=77.5945627');
      const json = await response.json();

      if (json?.data?.cards) {
        // Find the card that contains the restaurant list
        const restaurantCard = json.data.cards.find(card => 
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
 
        if (restaurantCard) {
          const restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
          setlistOfRestaurant(restaurants);
          setfilteredRestaurant(restaurants);
          console.log("Restaurants fetched successfully:", restaurants);
        } else {
          console.error('Could not find restaurant data in the API response:', json);
        }
      } else {
        console.error('Unexpected API response structure:', json);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  }; 
     
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex w-full md:w-auto">
            <input
              type="text"
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-lime-200"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search restaurants..."
            />
            <button
              className="px-6 py-2 bg-lime-200 border border-lime-300 rounded-r hover:bg-lime-300 transition-colors duration-200"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter(restaurant => 
                  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="w-full md:w-auto px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors duration-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {filteredRestaurant.map((restaurant) => (
          <Link 
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <img 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                alt={restaurant.info.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold text-lg truncate">{restaurant.info.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{restaurant.info.cuisines.join(", ")}</p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <span className={`px-2 py-1 rounded ${
                      restaurant.info.avgRating >= 4 ? 'bg-green-500' : 'bg-orange-500'
                    } text-white text-sm`}>
                      ★ {restaurant.info.avgRating}
                    </span>
                  </span>
                  <span className="text-gray-600 text-sm">{restaurant.info.sla.deliveryTime} mins</span>
                </div>
                <p className="text-gray-600 text-sm truncate">{restaurant.info.locality}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;