
import React from 'react';
import { Check, X } from 'lucide-react';
import { Reveal } from '../ui/DesignSystem';

export const ComparisonSection = () => {
  return (
    <section className="py-32 px-6 bg-[#F9F9F7]">
        <div className="max-w-[1200px] mx-auto">
            <Reveal mode="blur">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 pb-12">
                    <div>
                        <span className="font-mono uppercase text-xs tracking-widest text-[#FF6B00] font-bold block mb-4">Self Assessment</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#111] tracking-tight">Is Rise Right for You?</h2>
                    </div>
                    <p className="text-gray-500 max-w-md mt-6 md:mt-0 text-right md:text-left">
                        We built this for a specific type of person. See if you fit the profile.
                    </p>
                </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                {/* YES Column */}
                <div className="relative">
                    <Reveal mode="mask">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="text-5xl font-bold text-[#111]">YES</div>
                            <div className="h-px bg-[#111] flex-grow"></div>
                        </div>
                    </Reveal>
                    
                    <ul className="space-y-8">
                        {[
                            "You hit snooze 3+ times every morning",
                            "You're tired of being tired",
                            "You want to build better morning habits",
                            "You're ready to take control of your wake-up",
                            "You need accountability to get out of bed",
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 100} mode="slide">
                                <li className="flex items-start gap-6 group cursor-default">
                                    <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-600 shrink-0 mt-1 bg-green-50 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-xl font-medium text-gray-800 leading-tight group-hover:text-[#111] transition-colors">{item}</span>
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>

                {/* NO Column - REDESIGNED */}
                <div className="relative">
                     <Reveal mode="mask" delay={200}>
                         <div className="flex items-center gap-4 mb-10">
                            <div className="text-5xl font-bold text-[#111]">NO</div>
                            <div className="h-px bg-[#111] flex-grow"></div>
                        </div>
                    </Reveal>
                    
                    <ul className="space-y-8">
                        {[
                            "You're happy with hitting snooze 'just one more time'",
                            "You don't mind starting your day feeling behind",
                            "You're okay with waking up rushed and stressed",
                            "Missing morning workouts doesn't bother you",
                            "You're fine letting another day slip by",
                        ].map((item, i) => (
                            <Reveal key={i} delay={(i * 100) + 200} mode="slide">
                                <li className="flex items-start gap-6 group cursor-default">
                                    <div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center text-red-600 shrink-0 mt-1 bg-red-50 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                        <X size={14} strokeWidth={3} />
                                    </div>
                                    {/* Text is now #111 (dark) instead of gray, as requested */}
                                    <span className="text-xl font-medium text-gray-800 leading-tight group-hover:text-[#111] transition-colors">{item}</span>
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};
