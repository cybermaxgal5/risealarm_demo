
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

export const Navbar = ({ onViewChange, cartCount }: { onViewChange: (view: string) => void, cartCount: number }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExpanded = !scrolled || hovered;

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
       <nav 
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         className={`
           pointer-events-auto
           transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
           ${isExpanded ? 'w-[95%] md:w-[1200px] bg-white/60 border-white/40' : 'w-[95%] md:w-[600px] bg-white/80 border-white/60'}
           shadow-2xl backdrop-blur-xl border rounded-full px-4 md:px-6 py-3 md:py-4 flex justify-between items-center
         `}
       >
          <div className="flex items-center gap-2 cursor-pointer group shrink-0" onClick={() => onViewChange('home')}>
             <img src="/assets/ralogo.png" alt="Rise Alarm Logo" className="h-6 md:h-8 w-auto object-contain" />
          </div>

          <div 
            className={`
              hidden md:flex items-center gap-6 text-[11px] font-bold text-gray-600 uppercase tracking-widest transition-all duration-500 overflow-hidden
              ${isExpanded ? 'opacity-100 max-w-[500px] px-4' : 'opacity-0 max-w-0 px-0'}
            `}
          >
             {/* Shop Link Removed */}
             <button onClick={() => onViewChange('how-it-works')} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">How It Works</button>
             <button onClick={() => onViewChange('about')} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">About</button>
             <button onClick={() => onViewChange('support')} className="hover:text-[#FF6B00] transition-colors whitespace-nowrap">FAQ</button>
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
             <button 
               onClick={() => onViewChange('download')}
               className={`hidden md:block bg-gray-100 text-[#111] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors ${!isExpanded ? 'hidden' : ''}`}
             >
               App
             </button>
             
             <div className="flex items-center gap-2">
                 <button 
                   onClick={() => onViewChange('shop')}
                   className="bg-[#111] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#FF6B00] transition-colors shadow-lg"
                 >
                   Pre-Order
                 </button>
                 
                 <button 
                    onClick={() => onViewChange('cart')}
                    className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#111] hover:text-[#FF6B00] transition-colors border border-gray-100 shadow-md"
                 >
                    <ShoppingBag size={18} />
                    {cartCount > 0 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B00] rounded-full text-[9px] text-white flex items-center justify-center font-bold">
                            {cartCount}
                        </div>
                    )}
                 </button>
             </div>
          </div>
       </nav>
    </div>
  );
};

export const Ticker = () => (
  <div className="bg-[#FF6B00] py-3 overflow-hidden relative z-20">
    <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-sm font-bold uppercase tracking-widest text-black/90">
      {Array(10).fill(" /// Wake Up. Tap In. Start Your Day. /// No Snooze Allowed /// Build Habits").map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  </div>
);
