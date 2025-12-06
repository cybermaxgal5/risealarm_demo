
import React, { useRef, useEffect, useState } from 'react';
import { Smartphone, MoveRight, Wifi } from 'lucide-react';
import { ScrollReveal } from '../ui/DesignSystem';

export const ProtocolSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const offsetTop = section.offsetTop;
      const scrollY = window.scrollY;
      const height = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const start = offsetTop;
      const end = offsetTop + height - windowHeight;

      if (scrollY >= start && scrollY <= end) {
        const p = (scrollY - start) / (end - start);
        setScrollProgress(p);
      } else if (scrollY < start) {
        setScrollProgress(0);
      } else if (scrollY > end) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { 
      id: "01", 
      title: "Set & Lock", 
      desc: "Once locked, the alarm cannot be turned off from the phone. No closing the app. No turning off the phone.",
      icon: Smartphone 
    },
    { 
      id: "02", 
      title: "The Rise", 
      desc: "The alarm loops. Your only option is to get out of bed. Physically moving snaps the brain out of sleep inertia.",
      icon: MoveRight 
    },
    { 
      id: "03", 
      title: "Scan to Stop", 
      desc: "Walk to your bathroom or kitchen. Tap your phone on the NFC Pod to silence the noise. You are awake.",
      icon: Wifi 
    }
  ];

  return (
    <>
    <section ref={sectionRef} className="hidden lg:block relative h-[400vh] bg-[#F2F2F0] overflow-visible">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
         <div 
           className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex items-center pointer-events-none opacity-[0.06] select-none text-[#000]"
           style={{ transform: `translateY(-50%) translateX(${20 - scrollProgress * 150}vw)` }}
         >
            <div className="flex gap-[30vw]">
                {["01", "02", "03"].map((num) => (
                    <span key={num} className="text-[40vw] font-bold leading-none tracking-tighter">{num}</span>
                ))}
            </div>
         </div>
         <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
             <div className="w-[400vw] h-[2px] bg-gradient-to-r from-gray-200 via-[#FF4F00] to-gray-200 opacity-50 transform translate-y-32"></div>
         </div>
         <div className="max-w-[1400px] mx-auto w-full px-6 mb-12 relative z-10 pl-24">
            <h2 className="text-[#FF4F00] font-mono font-bold uppercase tracking-widest text-sm mb-4">The Methodology</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-[#111] tracking-tighter">Three steps to<br/>morning dominance.</h3>
         </div>
         <div 
           className="flex px-6 pl-[20vw]"
           style={{ transform: `translateX(${scrollProgress * -150}vw)`, transition: 'transform 0.1s linear' }}
         >
            {steps.map((step, index) => (
               <div 
                 key={index} 
                 className="w-[600px] flex-shrink-0 mr-[30vw] relative z-10"
               >
                  <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-12 rounded-[3rem] h-full relative group hover:border-[#FF4F00] transition-all duration-500 shadow-lg hover:shadow-2xl">
                     <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF4F00] rounded-full flex items-center justify-center text-white font-bold border-4 border-[#F2F2F0]">
                        {index + 1}
                     </div>
                     <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#FF4F00] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md border border-gray-100">
                        <step.icon size={40} />
                     </div>
                     <h4 className="text-4xl font-bold text-[#111] mb-6">{step.title}</h4>
                     <p className="text-xl text-gray-500 leading-relaxed">
                        {step.desc}
                     </p>
                  </div>
               </div>
            ))}
         </div>
         <div className="absolute bottom-12 left-0 w-full px-6 md:px-[max(2rem,calc(50vw-700px))]">
            <div className="w-[300px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-[#FF4F00]" 
                 style={{ width: `${scrollProgress * 100}%` }} 
               ></div>
            </div>
         </div>
      </div>
    </section>

    <section className="block lg:hidden py-24 bg-[#F2F2F0] px-6">
        <div className="mb-16">
            <h2 className="text-[#FF4F00] font-mono font-bold uppercase tracking-widest text-xs mb-4">The Methodology</h2>
            <h3 className="text-4xl font-bold text-[#111] tracking-tighter">Three steps to<br/>dominance.</h3>
        </div>
        <div className="relative space-y-12">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center z-10 text-[#FF4F00] font-bold">
                            {i+1}
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                             <div className="mb-4 text-[#FF4F00]">
                                <step.icon size={32} />
                             </div>
                             <h4 className="text-2xl font-bold text-[#111] mb-2">{step.title}</h4>
                             <p className="text-gray-500 leading-relaxed text-sm">
                                {step.desc}
                             </p>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    </section>
    </>
  );
};
