
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div 
      className="border-b border-gray-200 py-8 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-4">
         <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 text-left ${isOpen ? 'text-[#FF6B00]' : 'text-[#111] group-hover:text-gray-600'}`}>
            {question}
         </h4>
         <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FF6B00] border-[#FF6B00] rotate-180' : 'bg-white group-hover:bg-gray-50'}`}>
            {isOpen ? <Minus size={16} className="text-white"/> : <Plus size={16} className="text-[#111]"/>}
         </div>
      </div>
      
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
         <div className="overflow-hidden">
            <p className="text-base text-gray-500 leading-relaxed max-w-2xl text-left">
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
       a: "Rise is a new way to wake up; an alarm app paired with a physical Rise Pod that removes the snooze button entirely. To stop your alarm, you have to stand up and tap your phone on the Pod, forcing real movement and helping you wake up for real."
    },
    {
       q: "How does the Rise Pod work?",
       a: "The Pod uses passive NFC technology. When your alarm goes off, the only way to turn it off is by physically tapping your phone on the Pod. No Bluetooth. No pairing. No charging."
    },
    {
       q: "Why do I have to stand up to turn off the alarm?",
       a: "Snoozing keeps you tired. Rise forces you to stand up, move, and interrupt your half-asleep state, which leads to more consistent mornings and better wake-ups."
    },
    {
       q: "What phones are compatible with Rise?",
       a: "Any modern iPhone or Android device that supports NFC (basically, if you can use tap-to-pay, you can use Rise)."
    },
    {
       q: "Do I need Wi-Fi or Bluetooth for Rise to work?",
       a: "No. The Pod functions without pairing or connectivity — it activates instantly through NFC."
    },
    {
       q: "What happens if I forget my alarm is set and I'm away from the Pod?",
       a: "Rise includes an Emergency Turnoff inside the app. It requires a short confirmation sequence but it ensures you're never stuck with the alarm going off if you're traveling or not near your Pod."
    },
    {
       q: "Can I customize my alarms?",
       a: "Yes. You can choose ringtones. We have a wide variety of 100's of ringtones including; alarm sounds, hit songs, and even David Goggins yelling at you."
    },
    {
        q: "Will Rise work if my phone is on Silent or Do Not Disturb?",
        a: "Yes. As long as you give the app the correct permissions, Rise alarms override silent mode and DND."
    },
    {
        q: "How do I set up my Rise Pod?",
        a: "1. Download the App. 2. Stick the Pod to your wall (away from bed). 3. Tap your phone to the Pod to pair. Done."
    },
    {
        q: "Is the Rise Pod safe?",
        a: "Yes. NFC is safe, contact-based, and only activates within an inch of your phone. There's no tracking, no microphone, and nothing stored on the Pod itself."
    },
    {
        q: "Can I buy more than one Pod?",
        a: "Absolutely. Many users place Pods in multiple locations, and the app supports as many Pods as you want."
    },
    {
        q: "When is Rise launching?",
        a: "We're currently in early testing and validation. Early users will receive updates, prototypes, and first access as we move toward launch."
    },
    {
        q: "How can I join the early tester group?",
        a: "Join the waitlist on our website and fill out the validation form. Early testers get priority access and help shape the final product."
    }
  ];

  return (
    <section className="pt-32 pb-12 bg-white px-6">
       <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
             <div className="flex flex-col items-center gap-4 mb-16">
                <span className="font-mono uppercase text-xs tracking-widest text-[#FF6B00] font-bold">Knowledge Base</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111]">Everything you need<br/>to know about Rise Alarm.</h2>
             </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
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
