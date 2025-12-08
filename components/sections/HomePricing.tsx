
import React from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { ScrollReveal, ThePod } from '../ui/DesignSystem';

export const HomePricing = ({ onBuy }: { onBuy: () => void }) => {
  return (
    <section id="pricing" className="py-24 bg-[#F9F9F7] px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="relative bg-[#0A0A0A] rounded-[3rem] p-8 md:p-20 text-white overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
                
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00] blur-[150px] opacity-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                {/* Left: Content - Made Wider */}
                <div className="relative z-10 text-center md:text-left md:col-span-7 lg:pr-12">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-none">
                            Rise Alarm.<br/>
                            <span className="text-[#FF6B00]">Unlocked.</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed md:mx-0 mx-auto">
                            One payment. Lifetime access. Get the hardware that makes waking up inevitable. No subscriptions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 text-left">
                             {[
                                "Rise Alarm NFC Pod",
                                "Lifetime App Access",
                                "Unlimited Schedules",
                                "1-Year Warranty"
                             ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center text-black shrink-0">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="font-medium text-base">{item}</span>
                                </div>
                             ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                             <div className="flex items-center gap-4">
                                <span className="text-6xl font-bold tracking-tight">$25</span>
                                <div className="flex flex-col items-start">
                                    <span className="text-xl text-gray-500 line-through decoration-[#FF6B00]">$50</span>
                                    <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wide">50% OFF Launch</span>
                                </div>
                             </div>

                             <button 
                                onClick={onBuy}
                                className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center gap-4 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] group"
                            >
                                Secure Your Pod
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                         
                         <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
                            <ShieldCheck size={14} /> 30-Day Money Back Guarantee
                         </div>
                    </ScrollReveal>
                </div>

                {/* Right: Visual - Adjusted Size */}
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center md:col-span-5">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 md:hidden"></div>
                     <div className="relative z-0 hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                        <ThePod scale={2.0} />
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
};
