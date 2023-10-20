"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [dataA, setDataA] = useState()

  let foundProduct;
  let index;

  const onAdd = (data, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === data._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + data.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if(cartProduct._id === data._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      data.quantity = quantity;
      
      setCartItems([...cartItems, { ...data }]);
    }
    toast.success(`${qty} ${data.name} added to the cart.`);
  } 

  const onRemove = (data) => {
    foundProduct = cartItems.find((item) => item._id === data._id);
    const newCartItems = cartItems.filter((item) => item._id !== data._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
    
  }


  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((data) => data._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)
   

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        dataA,
        setDataA,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
    
  )
}

export const useStateContext = () => useContext(Context);