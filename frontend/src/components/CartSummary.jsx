import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
import './CartSummary.css';

const CartSummary = () => {
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);

    const renderCartItems = () => {
        return cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
        ));
    };

    return (
        <div className="cart-summary">
            <div className="cart-summary-header">
                <h2>Cart Summary</h2>
                <Button variant="outlined" onClick={clearCart}>
                    Clear Cart
                </Button>
            </div>
            <div className="cart-summary-items">{renderCartItems()}</div>
            <div className="cart-summary-total">
                <h3>Total: ${cartTotal}</h3>
                <Button variant="contained" color="primary" fullWidth>
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default CartSummary;
