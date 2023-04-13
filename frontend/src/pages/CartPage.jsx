import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import "./CartPage.css";
const CartPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="cart-page">
            <h1>Cart</h1>

            <div className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            <CartSummary total={cartTotal} />
        </div>
    );
};

export default CartPage;
