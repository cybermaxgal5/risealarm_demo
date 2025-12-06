
import React, { useRef, useEffect, useState } from 'react';

export const ManifestoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // LOGIC: Extreme Slow Trigger (as requested)
      const start = windowHeight * 1.0; 
      const end = windowHeight * -0.3;
      
      let p = (start - rect.top) / (start - end);
      p = Math.min(Math.max(p, 0), 1);
      
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "We believe the snooze button is the single most destructive invention for human productivity. It trains your brain to procrastinate the very first task of the day.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="min-h-[90vh] flex items-center justify-center bg-[#F5F5F0] text-[#111] relative overflow-hidden py-24 md:py-40">
       <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <div className="w-20 h-1 bg-[#FF4F00] mx-auto mb-12 rounded-full"></div>
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-12 flex flex-wrap justify-center gap-x-3 gap-y-1">
              {words.map((word, i) => {
                const step = 1 / words.length;
                const wordThreshold = i * step;
                const isActive = scrollProgress > wordThreshold;
                return (
                  <span 
                    key={i} 
                    className="transition-colors duration-200 ease-linear"
                    style={{ 
                      color: isActive ? '#111' : '#E6E6E6', 
                    }}
                  >
                    {word}
                  </span>
                )
              })}
            </p>
            <p className="text-gray-400 font-mono uppercase tracking-widest text-sm">
              — The Rise Manifesto
            </p>
       </div>
    </section>
  );
};
