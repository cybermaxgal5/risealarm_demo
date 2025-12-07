
import './index.css';
import React, { useState, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Instagram, Linkedin } from 'lucide-react';

// Modular Imports
import { Navbar, Ticker } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSection } from './components/sections/Problem';
import { ComparisonSection } from './components/sections/Comparison';
import { HomePricing } from './components/sections/HomePricing';
import { TestimonialsSection } from './components/sections/Testimonials';

// Pages
import { AboutPage } from './pages/About';
import { DownloadPage } from './pages/Download';
import { SupportPage } from './pages/Support';
import { HowItWorksPage } from './pages/HowItWorks';
import { LegalHub } from './pages/StaticPages';
import { CheckoutPage } from './pages/Checkout';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  // useLayoutEffect fires synchronously after all DOM mutations.
  // This ensures the scroll happens BEFORE the user sees the new page rendered at the bottom.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'about': return <AboutPage />;
      case 'download': return <DownloadPage />;
      case 'support': return <SupportPage />;
      case 'how-it-works': return <HowItWorksPage />;
      case 'legal': return <LegalHub onBack={() => setCurrentView('home')} />;
      case 'checkout': return <CheckoutPage onBack={() => setCurrentView('home')} />;
      default: return (
        <>
          <Hero />
          <Ticker />
          <ProblemSection />
          <ComparisonSection />
          <TestimonialsSection />
          <HomePricing onBuy={() => setCurrentView('checkout')} />
          {/* SocialsSection removed as requested */}
        </>
      );
    }
  };

  return (
    <div className="bg-[#F9F9F7] text-[#111] min-h-screen font-sans flex flex-col">
      <Navbar onViewChange={(view) => {
        // Logic to handle scroll to pricing if 'shop' was still triggered somehow
        if (view === 'shop') {
          setCurrentView('home');
          setTimeout(() => {
             const pricingEl = document.getElementById('pricing');
             if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          setCurrentView(view);
        }
      }} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {currentView !== 'download' && currentView !== 'checkout' && (
        <footer className="bg-[#111] text-white pt-24 pb-12 px-6 border-t border-white/10">
           <div className="max-w-[1400px] mx-auto flex flex-col items-center">
              <h2 className="text-[15vw] font-bold text-[#222] leading-none mb-12 select-none tracking-tighter cursor-default transition-all duration-700 hover:text-white hover:tracking-tight hover:scale-105">
                RISE ALARM
              </h2>
              
              <div className="flex flex-col md:flex-row justify-between w-full text-sm text-gray-500 font-mono uppercase tracking-widest items-center">
                 <div className="mb-4 md:mb-0">© 2025 Rise Alarm Inc.</div>
                 
                 <div className="flex gap-8 mb-6 md:mb-0">
                    <button onClick={() => setCurrentView('support')} className="hover:text-white transition-colors">Help</button>
                    <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">Legal & Privacy</button>
                 </div>
                 
                 <div className="flex gap-6 items-center">
                    <a href="https://www.instagram.com/risealarmapp/" target="_blank" className="hover:text-[#E1306C] transition-colors p-2 bg-white/5 rounded-full">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@risedaily.app" target="_blank" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                       </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/risedailyapp/" target="_blank" className="hover:text-[#0077b5] transition-colors p-2 bg-white/5 rounded-full">
                      <Linkedin size={20} />
                    </a>
                 </div>
              </div>
           </div>
        </footer>
      )}
    </div>
  );
};

// --- GLOBAL STYLES INJECTION ---
const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 60s linear infinite;
  }
  .animate-marquee-reverse {
    animation: marquee 60s linear infinite reverse;
  }
  .pattern-grid-lg {
    background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
