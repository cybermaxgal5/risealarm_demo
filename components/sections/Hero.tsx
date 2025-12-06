
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, ThePod, FluidBackground } from '../ui/DesignSystem';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center overflow-hidden bg-[#F9F9F7]">
      <FluidBackground />
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-4">
         <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-full pt-20 lg:pt-0">
             <ScrollReveal>
               <h1 className="text-[18vw] sm:text-[15vw] lg:text-[6.5rem] xl:text-[7.5rem] font-bold tracking-[-0.04em] text-[#0A0A0A] leading-[0.9] mb-8 lg:mb-6 whitespace-nowrap lg:whitespace-normal">
                 WAKE UP<br/>
                 <span className="text-[#FF4F00]">FOR REAL.</span>
               </h1>
             </ScrollReveal>

             <ScrollReveal delay={100}>
               <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-lg mb-10 lg:mb-10 tracking-tight mx-auto lg:mx-0">
                 The first alarm clock that requires you to physically leave your bed. <span className="text-[#111] font-bold">No snooze. No mercy.</span>
               </p>
             </ScrollReveal>

             <ScrollReveal delay={200}>
                <button 
                  onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-[#0A0A0A] text-white rounded-full text-base lg:text-lg font-bold flex items-center gap-4 hover:bg-[#FF4F00] transition-colors duration-300 group shadow-2xl mx-auto lg:mx-0"
                >
                  Get The Kit — $49
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </ScrollReveal>
         </div>

         <div className="hidden lg:flex justify-end items-center h-full perspective-1000">
             <div 
               className="will-change-transform relative w-full flex justify-end"
               style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
             >
                <div className="scale-[1.1] xl:scale-[1.3] transform-gpu">
                   <ThePod scale={2} className="drop-shadow-2xl" />
                </div>
             </div>
         </div>
      </div>
    </section>
  );
};
