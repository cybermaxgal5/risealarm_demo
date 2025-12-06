
import React from 'react';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';

export const CheckoutPage = ({ onBack }: any) => {
  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-24 px-6 pb-24">
       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* LEFT: FORM */}
          <div>
            <button onClick={onBack} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF4F00] mb-8">
                <ArrowLeft size={16} /> Back to Store
            </button>
            <h2 className="text-3xl font-bold mb-8">Checkout</h2>
            
            <form className="space-y-8">
                <div>
                   <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4 font-bold">01. Contact</h3>
                   <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-[#FF4F00] outline-none transition-colors" />
                </div>

                <div>
                   <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4 font-bold">02. Shipping</h3>
                   <div className="grid grid-cols-2 gap-4 mb-4">
                      <input type="text" placeholder="First Name" className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-[#FF4F00] outline-none transition-colors" />
                      <input type="text" placeholder="Last Name" className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-[#FF4F00] outline-none transition-colors" />
                   </div>
                   <input type="text" placeholder="Address" className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-[#FF4F00] outline-none transition-colors mb-4" />
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="City" className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-[#FF4F00] outline-none transition-colors" />
                      <input type="text" placeholder="Postal Code" className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:border-[#FF4F00] outline-none transition-colors" />
                   </div>
                </div>

                <div>
                   <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-4 font-bold">03. Payment</h3>
                   <div className="bg-[#111] text-white p-6 rounded-2xl flex items-center justify-between cursor-not-allowed opacity-80">
                      <div className="flex items-center gap-4">
                         <CreditCard />
                         <span>Credit Card (Stripe)</span>
                      </div>
                      <Lock size={16} />
                   </div>
                   <p className="text-xs text-gray-500 mt-2">Payments are simulated for this demo.</p>
                </div>

                <button type="button" className="w-full py-5 bg-[#FF4F00] text-white rounded-xl font-bold text-xl hover:bg-[#cc3f00] transition-colors shadow-xl shadow-orange-500/20">
                   Pay $49.00
                </button>
            </form>
          </div>

          {/* RIGHT: CART */}
          <div className="bg-white p-8 rounded-[2.5rem] h-fit border border-gray-200 shadow-sm">
             <h3 className="text-xl font-bold mb-6">Order Summary</h3>
             <div className="flex gap-6 mb-8">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center">
                   <div className="w-12 h-12 bg-[#FF4F00] rounded-full"></div>
                </div>
                <div>
                   <h4 className="font-bold text-lg">RiseAlarm Starter Kit</h4>
                   <p className="text-sm text-gray-500">Batch 002</p>
                   <div className="mt-2 font-mono">$49.00</div>
                </div>
             </div>
             
             <div className="space-y-4 border-t border-gray-100 pt-6 text-sm">
                <div className="flex justify-between">
                   <span className="text-gray-500">Subtotal</span>
                   <span>$49.00</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-gray-500">Shipping</span>
                   <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-xl pt-4 border-t border-gray-100">
                   <span>Total</span>
                   <span>$49.00</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};
