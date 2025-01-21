"use client";
import React, { createContext, useContext, useState } from "react";
import { Data } from "../data/foods";
type CartContextType = {
  cart: Data[];
  wishList: Data[];
  // setCart: React.Dispatch<React.SetStateAction<Data[]>>;
  // setWishList: React.Dispatch<React.SetStateAction<Data[]>>;
  addToCart: (item: Data) => void;
  addToWishList: (item: Data) => void;
  updateQuantity: (id: number, quantityChange: number) => void;
  removeProduct: (id: number) => void;
  removeFromWish: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Data[]>([]);
  const [wishList, setWishList] = useState<Data[]>([]);

  // add to cart
  const addToWishList = (item: Data) => {
    setWishList((prevWishList) => {
      const existingItem = prevWishList.find((i) => i.id === item.id);
      if (existingItem) {
        return prevWishList.map((i: Data) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevWishList, item];
    });
  };

  // add to cart
  const addToCart = (item: Data) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i: Data) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevCart, item];
    });
  };

  // update the quantity of a product in the cart
  const updateQuantity = (id: number, quantityChange: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + quantityChange),
            }
          : product
      )
    );
  };

  //remove a product from the cart
  const removeProduct = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  //remove a product from the wish List
  const removeFromWish = (id: number) => {
    setWishList((prevWishList) => prevWishList.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        wishList,
        addToWishList,
        updateQuantity,
        removeProduct,
        removeFromWish
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
