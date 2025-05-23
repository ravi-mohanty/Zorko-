import { Link } from "react-router-dom";
import Awesome from "./Awesome";
const RestaurantCard = ({listOfRestaurants}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
  {listOfRestaurants.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={"/restaurant/" + restaurant.info.id}
      className="transform hover:scale-105 transition-transform duration-200"
    >
      <div className="relative bg-white p-4 rounded-lg shadow-md h-full">
        {/* Add the "Awesome" label for restaurants with a rating greater than 4.5 */}
        {<Awesome restaurant = {restaurant}/>}
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`}
          alt={restaurant.info.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="space-y-2">
          <h3 className="font-bold text-lg truncate">{restaurant.info.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {restaurant.info.cuisines.join(", ")}
          </p>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <span
                className={`px-2 py-1 rounded ${          // this is for the small rating box
                  restaurant.info.avgRating >= 4
                    ? "bg-green-500"
                    : "bg-orange-500"
                } text-white text-sm`}
              >
                ★ {restaurant.info.avgRating}
              </span>
            </span>
            <span className="text-gray-600 text-sm">
              {restaurant.info.sla.deliveryTime} mins
            </span>
          </div>
          <p className="text-gray-600 text-sm truncate">
            {restaurant.info.locality}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>
    )
}
export default RestaurantCard;