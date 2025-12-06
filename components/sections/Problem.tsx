
import React from 'react';
import { SectionTag } from '../ui/DesignSystem';
import { Brain, Ban, RotateCcw } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 md:py-32 rounded-[2rem] md:rounded-[3rem] relative z-20 mx-2 md:mx-6 overflow-hidden mt-12 lg:mt-24 mb-16 lg:mb-32">
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(45deg,#222_25%,transparent_25%,transparent_75%,#222_75%,#222),linear-gradient(45deg,#222_25%,transparent_25%,transparent_75%,#222_75%,#222)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
           <span className="font-mono text-[#FF4F00] uppercase tracking-widest text-xs font-bold mb-4 block">The Problem</span>
           <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">Sleep Inertia is <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">The Enemy.</span></h2>
           <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
             Your brain craves the "Snooze". It's a biological trap. Fragmented sleep makes you 
             groggier than if you just woke up the first time.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           {[
             { 
               icon: <Brain size={32} className="text-[#FF4F00]" />, 
               title: "The Brain Fog", 
               desc: "During the first 20 mins of waking, your prefrontal cortex is offline. You make bad decisions (snoozing)." 
             },
             { 
               icon: <RotateCcw size={32} className="text-[#FF4F00]" />, 
               title: "The Snooze Loop", 
               desc: "Drifting back to sleep resets your sleep cycle, causing severe grogginess known as sleep inertia." 
             },
             { 
               icon: <Ban size={32} className="text-[#FF4F00]" />, 
               title: "The Fix", 
               desc: "Movement. Physically leaving the bed is the only proven way to snap the brain out of inertia instantly." 
             }
           ].map((item, i) => (
             <div key={i} className="bg-[#151515] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-[#FF4F00]/30 transition-colors group">
                <div className="mb-6 bg-[#222] w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                   {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
