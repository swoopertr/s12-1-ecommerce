import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    if (!product?.id) {
      return;
    }

    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.id === product.id,
      );

      if (existingItemIndex === -1) {
        return [...currentItems, { ...product, quantity }];
      }

      return currentItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    });
  };

  const removeFromCart = (productId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      cartCount,
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [items, cartCount],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

export default CartContext;