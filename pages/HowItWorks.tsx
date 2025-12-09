
import React from 'react';
import { ProtocolSection } from '../components/sections/Protocol';
import { ScrollReveal } from '../components/ui/DesignSystem';

export const HowItWorksPage = () => {
  return (
    <div className="pt-24 bg-[#F2F2F0] min-h-screen">
       <div className="pt-8 px-6 text-center">
          <ScrollReveal>
             <h1 className="text-4xl md:text-7xl font-bold mb-4 text-[#111] tracking-tight">How It Works</h1>
             <p className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide">Simple. Effective. Proven.</p>
          </ScrollReveal>
       </div>
       <ProtocolSection />
    </div>
  );
};
