import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { Plus, Minus } from 'lucide-react';

const CartElement = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const groupedItems = cartItems.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].count += 1;
    } else {
      acc[item.id] = { ...item, count: 1 };
    }
    return acc;
  }, {});

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {Object.values(groupedItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        Object.values(groupedItems).map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-sm mb-4">
            <div className="flex gap-4">
              {item.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  {item.count > 1 && (
                    <span className="text-sm text-gray-500">x {item.count}</span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">₹{(item.price / 100).toFixed(2)}</p>
                {item.rating && (
                  <div className="text-sm text-green-600 mt-1">
                    ★ {item.rating} {item.ratingCount && `(${item.ratingCount})`}
                  </div>
                )}
                {item.count === 1 && item.description && (
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                )}
                {item.isBestseller && (
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded mt-2 inline-block">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center mt-4 space-x-2 justify-start">
              <button
                onClick={() => dispatch(removeItem(item))}
                className="p-1 border rounded hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="font-semibold">{item.count}</span>
              <button
                onClick={() => dispatch(addItem(item))}
                className="p-1 border rounded hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartElement;
