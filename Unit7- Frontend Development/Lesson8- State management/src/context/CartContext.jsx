import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items look like: { ...product, quantity }
  const [cart, setCart] = useState([])

  function addToCard(product){
    setCart((previousCart)=> {
      const existingItem = previousCart.find((item) => item.id === product.id);
      //don't add duplicate rows for the same product —
      // adding an item that's already in the cart should bump its quantity.
      if (existingItem) {
        return previousCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    })
  };

  function removeFromCart(product){
    const updatedCart = cart?.filter(item=> item.id !== product.id);
    setCart(updatedCart);
  }

  //TODO: Update quantity (Lets the Cart page do +/- buttons instead of only "remove entirely".)
  //TODO: Clear Cart
  //TODO: CartCount
  //TODO: CartTotal



  return (
    <CartContext.Provider value={{ cart, addToCard, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
