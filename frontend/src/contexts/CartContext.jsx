import React, { useState, createContext } from 'react';

export const CartContext = createContext({
    cartItems: [],
    cartTotal: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    incrementCartItem: () => {},
    decrementCartItem: () => {},
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            // If item already exists in cart, increase its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex] = {
                ...updatedCartItems[existingItemIndex],
                quantity: updatedCartItems[existingItemIndex].quantity + 1,
            };
            setCartItems(updatedCartItems);
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

    const calculateCartTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        setCartTotal(total);
    };

    // calculate cart total whenever cartItems changes
    React.useEffect(() => {
        calculateCartTotal();
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{ cartItems, cartTotal, addToCart, removeFromCart, incrementCartItem, decrementCartItem }}
        >
            {children}
        </CartContext.Provider>
    );
};
