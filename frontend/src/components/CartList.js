// components/CartList.jsx
import React from 'react';
import { useStore } from '../context/StoreContext';

export default function CartList() {
  const { cart, removeFromCart } = useStore();

  const totalCost = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto mt-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">🛍️ Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr className="bg-indigo-100">
              <th className="px-4 py-2 border">Index</th>
              <th className="px-4 py-2 border">Item</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Cost (per unit)</th>
              <th className="px-4 py-2 border">Total Cost</th>
              <th className="px-4 py-2 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-gray-400 py-6">(initially empty)</td>
              </tr>
            ) : (
              cart.map((item, index) => (
                <tr key={index} className="hover:bg-indigo-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2 capitalize">{item.name}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">₹{item.price}</td>
                  <td className="border px-4 py-2 font-semibold">₹{item.total}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      ❌ Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {cart.length > 0 && (
        <div className="text-right mt-6 text-xl text-indigo-800 font-semibold">
          Total: ₹{totalCost}
        </div>
      )}
    </div>
  );
}
