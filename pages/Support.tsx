
import React from 'react';
import { Mail, BookOpen, AlertCircle, Truck, RefreshCw, ChevronRight } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQ';
import { ScrollReveal } from '../components/ui/DesignSystem';

const SupportItem = ({ icon: Icon, title, desc }: any) => (
  <div className="flex items-start gap-6 p-6 md:p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-300 transition-all duration-300 group shadow-sm hover:shadow-md">
     <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#111] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0">
        <Icon size={24} />
     </div>
     <div>
         <h3 className="font-bold text-lg mb-2">{title}</h3>
         <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
     </div>
  </div>
);

export const SupportPage = () => {
  return (
    <div className="bg-[#F9F9F7] pt-32 pb-24">
       <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
              <div className="text-center mb-16">
                 <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Hub</h1>
                 <p className="text-xl text-gray-500 mb-8">How can we help you today?</p>
                 
                 <a href="mailto:max@risealarm.app" className="inline-flex items-center gap-3 px-8 py-4 bg-[#111] text-white rounded-full font-bold hover:bg-[#FF6B00] transition-colors group">
                    <Mail size={18} />
                    <span>max@risealarm.app</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform opacity-50" />
                 </a>
              </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
              <div className="grid md:grid-cols-2 gap-4 mb-24">
                 <SupportItem 
                    icon={BookOpen}
                    title="Setup Guide"
                    desc="1. Download App. 2. Place Pod. 3. Scan to pair. It's that simple."
                 />
                 <SupportItem 
                    icon={AlertCircle}
                    title="Troubleshooting"
                    desc="Pod not scanning? Ensure NFC is on. Remove thick cases. Tap top of phone."
                 />
                 <SupportItem 
                    icon={Truck}
                    title="Shipping Info"
                    desc="We ship worldwide. US orders take 3-5 days. International 7-14 days."
                 />
                 <SupportItem 
                    icon={RefreshCw}
                    title="Returns & Warranty"
                    desc="30-day money back guarantee. 1-year warranty on hardware defects."
                 />
              </div>
          </ScrollReveal>

          <div className="border-t border-gray-200 pt-16">
             <FAQSection />
          </div>
       </div>
    </div>
  );
};
