
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div 
      className={`border-b border-gray-200 py-6 md:py-8 cursor-pointer group transition-colors duration-300 ${isOpen ? 'bg-transparent' : 'hover:bg-transparent'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start md:items-center gap-6">
         <h4 className={`text-lg md:text-xl font-bold transition-all duration-300 text-left leading-tight ${isOpen ? 'text-[#FF6B00]' : 'text-[#111] group-hover:text-gray-600'}`}>
            {question}
         </h4>
         <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FF6B00] border-[#FF6B00] rotate-180 text-white' : 'bg-transparent border-gray-300 text-gray-400 group-hover:border-[#111] group-hover:text-[#111]'}`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
         </div>
      </div>
      
      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
         <div className="overflow-hidden">
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl text-left pl-0 md:pl-0">
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
       q: "What is Rise?",
       a: "Rise is a new way to wake up; an alarm app paired with a physical Rise Pod that removes the snooze button entirely. To stop your alarm, you have to stand up and tap your phone on the Pod."
    },
    {
       q: "How does the Rise Pod work?",
       a: "The Pod uses passive NFC technology. When your alarm goes off, the only way to turn it off is by physically tapping your phone on the Pod. No Bluetooth. No pairing. No charging."
    },
    {
       q: "Why do I have to stand up?",
       a: "Snoozing keeps you tired. Rise forces you to stand up, move, and interrupt your half-asleep state, which leads to more consistent mornings and better wake-ups."
    },
    {
       q: "Compatibility?",
       a: "Any modern iPhone (XR and newer) or Android device that supports NFC (basically, if you can use tap-to-pay, you can use Rise)."
    },
    {
       q: "No Internet needed?",
       a: "Correct. The Pod functions without pairing or connectivity — it activates instantly through NFC signals."
    },
    {
       q: "Emergency Turnoff?",
       a: "Yes. Rise includes an Emergency Turnoff inside the app (a complex pattern) so you aren't stuck if you are traveling without your Pod."
    },
    {
        q: "Refund Policy?",
        a: "30-Day Money Back Guarantee. If it doesn't change your mornings, send it back for a full refund."
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-white rounded-[3rem] px-6">
       <div className="max-w-[900px] mx-auto text-center">
          <ScrollReveal>
             <div className="flex flex-col items-center gap-4 mb-16">
                <span className="font-mono uppercase text-xs tracking-widest text-[#FF6B00] font-bold">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111]">Common Questions</h2>
             </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto text-left">
             {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 50}>
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
