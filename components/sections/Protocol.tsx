
import React, { useRef, useEffect } from 'react';
import { Smartphone, MoveRight, Wifi } from 'lucide-react';

export const ProtocolSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // High-Performance Scroll Logic (Fixes Mac Jitter)
  useEffect(() => {
    let rAFId: number;
    
    const onScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;
      
      const container = containerRef.current;
      const sticky = stickyRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const stickyRect = sticky.getBoundingClientRect();
      
      // Calculate progress based on how far the container has moved up
      // The sticky element stays fixed for a while.
      const scrollHeight = containerRect.height - window.innerHeight;
      const scrollTop = -containerRect.top;
      
      let progress = scrollTop / scrollHeight;
      progress = Math.max(0, Math.min(progress, 1)); // Clamp between 0 and 1

      // UPDATE DOM DIRECTLY via CSS Variables (Bypasses React Render Cycle)
      // This is crucial for 120hz smooth scrolling on Mac trackpads
      container.style.setProperty('--scroll-progress', progress.toString());
    };

    // Use requestAnimationFrame loop for smoothest possible visual updates
    const loop = () => {
      onScroll();
      rAFId = requestAnimationFrame(loop);
    };
    
    loop();

    return () => cancelAnimationFrame(rAFId);
  }, []);

  const steps = [
    { 
      id: "01", 
      title: "Set Your Alarm", 
      desc: "Choose your wake-up time, sound, and days inside the Rise app.",
      icon: Smartphone 
    },
    { 
      id: "02", 
      title: "Place Your Pod", 
      desc: "Put the Rise Alarm Pod across the room, in your bathroom, or anywhere that forces you to get up.",
      icon: MoveRight 
    },
    { 
      id: "03", 
      title: "Get Up & Tap", 
      desc: "When your alarm rings, the only way to stop it is to stand up, walk to the Pod, and tap your phone.",
      icon: Wifi 
    }
  ];

  return (
    <>
    {/* Desktop Horizontal Scroll - Optimized */}
    <section ref={containerRef} className="hidden lg:block relative h-[400vh] bg-[#F2F2F0] overflow-visible" style={{ '--scroll-progress': 0 } as React.CSSProperties}>
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
         
         {/* Background Big Numbers - Moved Down (top-[65%]) */}
         <div 
           className="absolute top-[65%] left-0 w-full flex items-center pointer-events-none opacity-[0.06] select-none text-[#000] will-change-transform"
           style={{ 
             transform: 'translateY(-50%) translateX(calc(20vw - (var(--scroll-progress) * 150vw)))',
             transition: 'transform 0.1s linear' // Slight smoothing for the numbers
           }}
         >
            <div className="flex gap-[30vw]">
                {["01", "02", "03"].map((num) => (
                    <span key={num} className="text-[40vw] font-bold leading-none tracking-tighter">{num}</span>
                ))}
            </div>
         </div>

         {/* Animated Line */}
         <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
             <div className="w-[400vw] h-[2px] bg-gradient-to-r from-gray-200 via-[#FF6B00] to-gray-200 opacity-50 transform translate-y-32"></div>
         </div>

         {/* Header */}
         <div className="max-w-[1400px] mx-auto w-full px-6 mb-16 relative z-10 pl-24 pt-0">
            <h2 className="text-[#FF6B00] font-mono font-bold uppercase tracking-widest text-sm mb-4">The Steps</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-[#111] tracking-tighter">Three steps to<br/>wake up for real.</h3>
         </div>

         {/* Cards Container */}
         <div 
           className="flex px-6 pl-[20vw] will-change-transform mt-12"
           style={{ 
              transform: 'translateX(calc(0px - (var(--scroll-progress) * 150vw)))' 
           }}
         >
            {steps.map((step, index) => (
               <div 
                 key={index} 
                 className="w-[600px] flex-shrink-0 mr-[30vw] relative z-10"
               >
                  {/* "Geiler" Card Styling - Removed Top Right Icon */}
                  <div className="bg-white/80 backdrop-blur-2xl border border-white/60 p-12 rounded-[3rem] h-full relative group hover:border-[#FF6B00]/50 transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_-20px_rgba(255,107,0,0.15)] overflow-hidden">
                     {/* Gloss Effect */}
                     <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                     
                     <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center text-[#FF6B00] mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-gray-100">
                        <step.icon size={40} />
                     </div>
                     <h4 className="text-4xl font-bold text-[#111] mb-6 tracking-tight">{step.title}</h4>
                     <p className="text-xl text-gray-500 leading-relaxed font-medium">
                        {step.desc}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         {/* Progress Bar - Moved further down (bottom-8) */}
         <div className="absolute bottom-8 left-0 w-full px-6 md:px-[max(2rem,calc(50vw-700px))]">
            <div className="w-[300px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-[#FF6B00] will-change-transform origin-left" 
                 style={{ transform: 'scaleX(var(--scroll-progress))' }} 
               ></div>
            </div>
         </div>
      </div>
    </section>

    {/* Mobile View (No Parallax) */}
    <section className="block lg:hidden py-12 bg-[#F2F2F0] px-6">
        <div className="mb-12">
            <h2 className="text-[#FF6B00] font-mono font-bold uppercase tracking-widest text-xs mb-4">The Steps</h2>
            <h3 className="text-4xl font-bold text-[#111] tracking-tighter">Three steps to<br/>wake up for real.</h3>
        </div>
        <div className="relative space-y-12">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            {steps.map((step, i) => (
                <div key={i} className="transform transition-all duration-700">
                    <div className="relative pl-16">
                        <div className="absolute left-0 top-0 w-12 h-12 bg-[#111] border-4 border-[#F2F2F0] rounded-full flex items-center justify-center z-10 text-white font-bold shadow-sm">
                            {i+1}
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
                             <div className="mb-4 text-[#FF6B00]">
                                <step.icon size={32} />
                             </div>
                             <h4 className="text-2xl font-bold text-[#111] mb-2">{step.title}</h4>
                             <p className="text-gray-500 leading-relaxed text-sm">
                                {step.desc}
                             </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </>
  );
};
