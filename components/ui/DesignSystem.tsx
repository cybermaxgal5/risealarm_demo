
import React, { useEffect, useState, useRef } from 'react';

// --- SHARED HOOKS ---
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollProgress;
};

// --- CORE COMPONENTS ---

export const ScrollReveal = ({ children, className = "", delay = 0, yOffset = 40 }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 translate-y-[${yOffset}px]`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md mb-8 w-fit shadow-sm">
      <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-pulse"></span>
      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">{text}</span>
  </div>
);

// --- VISUAL ASSETS (The Pod & Background) ---

export const FluidBackground = () => {
    // Simplified for performance, kept if needed for specific sections
  return <div className="absolute inset-0 bg-gray-100 -z-10" />;
};

export const ThePod = ({ scale = 1, className = "", highlight = 'none' }: { scale?: number, className?: string, highlight?: string }) => {
  return (
    <div 
      className={`relative group perspective-1000 ${className}`}
      style={{ 
        width: `${300 * scale}px`, 
        height: 'auto',
        transformStyle: 'preserve-3d'
      }}
    >
       <div 
          className={`relative z-10 transition-all duration-700 ease-out`}
        >
          <img 
            src="/assets/RisePod.png" 
            alt="Rise Alarm Pod"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
       </div>
    </div>
  );
};
