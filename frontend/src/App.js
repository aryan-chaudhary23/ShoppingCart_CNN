// App.jsx
import React, { useState } from 'react';
import CartList from './components/CartList';
import ImageUploader from './components/ImageUploader';
import ItemSelector from './components/ItemSelector';
import { StoreProvider } from './context/StoreContext';

export default function App() {
  const [predictedItem, setPredictedItem] = useState(null);

  return (
    <StoreProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">Smart Cart System 🛒</h1>
        <ImageUploader setPredictedItem={setPredictedItem} />
        <ItemSelector predictedItem={predictedItem} clearItem={() => setPredictedItem(null)} />
        <CartList />
      </div>
    </StoreProvider>
  );
}
