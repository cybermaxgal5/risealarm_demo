
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({ cartCount }: { cartCount: number }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isExpanded = !scrolled || hovered || mobileMenuOpen;

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
         <nav 
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
           className={`
             pointer-events-auto
             transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.25,1)]
             ${isExpanded ? 'w-[calc(100%-24px)] md:w-[1200px] bg-white/70 border-white/50 py-3 md:py-4' : 'w-[calc(100%-24px)] md:w-[600px] bg-white/90 border-white/80 py-2.5 md:py-3'}
             shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] backdrop-blur-2xl border rounded-full px-4 md:px-6 flex justify-between items-center relative z-50
           `}
         >
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
                <Link to="/" className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                   <img src="/assets/ralogo.png" alt="Rise Alarm Logo" className="h-6 md:h-8 w-auto object-contain transition-transform duration-500 group-hover:rotate-12" />
                   <span className={`font-bold text-sm md:text-base tracking-tight text-[#111] transition-all duration-500 opacity-100 translate-x-0 ${isExpanded ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-100 md:translate-x-0'}`}>
                      Rise
                   </span>
                </Link>
            </div>

            {/* Center: Desktop Links */}
            <div className="hidden md:flex flex-0 shrink-0 justify-center">
                <div 
                  className={`
                    flex items-center gap-8 text-sm font-bold text-gray-600 uppercase tracking-widest transition-all duration-700 overflow-hidden
                    ${isExpanded ? 'opacity-100 max-w-[500px] px-4' : 'opacity-0 max-w-0 px-0'}
                  `}
                >
                   {[
                     { path: '/how-it-works', label: 'How It Works' },
                     { path: '/about', label: 'About' },
                     { path: '/support', label: 'Support' }
                   ].map((item) => (
                       <Link 
                        key={item.path}
                        to={item.path}
                        className="hover:text-[#FF6B00] transition-colors whitespace-nowrap relative group"
                       >
                           {item.label}
                           <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF6B00] transition-all duration-300 group-hover:w-full"></span>
                       </Link>
                   ))}
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex-1 flex justify-end items-center gap-2 md:gap-3">
               <div className="hidden md:flex items-center gap-3">
                   <Link 
                     to="/download"
                     className={`bg-gray-100 text-[#111] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors ${!isExpanded ? 'hidden' : ''}`}
                   >
                     App
                   </Link>
                   
                   <div className="flex items-center gap-2">
                       <Link 
                         to="/shop"
                         className="bg-[#111] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#FF6B00] transition-all duration-300 shadow-lg hover:shadow-[#FF6B00]/30 hover:-translate-y-0.5"
                       >
                         Pre-Order
                       </Link>
                       
                       <Link 
                          to="/cart"
                          aria-label="View Cart"
                          className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#111] hover:text-[#FF6B00] transition-all duration-300 border border-gray-100 shadow-md group active:scale-95"
                       >
                          <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                          {cartCount > 0 && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B00] rounded-full text-[9px] text-white flex items-center justify-center font-bold animate-in zoom-in duration-300">
                                  {cartCount}
                              </div>
                          )}
                       </Link>
                   </div>
               </div>

               <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  className="md:hidden w-9 h-9 bg-gray-50 rounded-full flex items-center justify-center text-[#111] border border-gray-200 shadow-sm active:scale-90 transition-transform"
               >
                  {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
               </button>
            </div>
         </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F9F7] z-40 flex flex-col items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-full invisible'}`}
      >
          <div className="flex flex-col items-center gap-6 text-center">
             {[
               { path: '/', label: 'Home' },
               { path: '/how-it-works', label: 'How It Works' },
               { path: '/about', label: 'About' },
               { path: '/shop', label: 'Shop' },
               { path: '/support', label: 'Support' },
               { path: '/download', label: 'Download App' }
             ].map((item, i) => (
                 <Link 
                    key={item.path}
                    to={item.path}
                    className="text-3xl md:text-4xl font-bold text-[#111] hover:text-[#FF6B00] transition-colors transform hover:scale-105 duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                 >
                    {item.label}
                 </Link>
             ))}
             
             <Link 
                 to="/cart"
                 className="mt-8 flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-500"
             >
                <ShoppingBag size={16} /> View Cart ({cartCount})
             </Link>
          </div>
      </div>
    </>
  );
};
