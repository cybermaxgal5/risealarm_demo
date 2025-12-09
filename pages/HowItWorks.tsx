
import React from 'react';
import { ProtocolSection } from '../components/sections/Protocol';
import { ScrollReveal } from '../components/ui/DesignSystem';

export const HowItWorksPage = () => {
  return (
    <div className="pt-24 bg-[#F2F2F0] min-h-screen">
       {/* Removed padding-bottom to bring Protocol Section closer */}
       <div className="pt-8 px-6 text-center">
          <ScrollReveal>
             <h1 className="text-4xl md:text-6xl font-bold mb-4">How It Works - Simple. Effective. Proven.</h1>
          </ScrollReveal>
       </div>
       <ProtocolSection />
    </div>
  );
};
