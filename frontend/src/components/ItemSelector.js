// components/ItemSelector.jsx
import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';

export default function ItemSelector({ predictedItem, clearItem }) {
  const [quantity, setQuantity] = useState(1);
  const { storeItems, addToCart } = useStore();

  if (!predictedItem || !storeItems[predictedItem]) {
    return (
      <div className="text-center text-gray-600 italic mb-6">
        No valid item predicted or item not found in store.
      </div>
    );
  }

  const data = storeItems[predictedItem];

  if (data.quantity === 0) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 max-w-md mx-auto mb-6 rounded">
        <p><strong>{predictedItem}</strong> is currently <strong>out of stock</strong>.</p>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(predictedItem, quantity);

    clearItem();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto mb-6 border border-indigo-200">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-2">📦 Item: {predictedItem}</h2>
      <p className="text-gray-700">Available: <span className="font-medium">{data.quantity}</span></p>
      <p className="text-gray-700 mb-2">Price per unit: <span className="font-medium">₹{data.price}</span></p>
      <input
        type="number"
        min="1"
        max={data.quantity}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handleAdd}
        className="bg-indigo-600 text-white font-medium px-4 py-2 mt-4 rounded-lg hover:bg-indigo-700 w-full transition-all"
      >
        ➕ Add to Cart
      </button>
    </div>
  );
}