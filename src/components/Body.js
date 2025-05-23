import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStaus";
import  RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState(""); 
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  // Missing state for selectedRestaurantData that appears in the JSX
  // const [selectedRestaurantData, setSelectedRestaurantData] = useState(null);
   
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/restaurants?lat=12.9715987&lng=77.5945627');
      const json = await response.json();
      console.log("print json");
      console.log(json);

      if (json?.data?.cards) {
        // Find the card that contains the restaurant list
        const restaurantCard = json.data.cards.find(card => 
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
 
        if (restaurantCard) {
          const restaurants = restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
          setlistOfRestaurant(restaurants);
          // we are updating both of them because setFilteredRestaurant will be used for searching
          // if we are searching on the empty search it will appear from the listOfRestaurants
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
                console.log("inside body");
              }}                                 // here for both the seach and the top rated are using the same state variable , as we are using one at a time.
              placeholder="Search restaurants..."
            />
            <button
              className="px-6 py-2 bg-lime-200 border border-lime-300 rounded-r hover:bg-lime-300 transition-colors duration-200"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter(restaurant => 
                  restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="w-full md:w-auto px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition-colors duration-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
    
<RestaurantCard listOfRestaurants={filteredRestaurant} />   
 </div> // the RestaurantCard will show all the data of the restaurant in the imgaes
  );
};

export default Body;

// understanding : wether we are searching for the top rated or we are searching for a specific restaurant, when ever a search will change the state variable it will 
// re-render the compoennt, 