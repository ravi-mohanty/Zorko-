import React, { useState, useEffect } from 'react';

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [quantities, setQuantities] = useState({});

  const handleAddItem = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const handleRemoveItem = (itemId) => {
    setQuantities(prev => {
      const newQuantity = (prev[itemId] || 0) - 1;
      if (newQuantity < 1) {
        const newQuantities = { ...prev };
        delete newQuantities[itemId];
        return newQuantities;
      }
      return {
        ...prev,
        [itemId]: newQuantity
      };
    });
  };

  const fetchData = async () => {
    try {
      const resData = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=297778&catalog_qa=undefined&submitAction=ENTER"
      );
      const jsonData = await resData.json();
      const cardData = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      // Array to store all menu items
      let allMenuItems = [];

      // Process each card
      cardData.forEach(card => {
        const cardType = card?.card?.card?.['@type'];
        
        // Handle regular ItemCategory
        if (cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
          const categoryTitle = card?.card?.card?.title;
          const items = card?.card?.card?.itemCards || [];
          
          const processedItems = items.map(item => ({
            name: item?.card?.info?.name,
            price: item?.card?.info?.price,
            description: item?.card?.info?.description,
            isVeg: item?.card?.info?.isVeg,
            imageId: item?.card?.info?.imageId,
            id: item?.card?.info?.id,
            category: categoryTitle
          }));
          
          allMenuItems = [...allMenuItems, ...processedItems];
        }
        
        // Handle NestedItemCategory
        if (cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
          const categories = card?.card?.card?.categories || [];
          
          categories.forEach(category => {
            const categoryTitle = category.title;
            const items = category?.itemCards || [];
            
            const processedItems = items.map(item => ({
              name: item?.card?.info?.name,
              price: item?.card?.info?.price,
              description: item?.card?.info?.description,
              isVeg: item?.card?.info?.isVeg,
              imageId: item?.card?.info?.imageId,
              id: item?.card?.info?.id,
              category: categoryTitle
            }));
            
            allMenuItems = [...allMenuItems, ...processedItems];
          });
        }
      });

      setMenuData(allMenuItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!menuData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Our Menu</h1>
        {Object.entries(
          menuData.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {})
        ).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">{category}</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 bg-white p-4 rounded-lg shadow">
                  <div className="flex-grow">
                    <div className="w-4 h-4 mb-2">
                      <div className={`border-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'} rounded-sm`}>
                        <div className={`w-2 h-2 m-0.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-base font-medium text-gray-800 mb-2">₹{item.price / 100}</p>
                    {item.description && (
                      <p className="text-sm text-gray-500">{item.description}</p>
                    )}
                  </div>

                  <div className="relative w-32 h-24 flex-shrink-0">
                    {item.imageId && (
                      <img 
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                    <div className="absolute -bottom-3 -right-2 transform translate-y-1/2">
                      {!quantities[item.id] ? (
                        <button 
                          onClick={() => setQuantities(prev => ({ ...prev, [item.id]: 1 }))}
                          className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-gray-50"
                        >
                          ADD
                        </button>
                      ) : (
                        <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-200">
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="px-3 py-1 text-green-600 font-bold hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="px-2 py-1 text-green-600 font-medium">
                            {quantities[item.id]}
                          </span>
                          <button 
                            onClick={() => handleAddItem(item.id)}
                            className="px-3 py-1 text-green-600 font-bold hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;