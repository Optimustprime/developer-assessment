import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    );
}