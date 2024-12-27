import React, { useState, useEffect } from 'react';

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [openCategories, setOpenCategories] = useState({});
  const [heights, setHeights] = useState({});
  
  // Ref to store content heights
  const contentRefs = React.useRef({});

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

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Update height when content changes
  useEffect(() => {
    if (menuData) {
      const newHeights = {};
      Object.keys(contentRefs.current).forEach(category => {
        if (contentRefs.current[category]) {
          newHeights[category] = contentRefs.current[category].scrollHeight;
        }
      });
      setHeights(newHeights);
    }
  }, [menuData, openCategories]);

  const fetchData = async () => {
    try {
      const resData = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=690867&catalog_qa=undefined&submitAction=ENTER"
      );
      const jsonData = await resData.json();
      const cardData = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      let allMenuItems = [];

      cardData.forEach(card => {
        const cardType = card?.card?.card?.['@type'];
        
        if (cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
          const mainCategory = card?.card?.card?.title;
          const subcategories = card?.card?.card?.categories || [];
          
          subcategories.forEach(subcategory => {
            const items = subcategory?.itemCards || [];
            const processedItems = items.map(item => ({
              name: item?.card?.info?.name,
              price: item?.card?.info?.price,
              description: item?.card?.info?.description,
              isVeg: item?.card?.info?.isVeg,
              imageId: item?.card?.info?.imageId,
              id: item?.card?.info?.id,
              mainCategory,
              subCategory: subcategory.title,
              itemCount: items.length
            }));
            
            allMenuItems = [...allMenuItems, ...processedItems];
          });
        }
      });

      setMenuData(allMenuItems);
      const initialOpenState = {};
      allMenuItems.forEach(item => {
        initialOpenState[item.mainCategory] = false;
        initialOpenState[item.subCategory] = false;
      });
      setOpenCategories(initialOpenState);
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

  // Group items by main category and subcategory
  const groupedMenu = menuData.reduce((acc, item) => {
    if (!acc[item.mainCategory]) {
      acc[item.mainCategory] = {};
    }
    if (!acc[item.mainCategory][item.subCategory]) {
      acc[item.mainCategory][item.subCategory] = [];
    }
    acc[item.mainCategory][item.subCategory].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {Object.entries(groupedMenu).map(([mainCategory, subcategories]) => (
          <div key={mainCategory} className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{mainCategory}</h2>
            
            {Object.entries(subcategories).map(([subCategory, items]) => (
              <div key={subCategory} className="mb-4 border rounded-lg overflow-hidden bg-white">
                <button 
                  className="w-full px-4 py-3 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCategory(subCategory)}
                >
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {subCategory} ({items.length})
                    </h3>
                  </div>
                  <span className={`text-xl transform transition-transform duration-300 ${openCategories[subCategory] ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                <div 
                  ref={el => contentRefs.current[subCategory] = el}
                  style={{
                    height: openCategories[subCategory] ? `${heights[subCategory]}px` : '0px',
                    transition: 'height 0.3s ease-in-out'
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 p-4 border-t">
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
                                className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-gray-50 transition-colors"
                              >
                                ADD
                              </button>
                            ) : (
                              <div className="flex items-center bg-white rounded-lg shadow-md border border-gray-200">
                                <button 
                                  onClick={() => handleRemoveItem(item.id)}
                                  className="px-3 py-1 text-green-600 font-bold hover:bg-gray-50 transition-colors"
                                >
                                  -
                                </button>
                                <span className="px-2 py-1 text-green-600 font-medium">
                                  {quantities[item.id]}
                                </span>
                                <button 
                                  onClick={() => handleAddItem(item.id)}
                                  className="px-3 py-1 text-green-600 font-bold hover:bg-gray-50 transition-colors"
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
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;