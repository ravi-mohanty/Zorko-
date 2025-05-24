import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuCategories, setMenuCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null); // Changed to single value
    // const [expandedCategories, setExpandedCategories] = useState({});   - here we are taking all the properties, that we dont want
  const [itemCounts, setItemCounts] = useState({});
  const contentRefs = useRef({});
 // const jsonData =  useRestaurantMenu(resId);

  const fetchData = async () => {
   // console.log("entering into the try catch");
    try {
        //console.log("entered into the try catch");

        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await response.json();
      //console.log(`this is ${jsonData}`);
      const directData = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const processedCategories = directData.reduce((acc, element) => {
        const cardData = element?.card?.card;

        if (cardData?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {
          cardData.categories.forEach(category => {
            if (category.itemCards) {
              acc.push({
                title: category.title,
                items: category.itemCards.map(item => ({
                  id: item?.card?.info?.id,
                  name: item?.card?.info?.name,
                  price: item?.card?.info?.price,
                  description: item?.card?.info?.description,
                  imageId: item?.card?.info?.imageId,
                  rating: item?.card?.info?.ratings?.aggregatedRating?.rating,
                  ratingCount: item?.card?.info?.ratings?.aggregatedRating?.ratingCount,
                  isBestseller: item?.card?.info?.isBestseller,
                  inStock: item?.card?.info?.inStock
                }))
              });
            }
          });
        } else if (cardData?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
          if (cardData.itemCards) {
            acc.push({
              title: cardData.title,
              items: cardData.itemCards.map(item => ({
                id: item?.card?.info?.id,
                name: item?.card?.info?.name,
                price: item?.card?.info?.price,
                description: item?.card?.info?.description,
                imageId: item?.card?.info?.imageId,
                rating: item?.card?.info?.ratings?.aggregatedRating?.rating,
                ratingCount: item?.card?.info?.ratings?.aggregatedRating?.ratingCount,
                isBestseller: item?.card?.info?.isBestseller,
                inStock: item?.card?.info?.inStock
              }))
            });
          }
        }
        return acc;
      }, []);

      setMenuCategories(processedCategories);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [resId]);

  const formatPrice = (price) => {
    return (price / 100).toFixed(2);
  };

  const toggleCategory = (index) => {
    // If clicking on already expanded category, close it. Otherwise, open the clicked one
    setExpandedCategory(prev => prev === index ? null : index);
  };

  const incrementItem = (itemId) => {
    setItemCounts(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const decrementItem = (itemId) => {
    setItemCounts(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  useEffect(() => {
    // Update heights for all categories
    Object.keys(contentRefs.current).forEach(index => {
      const indexNum = parseInt(index);
      if (contentRefs.current[index]) {
        if (expandedCategory === indexNum) {
          contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
        } else {
          contentRefs.current[index].style.maxHeight = '0px';
        }
      }
    });
  }, [expandedCategory]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {menuCategories.map((category, index) => (
        <div key={index} className="mb-6 border rounded-lg overflow-hidden">
          <button 
            className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => toggleCategory(index)}
          >
            <h2 className="text-xl font-bold">{category.title}</h2>
            <ChevronDown 
              className={`transform transition-transform duration-200 ${
                expandedCategory === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div 
            ref={el => contentRefs.current[index] = el} 
            className="transition-max-height duration-300 overflow-hidden"
            style={{ maxHeight: expandedCategory === index ? `${contentRefs.current[index]?.scrollHeight || 0}px` : '0px' }}
          >
            <div className="space-y-4 p-4">
              {category.items.map((item) => (
                <div key={item.id} className="border p-4 pb-6 rounded-lg shadow-sm relative">
                  <div className="flex justify-between">
                    <div className="flex-grow pr-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">₹{formatPrice(item.price)}</p>
                      {item.rating && (
                        <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                          <span className="flex items-center bg-green-600 text-white px-1 rounded">
                            ★ {item.rating}
                          </span>
                          {item.ratingCount && (
                            <span className="text-gray-500">({item.ratingCount})</span>
                          )}
                        </div>
                      )}
                      {item.description && (
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2 overflow-hidden text-ellipsis">
                          {item.description}
                        </p>
                      )}
                      {item.isBestseller && (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded mt-2 inline-block">
                          Bestseller
                        </span>
                      )}
                    </div>
                    {item.imageId && (
                      <div className="relative min-w-[128px]">
                        <img 
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded"
                          style={{ minWidth: '128px', minHeight: '128px' }}
                        />
                        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-[90px]">
                          {itemCounts[item.id] ? (
                            <div className="flex items-center bg-white border rounded-lg shadow-md justify-center">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  decrementItem(item.id);
                                }}
                                className="p-1 hover:bg-gray-100"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-2 font-semibold">{itemCounts[item.id]}</span>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  incrementItem(item.id);
                                }}
                                className="p-1 hover:bg-gray-100"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                incrementItem(item.id);
                              }}
                              className="bg-white text-green-600 px-4 py-1 rounded-lg shadow-md border hover:bg-gray-50 w-full"
                            >
                              ADD
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;