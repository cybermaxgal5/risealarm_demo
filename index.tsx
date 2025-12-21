
import './index.css';
import React, { useState, useLayoutEffect, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Instagram, Linkedin, Loader2 } from 'lucide-react';

// Modular Imports - Keep Home sections eager for LCP (Largest Contentful Paint)
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSection } from './components/sections/Problem';
import { ComparisonSection } from './components/sections/Comparison';
import { HomePricing } from './components/sections/HomePricing';
import { TestimonialsSection } from './components/sections/Testimonials';

// Lazy Load Pages - Splits the bundle so users don't download Shop/Support code on homepage
// NOTE: We handle Named Exports by mapping the module
const AboutPage = React.lazy(() => import('./pages/About').then(module => ({ default: module.AboutPage })));
const DownloadPage = React.lazy(() => import('./pages/Download').then(module => ({ default: module.DownloadPage })));
const SupportPage = React.lazy(() => import('./pages/Support').then(module => ({ default: module.SupportPage })));
const SetupGuide = React.lazy(() => import('./pages/Setup').then(module => ({ default: module.SetupGuide })));
const HowItWorksPage = React.lazy(() => import('./pages/HowItWorks').then(module => ({ default: module.HowItWorksPage })));
const LegalHub = React.lazy(() => import('./pages/StaticPages').then(module => ({ default: module.LegalHub })));
const ShopPage = React.lazy(() => import('./pages/Shop').then(module => ({ default: module.ShopPage })));
const CartPage = React.lazy(() => import('./pages/Cart').then(module => ({ default: module.CartPage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7]">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="animate-spin text-[#FF6B00]" size={48} />
      <span className="font-mono text-xs uppercase tracking-widest text-gray-400 animate-pulse">Loading Rise...</span>
    </div>
  </div>
);

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [cartCount, setCartCount] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(undefined);

  // FORCED SCROLL TO TOP
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  const addToCart = (variantId?: string) => {
    setCartCount(prev => prev + 1);
    if (variantId) setSelectedVariantId(variantId);
    setCurrentView('cart');
  };

  const renderView = () => {
    // Suspense wrapper handles the loading state while the JS chunk is being fetched
    return (
      <Suspense fallback={<PageLoader />}>
        {(() => {
          switch(currentView) {
            case 'about': return <AboutPage />;
            case 'download': return <DownloadPage />;
            case 'support': return <SupportPage onNavigate={setCurrentView} />;
            case 'setup': return <SetupGuide onBack={() => setCurrentView('support')} />;
            case 'how-it-works': return <HowItWorksPage />;
            case 'legal': return <LegalHub onBack={() => setCurrentView('home')} />;
            case 'shop': return <ShopPage onAddToCart={addToCart} />;
            case 'cart': return <CartPage onBack={() => setCurrentView('shop')} cartVariantId={selectedVariantId} />;
            default: return (
              <>
                <Hero />
                {/* Ticker removed */}
                <ProblemSection />
                <ComparisonSection />
                <TestimonialsSection />
                <HomePricing onBuy={() => setCurrentView('shop')} />
              </>
            );
          }
        })()}
      </Suspense>
    );
  };

  return (
    <div className="bg-[#F9F9F7] text-[#111] min-h-screen font-sans flex flex-col">
      <Navbar 
        onViewChange={setCurrentView} 
        cartCount={cartCount} 
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {currentView !== 'download' && currentView !== 'cart' && (
        <footer className="bg-[#111] text-white pt-24 pb-12 px-6 border-t border-white/10">
           <div className="max-w-[1400px] mx-auto flex flex-col items-center">
              <h2 className="text-[15vw] font-bold text-[#222] leading-none mb-12 select-none tracking-tighter cursor-default transition-all duration-700 hover:text-white hover:tracking-tight hover:scale-105">
                RISE ALARM
              </h2>
              
              <div className="flex flex-col md:flex-row justify-between w-full text-sm text-gray-500 font-mono uppercase tracking-widest items-center">
                 <div className="mb-4 md:mb-0">© 2025 Rise Alarm</div>
                 
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
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
