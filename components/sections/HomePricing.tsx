
import React from 'react';
import { ArrowRight, Check, Tag, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal, ThePod } from '../ui/DesignSystem';

export const HomePricing = ({ onBuy }: { onBuy: () => void }) => {
  return (
    <section id="pricing" className="py-24 bg-[#F9F9F7] px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
            <div className="relative bg-[#0A0A0A] rounded-[3rem] p-8 md:p-20 text-white overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
                
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00] blur-[150px] opacity-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                {/* Left: Content */}
                <div className="relative z-10 text-center md:text-left">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                             <span className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse"></span>
                             Limited Batch 003 Available
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-none">
                            The Protocol.<br/>
                            <span className="text-[#FF6B00]">Unlocked.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            One payment. Lifetime access. Get the hardware that makes waking up inevitable.
                        </p>

                        <div className="space-y-4 mb-10">
                             {[
                                "Rise Alarm NFC Pod (Adhesive Backed)",
                                "Lifetime App Access (iOS & Android)",
                                "Unlimited Schedules & Alarms",
                                "1-Year Hardware Warranty"
                             ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </div>
                             ))}
                        </div>

                        <div className="flex flex-col gap-6">
                             <div className="flex items-center gap-4 justify-center md:justify-start">
                                <span className="text-6xl font-bold tracking-tight">$25</span>
                                <div className="flex flex-col items-start">
                                    <span className="text-xl text-gray-500 line-through decoration-[#FF6B00]">$50</span>
                                    <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wide">50% OFF Launch</span>
                                </div>
                             </div>

                             <button 
                                onClick={onBuy}
                                className="w-full md:w-fit px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center gap-4 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] group"
                            >
                                Secure Your Pod
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start gap-2">
                               <ShieldCheck size={12} /> 30-Day Money Back Guarantee
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right: Visual */}
                <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 md:hidden"></div>
                     <div className="relative z-0 hover:scale-105 transition-transform duration-700">
                        <ThePod scale={2.2} />
                     </div>
                </div>
            </div>
        </div>
    </section>
  );
};
