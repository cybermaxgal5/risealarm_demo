
import Client from 'shopify-buy';

// --- KONFIGURATION ---
const SHOPIFY_DOMAIN = 'rise-10115.myshopify.com'; 
const SHOPIFY_STOREFRONT_TOKEN = '48704be0544cb9591e10c70f8ba3c249';
// Using 2025-01 to ensure latest features, though 2024-01 works too.
const API_VERSION = '2025-01'; 

// Initialisiere den alten Client für Produkt-Abfragen (Read-Only ist meist ok)
export const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
  apiVersion: API_VERSION
});

// --- HELPER: Direkter Fetch für Cart API (Der "Neue Weg") ---
async function storefrontRequest(query: string, variables = {}) {
  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}

// Ersetzt createCheckout + addItemToCheckout
// Erstellt einen Cart UND fügt das Item in einem Schritt hinzu
export const createCartWithItem = async (variantId: string, quantity: number) => {
  const query = `
    mutation createCart($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    lines: [
      {
        merchandiseId: variantId,
        quantity: quantity
      }
    ]
  };

  try {
    const { data, errors } = await storefrontRequest(query, variables);
    
    if (errors) {
      console.error("GraphQL Errors:", errors);
      return { error: errors[0]?.message || "Failed to create cart" };
    }

    if (data?.cartCreate?.userErrors?.length > 0) {
      const errorMessage = data.cartCreate.userErrors[0]?.message || "Invalid product variant";
      console.error("Cart User Errors:", data.cartCreate.userErrors);
      return { error: errorMessage };
    }

    return data.cartCreate.cart; // Gibt { id, checkoutUrl } zurück
  } catch (e) {
    console.error("Network Error:", e);
    return { error: "Network error. Please check your connection." };
  }
};

// Alte Funktionen für Kompatibilität (falls benötigt), aber wir nutzen jetzt die obere
export const fetchProductByHandle = async (handle: string) => {
  try {
    return await client.product.fetchByHandle(handle);
  } catch (e) {
    console.error("Shopify Product Error:", e);
    return null;
  }
};

// Helper function to fetch all products - useful for finding the correct handle
export const fetchAllProducts = async () => {
  try {
    return await client.product.fetchAll();
  } catch (e) {
    console.error("Shopify Fetch All Products Error:", e);
    return null;
  }
};
