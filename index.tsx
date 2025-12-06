
import './index.css';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Modular Imports
import { Navbar, Ticker } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSection } from './components/sections/Problem';
import { ProtocolSection } from './components/sections/Protocol';
import { HardwareSection } from './components/sections/Hardware';
import { ManifestoSection } from './components/sections/Manifesto';
import { FAQSection } from './components/sections/FAQ';
import { PreOrderSection } from './components/sections/PreOrder';
import { LegalPage, PrivacyPage, ContactPage } from './pages/StaticPages';
import { CheckoutPage } from './pages/Checkout';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0,0);
  }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'legal': return <LegalPage onBack={() => setCurrentView('home')} />;
      case 'privacy': return <PrivacyPage onBack={() => setCurrentView('home')} />;
      case 'contact': return <ContactPage onBack={() => setCurrentView('home')} />;
      case 'checkout': return <CheckoutPage onBack={() => setCurrentView('home')} />;
      default: return (
        <>
          <Hero />
          <Ticker />
          <ProblemSection /> 
          <ProtocolSection /> 
          <HardwareSection /> 
          <ManifestoSection /> 
          <FAQSection /> 
          <div id="preorder">
             <PreOrderSection onCheckout={() => setCurrentView('checkout')} />
          </div>
        </>
      );
    }
  };

  return (
    <div className="bg-[#F9F9F7] text-[#111] min-h-screen font-sans">
      <Navbar onViewChange={setCurrentView} />
      
      <main>
        {renderView()}
      </main>

      {currentView === 'home' && (
        <footer className="bg-[#111] text-white pt-24 pb-12 px-6 border-t border-white/10">
           <div className="max-w-[1400px] mx-auto flex flex-col items-center">
              <h2 className="text-[15vw] font-bold text-[#222] leading-none mb-12 select-none tracking-tighter cursor-default transition-all duration-700 hover:text-white hover:tracking-tight hover:scale-105">
                RISEALARM
              </h2>
              
              <div className="flex flex-col md:flex-row justify-between w-full text-sm text-gray-500 font-mono uppercase tracking-widest">
                 <div className="mb-4 md:mb-0">© 2025 RiseAlarm Inc.</div>
                 <div className="flex gap-8">
                    <button onClick={() => setCurrentView('legal')} className="hover:text-white transition-colors">Legal</button>
                    <button onClick={() => setCurrentView('privacy')} className="hover:text-white transition-colors">Privacy</button>
                    <button onClick={() => setCurrentView('contact')} className="hover:text-white transition-colors">Contact</button>
                 </div>
                 <div className="mt-4 md:mt-0">Designed for Sleepers.</div>
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
    animation: marquee 40s linear infinite;
  }
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
