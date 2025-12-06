
import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';

export const PreOrderSection = ({ onCheckout }: { onCheckout?: () => void }) => {
  const [selectedPack, setSelectedPack] = useState<'single' | 'double'>('single');

  return (
    <section className="py-32 bg-[#F9F9F7] px-6 border-t border-gray-200">
       <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-6xl font-bold tracking-tighter mb-4 text-[#111]">Secure Your Unit.</h2>
             <p className="text-gray-500">Batch 002 is 85% allocated. Expected shipping: March 2025.</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-12">
             <div className="lg:col-span-7 space-y-6">
                <div 
                  className={`relative p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex items-center justify-between group ${selectedPack === 'single' ? 'bg-white border-[#FF4F00] shadow-2xl shadow-orange-500/10' : 'bg-white border-transparent hover:border-gray-200'}`}
                  onClick={() => setSelectedPack('single')}
                >
                   <div className="flex items-center gap-6">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPack === 'single' ? 'border-[#FF4F00]' : 'border-gray-300'}`}>
                         {selectedPack === 'single' && <div className="w-3 h-3 bg-[#FF4F00] rounded-full" />}
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold">RiseAlarm Starter Kit</h3>
                         <p className="text-gray-500 text-sm mt-1">1x Pod, 1x App License (Lifetime)</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-2xl font-bold">$49</div>
                      <div className="text-xs text-gray-400 font-mono line-through">$79</div>
                   </div>
                </div>

                <div 
                  className={`relative p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex items-center justify-between group ${selectedPack === 'double' ? 'bg-white border-[#FF4F00] shadow-2xl shadow-orange-500/10' : 'bg-white border-transparent hover:border-gray-200'}`}
                  onClick={() => setSelectedPack('double')}
                >
                   <div className="absolute top-0 right-0 bg-[#111] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                      Best Value
                   </div>
                   <div className="flex items-center gap-6">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPack === 'double' ? 'border-[#FF4F00]' : 'border-gray-300'}`}>
                         {selectedPack === 'double' && <div className="w-3 h-3 bg-[#FF4F00] rounded-full" />}
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold">The Partner Bundle</h3>
                         <p className="text-gray-500 text-sm mt-1">2x Pods, 2x App Licenses (Lifetime)</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-2xl font-bold">$89</div>
                      <div className="text-xs text-gray-400 font-mono line-through">$158</div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={12}/></div>
                      30-Day Money Back
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={12}/></div>
                      Free Shipping Worldwide
                   </div>
                   <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Check size={12}/></div>
                      iOS & Android Compatible
                   </div>
                </div>
             </div>

             <div className="lg:col-span-5">
                <div className="bg-[#111] text-white p-8 rounded-[2rem] shadow-2xl">
                   <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <ShieldCheck className="text-[#FF4F00]" />
                      Order Summary
                   </h3>
                   <div className="space-y-4 mb-8 text-sm text-gray-400">
                      <div className="flex justify-between">
                         <span>Item Subtotal</span>
                         <span className="text-white">${selectedPack === 'single' ? '49.00' : '89.00'}</span>
                      </div>
                      <div className="flex justify-between">
                         <span>Shipping</span>
                         <span className="text-white">Free</span>
                      </div>
                      <div className="h-[1px] bg-white/10 my-4"></div>
                      <div className="flex justify-between text-lg font-bold text-white">
                         <span>Total</span>
                         <span>${selectedPack === 'single' ? '49.00' : '89.00'}</span>
                      </div>
                   </div>
                   <button 
                     onClick={onCheckout}
                     className="w-full py-4 bg-[#FF4F00] text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#FF4F00] transition-colors mb-4 flex items-center justify-center gap-2 group"
                   >
                      Go to Checkout
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                   </button>
                   <div className="flex justify-center gap-4 opacity-50">
                      <CreditCard size={20} />
                      <span className="font-mono text-xs">SSL ENCRYPTED PAYMENT</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};
