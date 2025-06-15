// StoreContext.js
import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

const storeItemsData = {
  "Fruit_Apple_Golden-Delicious": { quantity: 20, price: 15 },
  "Fruit_Apple_Granny-Smith": { quantity: 18, price: 16 },
  "Fruit_Apple_Pink-Lady": { quantity: 22, price: 17 },
  "Fruit_Apple_Red-Delicious": { quantity: 25, price: 15 },
  "Fruit_Apple_Royal-Gala": { quantity: 19, price: 16 },
  "Fruit_Avocado": { quantity: 15, price: 30 },
  "Fruit_Banana": { quantity: 30, price: 12 },
  "Fruit_Kiwi": { quantity: 20, price: 18 },
  "Fruit_Lemon": { quantity: 25, price: 10 },
  "Fruit_Lime": { quantity: 25, price: 10 },
  "Fruit_Mango": { quantity: 15, price: 35 },
  "Fruit_Melon_Cantaloupe": { quantity: 10, price: 40 },
  "Fruit_Melon_Galia-Melon": { quantity: 10, price: 42 },
  "Fruit_Melon_Honeydew-Melon": { quantity: 10, price: 43 },
  "Fruit_Melon_Watermelon": { quantity: 8, price: 60 },
  "Fruit_Nectarine": { quantity: 18, price: 22 },
  "Fruit_Orange": { quantity: 30, price: 15 },
  "Fruit_Papaya": { quantity: 12, price: 30 },
  "Fruit_Passion-Fruit": { quantity: 14, price: 25 },
  "Fruit_Peach": { quantity: 20, price: 20 },
  "Fruit_Pear_Anjou": { quantity: 16, price: 18 },
  "Fruit_Pear_Conference": { quantity: 16, price: 19 },
  "Fruit_Pear_Kaiser": { quantity: 16, price: 19 },
  "Fruit_Pineapple": { quantity: 10, price: 50 },
  "Fruit_Plum": { quantity: 18, price: 20 },
  "Fruit_Pomegranate": { quantity: 10, price: 35 },
  "Fruit_Red-Grapefruit": { quantity: 15, price: 22 },
  "Fruit_Satsumas": { quantity: 25, price: 14 },

  "Packages_Juice_Bravo-Apple-Juice": { quantity: 20, price: 35 },
  "Packages_Juice_Bravo-Orange-Juice": { quantity: 20, price: 35 },
  "Packages_Juice_God-Morgon-Apple-Juice": { quantity: 15, price: 40 },
  "Packages_Juice_God-Morgon-Orange-Juice": { quantity: 15, price: 40 },
  "Packages_Juice_God-Morgon-Orange-Red-Grapefruit-Juice": { quantity: 10, price: 42 },
  "Packages_Juice_God-Morgon-Red-Grapefruit-Juice": { quantity: 10, price: 42 },
  "Packages_Juice_Tropicana-Apple-Juice": { quantity: 12, price: 38 },
  "Packages_Juice_Tropicana-Golden-Grapefruit": { quantity: 10, price: 38 },
  "Packages_Juice_Tropicana-Juice-Smooth": { quantity: 10, price: 39 },
  "Packages_Juice_Tropicana-Mandarin-Morning": { quantity: 10, price: 39 },

  "Packages_Milk_Arla-Ecological-Medium-Fat-Milk": { quantity: 15, price: 32 },
  "Packages_Milk_Arla-Lactose-Medium-Fat-Milk": { quantity: 12, price: 34 },
  "Packages_Milk_Arla-Medium-Fat-Milk": { quantity: 20, price: 30 },
  "Packages_Milk_Arla-Standard-Milk": { quantity: 20, price: 28 },
  "Packages_Milk_Garant-Ecological-Medium-Fat-Milk": { quantity: 10, price: 33 },
  "Packages_Milk_Garant-Ecological-Standard-Milk": { quantity: 10, price: 32 },

  "Packages_Oat-Milk_Oatly-Oat-Milk": { quantity: 8, price: 42 },
  "Packages_Oatghurt_Oatly-Natural-Oatghurt": { quantity: 6, price: 45 },

  "Packages_Sour-Cream_Arla-Ecological-Sour-Cream": { quantity: 10, price: 25 },
  "Packages_Sour-Cream_Arla-Sour-Cream": { quantity: 12, price: 22 },
  "Packages_Sour-Milk_Arla-Sour-Milk": { quantity: 10, price: 24 },

  "Packages_Soy-Milk_Alpro-Fresh-Soy-Milk": { quantity: 10, price: 36 },
  "Packages_Soy-Milk_Alpro-Shelf-Soy-Milk": { quantity: 10, price: 38 },
  "Packages_Soyghurt_Alpro-Blueberry-Soyghurt": { quantity: 6, price: 40 },
  "Packages_Soyghurt_Alpro-Vanilla-Soyghurt": { quantity: 6, price: 40 },

  "Packages_Yoghurt_Arla-Mild-Vanilla-Yoghurt": { quantity: 14, price: 26 },
  "Packages_Yoghurt_Arla-Natural-Mild-Low-Fat-Yoghurt": { quantity: 14, price: 25 },
  "Packages_Yoghurt_Arla-Natural-Yoghurt": { quantity: 14, price: 25 },
  "Packages_Yoghurt_Valio-Vanilla-Yoghurt": { quantity: 12, price: 27 },
  "Packages_Yoghurt_Yoggi-Strawberry-Yoghurt": { quantity: 15, price: 26 },
  "Packages_Yoghurt_Yoggi-Vanilla-Yoghurt": { quantity: 15, price: 26 },

  "Vegetables_Asparagus": { quantity: 10, price: 28 },
  "Vegetables_Aubergine": { quantity: 12, price: 24 },
  "Vegetables_Brown-Cap-Mushroom": { quantity: 14, price: 22 },
  "Vegetables_Cabbage": { quantity: 18, price: 20 },
  "Vegetables_Carrots": { quantity: 30, price: 12 },
  "Vegetables_Cucumber": { quantity: 25, price: 15 },
  "Vegetables_Garlic": { quantity: 20, price: 10 },
  "Vegetables_Ginger": { quantity: 15, price: 12 },
  "Vegetables_Leek": { quantity: 18, price: 16 },
  "Vegetables_Onion_Yellow-Onion": { quantity: 30, price: 10 },

  "Vegetables_Pepper_Green-Bell-Pepper": { quantity: 20, price: 18 },
  "Vegetables_Pepper_Orange-Bell-Pepper": { quantity: 20, price: 18 },
  "Vegetables_Pepper_Red-Bell-Pepper": { quantity: 20, price: 18 },
  "Vegetables_Pepper_Yellow-Bell-Pepper": { quantity: 20, price: 18 },

  "Vegetables_Potato_Floury-Potato": { quantity: 35, price: 10 },
  "Vegetables_Potato_Solid-Potato": { quantity: 35, price: 10 },
  "Vegetables_Potato_Sweet-Potato": { quantity: 25, price: 14 },

  "Vegetables_Red-Beet": { quantity: 15, price: 12 },
  "Vegetables_Tomato_Beef-Tomato": { quantity: 20, price: 14 },
  "Vegetables_Tomato_Regular-Tomato": { quantity: 25, price: 13 },
  "Vegetables_Tomato_Vine-Tomato": { quantity: 25, price: 14 },
  "Vegetables_Zucchini": { quantity: 20, price: 15 }
};


export const StoreProvider = ({ children }) => {
  const [storeItems, setStoreItems] = useState(storeItemsData);
  const [cart, setCart] = useState([]);

  const addToCart = (itemName, quantity) => {
    const itemData = storeItems[itemName];

    // Decrease quantity in store
    if (itemData && itemData.quantity >= quantity) {
      setStoreItems((prev) => ({
        ...prev,
        [itemName]: {
          ...prev[itemName],
          quantity: prev[itemName].quantity - quantity,
        },
      }));

      const newItem = {
        name: itemName,
        quantity,
        price: itemData.price,
        total: quantity * itemData.price,
      };

      setCart((prev) => [...prev, newItem]);
    }
  };

  const removeFromCart = (indexToRemove) => {
  setCart((prevCart) => {
    // Copy the cart item to be removed
    const itemToRemove = prevCart[indexToRemove];
    if (!itemToRemove) return prevCart;

    const updatedCart = prevCart.filter((_, idx) => idx !== indexToRemove);

    // Update store quantity in a separate state update
    setStoreItems((prev) => {
      const prevQuantity = prev[itemToRemove.name]?.quantity || 0;
      return {
        ...prev,
        [itemToRemove.name]: {
          ...prev[itemToRemove.name],
          quantity: prevQuantity + itemToRemove.quantity,
        },
      };
    });

    return updatedCart;
  });
};


  return (
    <StoreContext.Provider value={{ storeItems, cart, addToCart, removeFromCart }}>
      {children}
    </StoreContext.Provider>
  );
};


export const useStore = () => useContext(StoreContext);