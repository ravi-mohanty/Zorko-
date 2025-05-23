import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Shimmer from "./shimmer";
import RestaurantMenu from "./RestaurantMenunotworking";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [selectedRestaurantData, setSelectedRestaurantData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/restaurants?lat=12.9715987&lng=77.5945627"
      );
      const json = await response.json();

      if (json?.data?.cards) {
        const restaurantCard = json.data.cards.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        if (restaurantCard) {
          const restaurants =
            restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
          setlistOfRestaurant(restaurants);
          setfilteredRestaurant(restaurants);
        } else {
          console.error(
            "Could not find restaurant data in the API response:",
            json
          );
        }
      } else {
        console.error("Unexpected API response structure:", json);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const fetchRestaurantMenu = async (restaurantId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/restaurant/${restaurantId}`
      );
      const json = await response.json();
      setSelectedRestaurantData(json?.data?.menu);
      navigate(`/restaurant/${restaurantId}`);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {filteredRestaurant.map((restaurant) => (
          <div
            key={restaurant.info.id}
            className="transform hover:scale-105 transition-transform duration-200"
            onClick={() => fetchRestaurantMenu(restaurant.info.id)}
          >
            <div className="bg-white p-4 rounded-lg shadow-md h-full">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
                alt={restaurant.info.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <h3 className="font-bold text-lg truncate">
                  {restaurant.info.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {restaurant.info.cuisines.join(", ")}
                </p>
                <p className="text-gray-600 text-sm">
                  {restaurant.info.sla.deliveryTime} mins
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render RestaurantMenu if a restaurant is selected */}
      {selectedRestaurantData && (
        <RestaurantMenu data={selectedRestaurantData} />
      )}
    </div>
  );
};

export default Body;