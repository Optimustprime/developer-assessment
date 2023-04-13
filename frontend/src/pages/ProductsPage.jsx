import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../graphql/queries';
import ProductCard from '../components/ProductCard';
import "./ProductsPage.css";

const ProductsPage = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="products-container">
            {data && data.allProducts && data.allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsPage;
