
import Client from 'shopify-buy';

// --- KONFIGURATION ---
const SHOPIFY_DOMAIN = 'rise-10115.myshopify.com'; 
const SHOPIFY_STOREFRONT_TOKEN = '48704be0544cb9591e10c70f8ba3c249';

// Initialisiere den Client
// API Version 2024-01 stellt sicher, dass wir stabile Features nutzen.
// WICHTIG: Im Shopify Admin muss 'unauthenticated_write_checkouts' aktiv sein!
export const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
  apiVersion: '2024-01'
});

// Hilfsfunktion: Checkout erstellen
export const createCheckout = async () => {
  try {
    const checkout = await client.checkout.create();
    return checkout;
  } catch (e: any) {
    // Detailliertes Logging für Debugging
    console.error("Shopify Checkout Error:", JSON.stringify(e, null, 2));
    
    // Prüfen auf typische Permission Errors
    if (e.message && e.message.includes("checkoutCreate")) {
        console.error("URSACHE: Fehlende 'unauthenticated_write_checkouts' Berechtigung im Shopify Admin!");
    }
    return null;
  }
};

// Hilfsfunktion: Produkt zum Checkout hinzufügen
export const addItemToCheckout = async (checkoutId: string, variantId: string, quantity: number) => {
  try {
    const lineItemsToAdd = [{ variantId, quantity }];
    return await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
  } catch (e) {
    console.error("Shopify Add Item Error:", e);
    return null;
  }
};

// Hilfsfunktion: Produkt laden
export const fetchProductByHandle = async (handle: string) => {
  try {
    return await client.product.fetchByHandle(handle);
  } catch (e) {
    console.error("Shopify Product Error:", e);
    return null;
  }
};
