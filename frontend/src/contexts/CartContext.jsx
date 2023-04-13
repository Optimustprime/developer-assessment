import React, { useState, createContext } from 'react';

export const CartContext = createContext({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    incrementCartItem: () => {},
    decrementCartItem: () => {},
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            // If item already exists in cart, increase its quantity
            existingItem.quantity += 1;
            setCartItems([...cartItems]);
        } else {
            // If item is not in cart, add it with quantity 1
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    };

    const incrementCartItem = (item) => {
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
        setCartItems(updatedCartItems);
    };

    const decrementCartItem = (item) => {
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
                return cartItem;
            }
        });
        setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, incrementCartItem, decrementCartItem }}
        >
            {children}
        </CartContext.Provider>
    );
};
