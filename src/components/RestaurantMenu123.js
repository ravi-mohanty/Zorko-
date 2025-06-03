// import React, { useState, useEffect, useRef } from "react";
// import { ChevronDown, Plus, Minus } from "lucide-react";

// const RestaurantMenu = () => {
//   const [menuCategories, setMenuCategories] = useState([]);
//   const [expandedCategories, setExpandedCategories] = useState({});
//   const [itemCounts, setItemCounts] = useState({});
//   const contentRefs = useRef({});

//   useEffect(() => {
//     // Process the restaurants data passed via props to create menu categories
//     const processedCategories = restaurants.reduce((acc, restaurant) => {
//       const category = restaurant.info.cuisines.join(", "); // Group by cuisines
//       const existingCategory = acc.find((cat) => cat.title === category);

//       if (existingCategory) {
//         existingCategory.items.push({
//           id: restaurant.info.id,
//           name: restaurant.info.name,
//           price: restaurant.info.costForTwo,
//           description: restaurant.info.locality,
//           imageId: restaurant.info.cloudinaryImageId,
//           rating: restaurant.info.avgRating,
//           ratingCount: restaurant.info.totalRatingsString,
//           isBestseller: restaurant.info.avgRating >= 4.5,
//           inStock: true, // Assuming all restaurants are in stock
//         });
//       } else {
//         acc.push({
//           title: category,
//           items: [
//             {
//               id: restaurant.info.id,
//               name: restaurant.info.name,
//               price: restaurant.info.costForTwo,
//               description: restaurant.info.locality,
//               imageId: restaurant.info.cloudinaryImageId,
//               rating: restaurant.info.avgRating,
//               ratingCount: restaurant.info.totalRatingsString,
//               isBestseller: restaurant.info.avgRating >= 4.5,
//               inStock: true,
//             },
//           ],
//         });
//       }

//       return acc;
//     }, []);

//     setMenuCategories(processedCategories);
//   }, [restaurants]);

//   const toggleCategory = (index) => {
//     setExpandedCategories((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const incrementItem = (itemId) => {
//     setItemCounts((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   const decrementItem = (itemId) => {
//     setItemCounts((prev) => ({
//       ...prev,
//       [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
//     }));
//   };

//   useEffect(() => {
//     Object.keys(expandedCategories).forEach((index) => {
//       if (expandedCategories[index]) {
//         contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
//       } else {
//         contentRefs.current[index].style.maxHeight = "0px";
//       }
//     });
//   }, [expandedCategories]);

//   const formatPrice = (price) => {
//     return (price / 100).toFixed(2);
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       {menuCategories.map((category, index) => (
//         <div key={index} className="mb-6 border rounded-lg overflow-hidden">
//           <button
//             className="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
//             onClick={() => toggleCategory(index)}
//           >
//             <h2 className="text-xl font-bold">{category.title}</h2>
//             <ChevronDown
//               className={`transform transition-transform duration-200 ${
//                 expandedCategories[index] ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           <div
//             ref={(el) => (contentRefs.current[index] = el)}
//             className="transition-max-height duration-300 overflow-hidden"
//             style={{
//               maxHeight: expandedCategories[index]
//                 ? `${contentRefs.current[index].scrollHeight}px`
//                 : "0px",
//             }}
//           >
//             <div className="space-y-4 p-4">
//               {category.items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="border p-4 pb-6 rounded-lg shadow-sm relative"
//                 >
//                   <div className="flex justify-between">
//                     <div className="flex-grow pr-4">
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-sm text-gray-600">
//                         ₹{formatPrice(item.price)}
//                       </p>
//                       {item.rating && (
//                         <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
//                           <span className="flex items-center bg-green-600 text-white px-1 rounded">
//                             ★ {item.rating}
//                           </span>
//                           {item.ratingCount && (
//                             <span className="text-gray-500">
//                               ({item.ratingCount})
//                             </span>
//                           )}
//                         </div>
//                       )}
//                       {item.description && (
//                         <p className="text-sm text-gray-500 mt-2 line-clamp-2 overflow-hidden text-ellipsis">
//                           {item.description}
//                         </p>
//                       )}
//                       {item.isBestseller && (
//                         <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded mt-2 inline-block">
//                           Bestseller
//                         </span>
//                       )}
//                     </div>
//                     {item.imageId && (
//                       <div className="relative min-w-[128px]">
//                         <img
//                           src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
//                           alt={item.name}
//                           className="w-32 h-32 object-cover rounded"
//                           style={{ minWidth: "128px", minHeight: "128px" }}
//                         />
//                         <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-[90px]">
//                           {itemCounts[item.id] ? (
//                             <div className="flex items-center bg-white border rounded-lg shadow-md justify-center">
//                               <button
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   decrementItem(item.id);
//                                 }}
//                                 className="p-1 hover:bg-gray-100"
//                               >
//                                 <Minus size={16} />
//                               </button>
//                               <span className="px-2 font-semibold">
//                                 {itemCounts[item.id]}
//                               </span>
//                               <button
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   incrementItem(item.id);
//                                 }}
//                                 className="p-1 hover:bg-gray-100"
//                               >
//                                 <Plus size={16} />
//                               </button>
//                             </div>
//                           ) : (
//                             <button
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 incrementItem(item.id);
//                               }}
//                               className="bg-white text-green-600 px-4 py-1 rounded-lg shadow-md border hover:bg-gray-50 w-full"
//                             >
//                               ADD
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;