"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Data } from "../data/foods";

type CartContextType = {
  cart: Data[];
  wishList: Data[];
  addToCart: (item: Data) => void;
  addToWishList: (item: Data) => void;
  updateQuantity: (id: number, quantityChange: number) => void;
  removeProduct: (id: number) => void;
  removeFromWish: (id: number) => void;
  isCartLoaded: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Data[]>([]);
  const [wishList, setWishList] = useState<Data[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      const savedWishList = localStorage.getItem("wishList");

      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWishList) setWishList(JSON.parse(savedWishList));

      setIsCartLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isCartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isCartLoaded]);

  useEffect(() => {
    if (isCartLoaded) {
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
  }, [wishList, isCartLoaded]);

  const addToWishList = (item: Data) => {
    setWishList((prevWishList) => {
      if (prevWishList.some((i) => i.id === item.id)) {
        return prevWishList;
      }
      return [...prevWishList, item];
    });
  };

  const addToCart = (item: Data) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevCart, item];
    });
  };

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

  const removeProduct = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const removeFromWish = (id: number) => {
    setWishList((prevWishList) =>
      prevWishList.filter((product) => product.id !== id)
    );
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
        removeFromWish,
        isCartLoaded, // ✅ Provide loading status
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
