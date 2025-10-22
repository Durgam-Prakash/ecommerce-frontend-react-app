// import {  createContext, useContext, useState } from "react";

// const CartContext = createContext()
// export const CartProvider = ({children})=>{
//     const [cartItems,setCartItems]=useState([])



//     const addToCart=(item)=>{
//         setCartItems([...cartItems,item])

//     }

//     const removeFromCart=(item)=>{
//         setCartItems(cartItems.filter((apple)=> apple!==item))
//     }

//     return(
//         <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
//             {children}
//         </CartContext.Provider>
//     )
// }
// export const useCart = ()=>{
//     return useContext(CartContext)
// }

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productToRemove.id));
  };

  // Increase quantity by 1
  const incrementQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity by 1 (remove item if quantity is 1)
  const decrementQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.flatMap(item => {
        if (item.id === productId) {
          if (item.quantity === 1) {
            return []; // remove item
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

