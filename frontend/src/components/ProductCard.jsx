import React, {useContext} from "react";
import "./ProductCard.css";
import {CartContext} from "../contexts/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    );
}