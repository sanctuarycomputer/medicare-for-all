import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const link = createHttpLink({
  uri: 'https://sanctuary-computer.myshopify.com/api/graphql',
  headers: {
    'X-Shopify-Storefront-Access-Token': '53be9b967be1fda6fd1bf055392eb9de'
  }
});

export default (new ApolloClient({
  link: link,
  cache: new InMemoryCache()
}));

export const fetchProducts = gql`
  {
    shop {
      products(first: 250) {
        edges {
          node {
            availableForSale
            handle
            id
            productType
            title
            vendor
            images(first: 10) {
              edges {
                node {
                  altText
                  id
                  originalSrc
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  compareAtPrice
                  availableForSale
                  image {
                    id
                    altText
                    originalSrc
                  }
                  price
                  product {
                    id
                    handle
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const checkoutCreate = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      userErrors {
        field
        message
      }
      checkout {
        id
        completedAt
        currencyCode
        note
        subtotalPrice
        totalPrice
        webUrl
        lineItems(first: 250) {
          edges {
            node {
              customAttributes {
                key
                value
              }
              id
              quantity
              title
              variant {
                id
                compareAtPrice
                availableForSale
                title
                price
                image {
                  id
                  altText
                  originalSrc
                }
                product {
                  id
                  handle
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const checkoutLineItemsAdd = gql`
  mutation checkoutLineItemsAdd(
    $lineItems: [CheckoutLineItemInput!]!
    $checkoutId: ID!
  ) {
    checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
      userErrors {
        field
        message
      }
      checkout {
        id
        completedAt
        currencyCode
        note
        subtotalPrice
        totalPrice
        webUrl
        lineItems(first: 250) {
          edges {
            node {
              customAttributes {
                key
                value
              }
              id
              quantity
              title
              variant {
                id
                compareAtPrice
                availableForSale
                title
                price
                image {
                  id
                  altText
                  originalSrc
                }
                product {
                  id
                  handle
                }
              }
            }
          }
        }
      }
    }
  }
`;
