
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div 
      className="border-b border-gray-200 py-10 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
         <h4 className={`text-xl md:text-3xl font-bold transition-colors duration-300 text-left ${isOpen ? 'text-[#FF4F00]' : 'text-[#111] group-hover:text-gray-600'}`}>
            {question}
         </h4>
         <div className={`shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FF4F00] border-[#FF4F00] rotate-180' : 'bg-white group-hover:bg-gray-50'}`}>
            {isOpen ? <Minus size={20} className="text-white"/> : <Plus size={20} className="text-[#111]"/>}
         </div>
      </div>
      
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
         <div className="overflow-hidden">
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl text-left">
               {answer}
            </p>
         </div>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
       q: "Is it really cheat-proof?",
       a: "Yes. Once the alarm locks, you cannot turn it off by closing the app, restarting the phone, or changing the time. The only way to stop the sound is to scan the NFC tag."
    },
    {
       q: "Does it work on iOS & Android?",
       a: "RiseAlarm is fully native on both platforms. We utilize Critical Alerts on iOS and Overlay permissions on Android to ensure the alarm breaks through Do Not Disturb modes."
    },
    {
       q: "What happens if my battery dies?",
       a: "The RiseAlarm Pod does not have a battery. It uses passive NFC technology, meaning it lasts forever and never needs charging."
    },
    {
       q: "Can I use multiple tags?",
       a: "Absolutely. You can set up a 'circuit'—requiring you to scan a tag in the bathroom, then the kitchen, for maximum wakefulness."
    }
  ];

  return (
    <section className="py-32 bg-white px-6">
       <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
             <div className="flex flex-col items-center gap-4 mb-16">
                <span className="font-mono uppercase text-xs tracking-widest text-[#FF4F00] font-bold">Knowledge Base</span>
                <h2 className="text-5xl font-bold text-[#111]">Common Queries</h2>
             </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
             {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                   <FAQItem 
                     question={faq.q} 
                     answer={faq.a} 
                     isOpen={openIndex === i} 
                     onClick={() => setOpenIndex(openIndex === i ? null : i)}
                   />
                </ScrollReveal>
             ))}
          </div>
       </div>
    </section>
  );
};
