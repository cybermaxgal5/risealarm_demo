
import React from 'react';
import { Check, X } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

export const ComparisonSection = () => {
  return (
    <section className="py-32 px-6 bg-[#F9F9F7]">
        <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 pb-12">
                    <div>
                        <span className="font-mono uppercase text-xs tracking-widest text-[#FF6B00] font-bold block mb-4">Self Assessment</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#111] tracking-tight">Is Rise Right for You?</h2>
                    </div>
                    <p className="text-gray-500 max-w-md mt-6 md:mt-0 text-right md:text-left">
                        We built this for a specific type of person. See if you fit the profile.
                    </p>
                </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                {/* YES Column */}
                <ScrollReveal delay={100}>
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="text-5xl font-bold text-[#111]">YES</div>
                            <div className="h-px bg-[#111] flex-grow"></div>
                        </div>
                        
                        <ul className="space-y-8">
                            {[
                                "You hit snooze 3+ times every morning",
                                "You're tired of being tired",
                                "You want to build better morning habits",
                                "You're ready to take control of your wake-up",
                                "You need accountability to get out of bed",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-6 group">
                                    <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-600 shrink-0 mt-1 bg-green-50 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-xl font-medium text-gray-800 leading-tight group-hover:text-[#111] transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

                {/* NO Column */}
                <ScrollReveal delay={200}>
                    <div className="relative opacity-60 hover:opacity-100 transition-opacity duration-500">
                         <div className="flex items-center gap-4 mb-10">
                            <div className="text-5xl font-bold text-gray-400">NO</div>
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </div>
                        
                        <ul className="space-y-8">
                            {[
                                "You're happy with hitting snooze 'just one more time'",
                                "You don't mind starting your day feeling behind",
                                "You're okay with waking up rushed and stressed",
                                "Missing morning workouts doesn't bother you",
                                "You're fine letting another day slip by",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-6 group">
                                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 shrink-0 mt-1 group-hover:border-red-400 group-hover:text-red-500 transition-colors">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-xl font-medium text-gray-400 leading-tight group-hover:text-gray-600 transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
  );
};
