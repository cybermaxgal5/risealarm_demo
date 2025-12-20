
import Client from 'shopify-buy';

// --- KONFIGURATION ---
// ECHTE DATEN VOM KUNDEN EINGETRAGEN:
const SHOPIFY_DOMAIN = 'rise-10115.myshopify.com'; 
const SHOPIFY_STOREFRONT_TOKEN = '48704be0544cb9591e10c70f8ba3c249';

// Initialisiere den Client
export const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
  apiVersion: '2023-10'
});

// Hilfsfunktion: Checkout erstellen
export const createCheckout = async () => {
  try {
    return await client.checkout.create();
  } catch (e) {
    console.error("Shopify Error: Konnte Checkout nicht erstellen. Check API Keys.", e);
    return null;
  }
};

// Hilfsfunktion: Produkt zum Checkout hinzufügen
export const addItemToCheckout = async (checkoutId: string, variantId: string, quantity: number) => {
  const lineItemsToAdd = [{ variantId, quantity }];
  return await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
};

// Hilfsfunktion: Produkt laden
export const fetchProductByHandle = async (handle: string) => {
  try {
    return await client.product.fetchByHandle(handle);
  } catch (e) {
    console.error("Shopify Error: Produkt nicht gefunden.", e);
    return null;
  }
};
