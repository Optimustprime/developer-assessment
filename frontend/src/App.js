import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default App;
