import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const RestaurantMenu = ({ data }) => {
  const [menuCategories, setMenuCategories] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [itemCounts, setItemCounts] = useState({});
  const contentRefs = useRef({});

  useEffect(() => {
    if (data) {
      setMenuCategories(data);
    }
  }, [data]);

  const toggleCategory = (index) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const incrementItem = (itemId) => {
    setItemCounts((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const decrementItem = (itemId) => {
    setItemCounts((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  useEffect(() => {
    Object.keys(expandedCategories).forEach((index) => {
      if (expandedCategories[index]) {
        contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
      } else {
        contentRefs.current[index].style.maxHeight = "0px";
      }
    });
  }, [expandedCategories]);

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
                expandedCategories[index] ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="transition-max-height duration-300 overflow-hidden"
            style={{
              maxHeight: expandedCategories[index]
                ? `${contentRefs.current[index].scrollHeight}px`
                : "0px",
            }}
          >
            <div className="space-y-4 p-4">
              {category.items.map((item) => (
                <div key={item.id} className="border p-4 pb-6 rounded-lg">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    ₹{(item.price / 100).toFixed(2)}
                  </p>
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