
import React, { useState } from 'react';
import { ArrowLeft, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { ThePod } from '../components/ui/DesignSystem';

export const CartPage = ({ onBack }: { onBack: () => void }) => {
  const [items, setItems] = useState([
    { id: 1, name: 'Rise Alarm Starter Kit', batch: 'Batch 003 • Standard Edition', price: 25.00, quantity: 1 }
  ]);

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
  const total = subtotal; // Free shipping

  if (items.length === 0) {
      return (
        <div className="min-h-screen bg-[#F9F9F7] pt-40 px-6 pb-24 text-center">
             <h2 className="text-3xl font-bold mb-4">Your cart is empty.</h2>
             <button onClick={onBack} className="text-[#FF6B00] font-bold hover:underline">Start Shopping</button>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-40 px-6 pb-24">
       <div className="max-w-4xl mx-auto">
            <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] mb-12">
                <ArrowLeft size={16} /> Continue Shopping
            </button>

            <h1 className="text-4xl font-bold mb-12">Your Cart</h1>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-200 flex flex-col md:flex-row gap-6 items-center shadow-sm">
                            <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                                <div className="w-full h-full p-2">
                                    <ThePod scale={0.5} />
                                </div>
                            </div>
                            <div className="flex-grow w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{item.name}</h3>
                                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{item.batch}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                        <button 
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white rounded-md transition-colors font-bold"
                                        >-</button>
                                        <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white rounded-md transition-colors font-bold"
                                        >+</button>
                                    </div>
                                    <div className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</div>
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
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-600 font-bold">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>Calculated at next step</span>
                            </div>
                            <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        
                        <button className="w-full py-4 bg-[#111] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FF6B00] transition-colors shadow-lg group">
                            Checkout
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
