import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!, $quantity: Int!) {
    addToCart(productId: $productId, quantity: $quantity) {
      success
      message
      cart {
        id
        totalItems
        items {
          id
          product {
            id
            name
            price
            image
          }
          quantity
        }
      }
    }
  }
`;
