
import React from 'react';
import { Check, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { ThePod, Reveal, TextReveal, ShinyButton, TiltCard } from '../components/ui/DesignSystem';

export const ShopPage = ({ onAddToCart }: { onAddToCart: () => void }) => {
  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-28 md:pt-32 pb-24 px-4 md:px-6">
       <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          {/* Left: Product Gallery - Re-ordered for mobile flow */}
          <div className="order-1 lg:order-1">
             <Reveal mode="blur">
                <TiltCard>
                    <div className="bg-[#E5E5E2] rounded-[2.5rem] h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center relative overflow-hidden border border-gray-200 shadow-inner group cursor-crosshair">
                        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        {/* Wrapper controls the pod size nicely on mobile */}
                        <div className="w-[80%] md:w-full flex justify-center">
                             <ThePod scale={2} />
                        </div>
                        <div className="absolute bottom-8 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                            <span className="bg-white/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest text-gray-600">Drag to Inspect</span>
                        </div>
                    </div>
                </TiltCard>
             </Reveal>
          </div>

          {/* Right: Product Details */}
          <div className="order-2 lg:order-2">
             <Reveal delay={100}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#FF6B00]">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">Early Access Batch</span>
                </div>
             </Reveal>
             
             <Reveal delay={200} mode="mask">
                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#111] mb-4 tracking-tight">
                    <TextReveal text="Rise Alarm Pod." delay={0.2} />
                 </h1>
             </Reveal>

             <Reveal delay={300}>
                 <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-3xl font-bold text-[#FF6B00]">$25.00</span>
                    <span className="text-xl text-gray-400 line-through decoration-1">$50.00</span>
                    <span className="text-xs font-bold bg-[#FF6B00]/10 text-[#FF6B00] px-2 py-1 rounded animate-pulse">50% OFF</span>
                 </div>
             </Reveal>

             <Reveal delay={400} mode="blur">
                 <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    <p>
                    The missing piece to your morning routine. The Rise Pod pairs with our app to force you out of bed. 
                    Scan it to stop the alarm. No snooze, no cheating.
                    </p>
                 </div>
             </Reveal>

             <div className="space-y-4 mb-10">
                {['Compatible with iOS & Android', 'Battery-free (NFC Technology)', 'Premium Adhesive Backing included'].map((feat, i) => (
                    <Reveal key={i} delay={500 + (i * 100)} mode="slide">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><Check size={14}/></div>
                            <span className="font-medium text-sm md:text-base">{feat}</span>
                        </div>
                    </Reveal>
                ))}
             </div>

             <Reveal delay={800}>
                 <ShinyButton 
                    onClick={onAddToCart}
                    className="w-full py-4 md:py-5 text-lg"
                >
                    Pre-Order Now — $25.00
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </ShinyButton>
             </Reveal>
             
             <Reveal delay={900}>
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                    <ShieldCheck size={14} />
                    30-Day Money Back Guarantee
                </p>
             </Reveal>
          </div>
       </div>
    </div>
  );
};
