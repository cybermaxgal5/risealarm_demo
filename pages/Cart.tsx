
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, ShieldCheck, ArrowRight, Loader2, AlertCircle, ShoppingBag } from 'lucide-react';
import { ThePod } from '../components/ui/DesignSystem';
import { createCartWithItem, fetchProductByHandle } from '../lib/shopify';
import { Link } from 'react-router-dom';

interface CartProps {
    cartVariantId?: string; // The Shopify ID passed from ShopPage
}

export const CartPage = ({ cartVariantId }: CartProps) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Initialize Cart
  useEffect(() => {
    // Scenario 1: User clicked "Buy Now" and passed a Variant ID
    if (cartVariantId) {
        setItems([
            { 
                id: 1, 
                name: 'Rise Pod', 
                price: 25.00, 
                quantity: 1,
                variantId: cartVariantId 
            }
        ]);
    } 
    // Scenario 2: User clicked Cart Icon (Empty or fetch default?)
    // For a single product store, we COULD fetch the default product here, 
    // but standard behavior is showing an empty cart.
    else {
        setItems([]);
    }
  }, [cartVariantId]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => {
        if (item.id === id) {
            const newQuantity = Math.max(1, item.quantity + delta);
            return { ...item, quantity: newQuantity };
        }
        return item;
    }));
  };

  const removeItem = (id: number) => {
      setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal;

  // --- SHOPIFY CHECKOUT LOGIC (NEW CART API) ---
  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setErrorMsg(null);
    
    // Safety check
    if (items.length === 0) return;

    const item = items[0];

    // Create Cart & Checkout URL
    const cart = await createCartWithItem(item.variantId, item.quantity);
    
    if (!cart || !cart.checkoutUrl) {
        setErrorMsg("Checkout currently unavailable. Please try again or contact support.");
        setIsCheckingOut(false);
        return;
    }

    // Redirect
    window.location.href = cart.checkoutUrl;
  };

  const formatPrice = (val: number) => {
      return val.toFixed(0);
  };

  // --- EMPTY STATE ---
  if (items.length === 0) {
      return (
        <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24 flex flex-col items-center justify-center text-center">
             <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-6">
                <ShoppingBag size={32} />
             </div>
             <h2 className="text-3xl font-bold mb-4 text-[#111]">Your cart is empty.</h2>
             <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added the Rise Pod yet. It's time to upgrade your mornings.</p>
             <Link 
                to="/shop" 
                className="px-8 py-4 bg-[#111] text-white rounded-full font-bold hover:bg-[#FF6B00] transition-colors shadow-lg"
             >
                Shop Now
             </Link>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24">
       <div className="max-w-4xl mx-auto">
            <Link to="/shop" aria-label="Continue shopping" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] mb-12 transition-colors">
                <ArrowLeft size={16} /> Continue Shopping
            </Link>

            <h1 className="text-4xl font-bold mb-12">Your Cart</h1>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-200 flex flex-col md:flex-row gap-6 items-center shadow-sm">
                            <div className="w-full md:w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <ThePod scale={0.5} />
                                </div>
                            </div>
                            
                            <div className="flex-grow w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="text-gray-400 hover:text-red-500 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
                                        <button 
                                            onClick={() => updateQuantity(item.id, -1)}
                                            aria-label="Decrease quantity"
                                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black rounded-md transition-colors font-bold"
                                        >-</button>
                                        <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, 1)}
                                            aria-label="Increase quantity"
                                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black rounded-md transition-colors font-bold"
                                        >+</button>
                                    </div>
                                    <div className="font-bold text-lg">${formatPrice(item.price * item.quantity)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="h-fit">
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm sticky top-32">
                        <h3 className="font-bold text-lg mb-6">Order Summary</h3>
                        <div className="space-y-4 text-sm mb-8">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600 font-bold">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>${formatPrice(total)}</span>
                            </div>
                        </div>
                        
                        {errorMsg && (
                            <div className="mb-4 p-4 bg-red-50 text-red-600 text-sm rounded-xl flex items-start gap-2">
                                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        <button 
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                            className="w-full py-4 bg-[#111] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FF6B00] transition-colors shadow-lg group disabled:opacity-70 disabled:cursor-wait"
                        >
                            {isCheckingOut ? (
                                <><Loader2 className="animate-spin" /> Processing...</>
                            ) : (
                                <>Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                            <ShieldCheck size={14} />
                            <span>Secure Encrypted Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};
