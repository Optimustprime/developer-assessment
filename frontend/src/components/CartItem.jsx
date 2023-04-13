import React from 'react';
import './CartItem.css';
const CartItem = ({ product, quantity, onIncrement, onDecrement, onDelete }) => {
    return (
        <div className="cart-item">
            <div className="product-details">
                <img className="product-image" src={product.image} alt={product.name} />
                <div>
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                </div>
            </div>
            <div className="quantity">
                <button className="decrement" onClick={onDecrement}>-</button>
                <span className="quantity-value">{quantity}</span>
                <button className="increment" onClick={onIncrement}>+</button>
            </div>
            <div className="delete">
                <button className="delete-button" onClick={onDelete}>x</button>
            </div>
        </div>
    );
};

export default CartItem;
