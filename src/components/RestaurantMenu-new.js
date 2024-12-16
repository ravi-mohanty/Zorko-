import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu1";
import Shimmer from "./shimmer_old"; // Assuming you have a loading shimmer component

const RestaurantMenu = () => {
  const { menuItems, loading, error } = useRestaurantMenu();

  if (loading) return <Shimmer />;
  if (error) return <div>Error loading menu: {error.message}</div>;
  if (!menuItems || menuItems.length === 0) return <div>No menu items found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended Items</h2>
      <div className="space-y-4">
        {menuItems.map((item) => (
          <div 
            key={item.id} 
            className="border p-4 rounded-lg shadow-sm"
          >
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-600">
              Price: ₹{(item.price / 100).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Description: {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;