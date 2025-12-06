
import React, { useState, useEffect } from 'react';

export const Navbar = ({ onViewChange }: { onViewChange: (view: string) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePreOrder = () => {
    const preorderEl = document.getElementById('preorder');
    if (preorderEl) {
       preorderEl.scrollIntoView({ behavior: 'smooth' });
    } else {
       onViewChange('home');
       setTimeout(() => {
          document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
       <nav 
         className={`
           pointer-events-auto
           transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
           ${scrolled ? 'w-[90%] md:w-[600px] bg-white/70 border-white/40 shadow-2xl backdrop-blur-2xl py-3' : 'w-[95%] md:w-[1200px] bg-white/30 border-white/20 shadow-sm backdrop-blur-md py-4'}
           border rounded-full px-4 flex justify-between items-center
         `}
       >
          <div className="pl-4 flex items-center gap-2 cursor-pointer group" onClick={() => onViewChange('home')}>
             <div className="w-3 h-3 bg-[#FF4F00] rounded-full group-hover:scale-110 transition-transform"></div>
             <span className="font-bold tracking-tight text-[#111] uppercase text-sm">RiseAlarm.</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-xs font-medium text-gray-600 transition-all duration-500 ${scrolled ? 'opacity-0 w-0 overflow-hidden scale-90' : 'opacity-100 scale-100'}`}>
             <button onClick={() => onViewChange('home')} className="hover:text-[#FF4F00] transition-colors">Why Rise?</button>
             <button onClick={() => onViewChange('home')} className="hover:text-[#FF4F00] transition-colors">System</button>
             <button onClick={() => onViewChange('home')} className="hover:text-[#FF4F00] transition-colors">Engineering</button>
             <button onClick={() => onViewChange('home')} className="hover:text-[#FF4F00] transition-colors">Manifesto</button>
          </div>

          <button 
            onClick={handlePreOrder}
            className="bg-[#111] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#FF4F00] transition-colors shadow-lg"
          >
            Pre-Order
          </button>
       </nav>
    </div>
  );
};

export const Ticker = () => (
  <div className="bg-[#FF4F00] py-3 overflow-hidden relative z-20">
    <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-sm font-bold uppercase tracking-widest text-black/90">
      {Array(10).fill(" /// No Snooze Allowed /// Build Habits /// Break Inertia").map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  </div>
);
