
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#F9F9F7] pt-32 md:pt-0">
      
      {/* Full Screen Background Image (Hidden on Mobile) */}
      <div className="hidden md:block absolute inset-0 z-0">
         <img 
            src="/assets/herobgrise.png" 
            alt="Rise Alarm Hero Background" 
            className="w-full h-full object-cover"
         />
         {/* Subtle overlay to ensure text is readable regardless of image brightness */}
         <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-12 lg:gap-4">
         
         {/* Text Side */}
         <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center pt-8 lg:pt-0 pb-12 lg:pb-0">
             <ScrollReveal>
               <h1 className="text-[12vw] sm:text-[8vw] lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[0.95] mb-6 lg:mb-8 drop-shadow-sm">
                 WAKE UP.<br/>
                 TAP IN.<br/>
                 <span className="text-[#FF6B00]">START YOUR DAY.</span>
               </h1>
             </ScrollReveal>

             <ScrollReveal delay={100}>
               <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed max-w-md lg:max-w-lg mb-8 lg:mb-10 tracking-tight mx-auto lg:mx-0 drop-shadow-sm">
                 The alarm clock that gets you out of bed. Scan your Rise Pod across the room to silence your alarm.
               </p>
             </ScrollReveal>

             <ScrollReveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-[#0A0A0A] text-white rounded-full text-sm lg:text-base font-bold flex items-center justify-center gap-3 hover:bg-[#FF6B00] transition-colors duration-300 group shadow-2xl"
                  >
                    Pre-Order Now — $25
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
             </ScrollReveal>
         </div>

         {/* Empty column to balance grid if needed, or allow image to show through */}
         <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};
