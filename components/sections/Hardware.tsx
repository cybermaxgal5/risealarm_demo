
import React, { useState, useEffect, useRef } from 'react';
import { SectionTag, ThePod, ScrollReveal } from '../ui/DesignSystem';
import { Smartphone, Cpu, Battery, Wifi, Layers } from 'lucide-react';

const ScrollFeature = ({ title, spec, desc, icon: Icon, id, setActiveId }: any) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveId(id);
                }
            },
            { threshold: 0.6, rootMargin: "-10% 0px -10% 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [id, setActiveId]);

    return (
        <div ref={ref} className="min-h-[30vh] md:min-h-[40vh] flex items-center py-4 md:py-0">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 hover:border-[#FF4F00] transition-all duration-500 w-full shadow-sm hover:shadow-lg">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#FF4F00] mb-6">
                    <Icon size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#111]">{title}</h3>
                <span className="font-mono text-xs text-[#FF4F00] mb-6 block uppercase tracking-widest">{spec}</span>
                <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export const HardwareSection = () => {
  const [activeFeature, setActiveFeature] = useState('nfc');

  const features = [
     { 
        id: 'nfc',
        icon: Wifi, 
        title: "Passive NFC", 
        spec: "13.56 MHz", 
        desc: "Requires zero power. Simply tap your phone against the surface to verify wake-up." 
     },
     { 
        id: 'battery',
        icon: Battery, 
        title: "Power Autonomous", 
        spec: "Infinite Life", 
        desc: "No charging required. The RiseAlarm Pod uses energy harvesting from the NFC field." 
     },
     { 
        id: 'mount',
        icon: Layers, 
        title: "Mount Anywhere", 
        spec: "3M Adhesive", 
        desc: "Industrial grade backing allows mounting in bathrooms, kitchens, or hallways." 
     },
     { 
        id: 'chip',
        icon: Cpu, 
        title: "Zero Latency", 
        spec: "<100ms Response", 
        desc: "Instant recognition. The app shuts off the alarm the exact moment contact is made." 
     }
  ];

  return (
    <div className="bg-[#F2F2F0] text-[#111] py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 md:mb-32 text-center md:text-left">
            <h2 className="text-4xl md:text-8xl font-bold leading-none tracking-tight mb-4">
                Engineering<br/>Design
                <span className="text-[#FF4F00]"> Imperative.</span>
            </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 h-[50vh] lg:h-screen sticky top-20 lg:top-0 flex items-center justify-center bg-[#E5E5E2] rounded-[2rem] lg:rounded-[3rem] border border-gray-300 overflow-hidden order-1 lg:order-1 z-10 shadow-inner">
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="relative z-10 scale-[0.8] lg:scale-[1.2] transition-all duration-500">
                    <ThePod scale={2} highlight={activeFeature} />
                </div>
                <div className="absolute bottom-8 lg:bottom-12 left-0 w-full text-center">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-[0.3em]">
                        System View: <span className="text-[#FF4F00] font-bold">{activeFeature.toUpperCase()}</span>
                    </span>
                </div>
            </div>
            <div className="lg:w-1/2 lg:pl-20 order-2 lg:order-2 pb-24">
               {features.map((f, i) => (
                   <ScrollFeature key={i} {...f} setActiveId={setActiveFeature} />
               ))}
            </div>
        </div>
      </div>
    </div>
  );
};
