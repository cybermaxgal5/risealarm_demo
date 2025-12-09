
import React from 'react';
import { Mail, BookOpen, AlertCircle, Truck, RefreshCw, ChevronRight, ArrowUpRight } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQ';
import { ScrollReveal, ShinyButton } from '../components/ui/DesignSystem';

const SupportBentoCard = ({ icon: Icon, title, desc, className = "", variant = "default" }: any) => {
    const isDark = variant === "dark";
    const isWarn = variant === "warn";
    
    return (
        <div className={`
            relative p-8 rounded-[2.5rem] border transition-all duration-500 group overflow-hidden flex flex-col justify-between
            ${isDark ? 'bg-[#111] text-white border-transparent' : 'bg-white text-[#111] border-gray-100 hover:border-gray-300'}
            ${isWarn ? 'bg-red-50 border-red-100 hover:border-red-200' : ''}
            shadow-sm hover:shadow-xl
            ${className}
        `}>
            {/* Hover Gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none 
                ${isDark ? 'bg-gradient-to-br from-white/10 to-transparent' : 'bg-gradient-to-br from-gray-50 to-transparent'}
                ${isWarn ? 'from-red-100/50' : ''}
            `}></div>

            <div className="relative z-10 flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 
                    ${isDark ? 'bg-white/10 text-white' : 'bg-gray-50 text-[#111]'}
                    ${isWarn ? 'bg-red-100 text-red-600' : ''}
                `}>
                    <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className={`p-2 rounded-full border transition-colors opacity-0 group-hover:opacity-100
                    ${isDark ? 'border-white/20 text-white' : 'border-gray-200 text-black'}
                `}>
                    <ArrowUpRight size={16} />
                </div>
            </div>

            <div className="relative z-10">
                <h3 className={`font-bold text-2xl mb-3 tracking-tight ${isWarn ? 'text-red-900' : ''}`}>{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'} ${isWarn ? 'text-red-700' : ''}`}>
                    {desc}
                </p>
            </div>
        </div>
    );
};

export const SupportPage = () => {
  return (
    <div className="bg-[#F9F9F7] pt-32 pb-24">
       <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
              <div className="text-center mb-16">
                 <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Support Hub</h1>
                 <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
                     Everything you need to master your morning. Can't find the answer? We're here.
                 </p>
                 
                 <a href="mailto:max@risealarm.app" className="inline-flex items-center gap-3 px-8 py-4 bg-[#111] text-white rounded-full font-bold hover:bg-[#FF6B00] transition-colors group shadow-lg">
                    <Mail size={18} />
                    <span>max@risealarm.app</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform opacity-50" />
                 </a>
              </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24 min-h-[500px]">
                 {/* Bento Grid Layout */}
                 
                 {/* Large Primary Item */}
                 <SupportBentoCard 
                    className="md:col-span-2 md:row-span-1"
                    variant="dark"
                    icon={BookOpen}
                    title="Setup Guide"
                    desc="Start here. The comprehensive guide to unboxing, placing your Pod, and pairing it with the app for the first time. It's simpler than you think."
                 />
                 
                 {/* Warning Item */}
                 <SupportBentoCard 
                    className="md:col-span-1"
                    variant="warn"
                    icon={AlertCircle}
                    title="Troubleshooting"
                    desc="Pod not scanning? Ensure NFC is on. Remove thick cases. Tap top of phone."
                 />

                 {/* Standard Items */}
                 <SupportBentoCard 
                    className="md:col-span-1"
                    icon={Truck}
                    title="Shipping"
                    desc="US orders: 3-5 days. Int'l: 7-14 days. Track your order here."
                 />
                 
                 <SupportBentoCard 
                    className="md:col-span-2"
                    icon={RefreshCw}
                    title="Returns & Warranty"
                    desc="We stand by our product. 30-day money back guarantee and a full 1-year warranty on hardware defects."
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
