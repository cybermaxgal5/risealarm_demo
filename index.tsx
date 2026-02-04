
import './index.css';
import React, { useState, useLayoutEffect, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { Instagram, Linkedin, Loader2 } from 'lucide-react';

// Modular Imports
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemSection } from './components/sections/Problem';
import { ComparisonSection } from './components/sections/Comparison';
import { HomePricing } from './components/sections/HomePricing';
import { TestimonialsSection } from './components/sections/Testimonials';

// Lazy Load Pages
const AboutPage = React.lazy(() => import('./pages/About').then(module => ({ default: module.AboutPage })));
const DownloadPage = React.lazy(() => import('./pages/Download').then(module => ({ default: module.DownloadPage })));
const SupportPage = React.lazy(() => import('./pages/Support').then(module => ({ default: module.SupportPage })));
const SetupGuide = React.lazy(() => import('./pages/Setup').then(module => ({ default: module.SetupGuide })));
const HowItWorksPage = React.lazy(() => import('./pages/HowItWorks').then(module => ({ default: module.HowItWorksPage })));
const LegalHub = React.lazy(() => import('./pages/StaticPages').then(module => ({ default: module.LegalHub })));
const ShopPage = React.lazy(() => import('./pages/Shop').then(module => ({ default: module.ShopPage })));
const CartPage = React.lazy(() => import('./pages/Cart').then(module => ({ default: module.CartPage })));
const CheckoutPage = React.lazy(() => import('./pages/Checkout').then(module => ({ default: module.CheckoutPage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F9F9F7]">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="animate-spin text-[#FF6B00]" size={48} />
      <span className="font-mono text-xs uppercase tracking-widest text-gray-400 animate-pulse">Loading Rise...</span>
    </div>
  </div>
);

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const FeaturedNews = () => {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <section className="bg-[#F9F9F7] px-6 pb-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-gray-500">Featured on</span>
            <a 
              href="https://www.wate.com/living-east-tennessee/rise-alarm-the-smart-wake-up-system-built-by-ut-students/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-white border border-gray-200 px-4 py-2 shadow-sm hover:shadow-md transition-shadow hover:border-[#FF6B00]/30 group"
            >
              <img
                src="/assets/WATE.png"
                alt="WATE 6 News"
                className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-black border border-black/20 aspect-video shadow-2xl group">
            <video
              ref={videoRef}
              src="/assets/Wate Video.mov"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {isMuted && (
              <button
                onClick={handleUnmute}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FF6B00]/20 via-black/40 to-black/60 hover:opacity-80 transition-opacity cursor-pointer group"
                aria-label="Unmute video"
              >
                <div className="flex flex-col items-center gap-4 text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-white/90 max-w-md font-medium">
                    Click to unmute
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Wrapper for Home Page Sections
const HomePage = ({ onBuy }: { onBuy: () => void }) => (
  <>
    <Hero onOrder={onBuy} />
    <FeaturedNews />
    <ProblemSection />
    <ComparisonSection />
    <TestimonialsSection />
    <HomePricing onBuy={onBuy} />
  </>
);

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(undefined);
  // Router hooks can't be used here directly if App wraps BrowserRouter, so we split it if needed, 
  // but simpler to just pass navigate via props in the Routes config below.

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent
        cartCount={cartCount}
        setCartCount={setCartCount}
        selectedVariantId={selectedVariantId}
        setSelectedVariantId={setSelectedVariantId}
      />
    </BrowserRouter>
  );
};

// Separated Content to use Router Hooks
const AppContent = ({ cartCount, setCartCount, selectedVariantId, setSelectedVariantId }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = (variantId?: string) => {
    setCartCount((prev: number) => prev + 1);
    if (variantId) setSelectedVariantId(variantId);
    navigate('/cart');
  };

  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="bg-[#F9F9F7] text-[#111] min-h-screen font-sans flex flex-col">
      {!isCheckout && <Navbar cartCount={cartCount} />}

      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onBuy={() => navigate('/shop')} />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/download" element={<DownloadPage />} />

            <Route path="/support" element={<SupportPage />} />
            <Route path="/setup" element={<SetupGuide />} />

            <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartVariantId={selectedVariantId} />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/legal/terms" element={<LegalHub section="terms" />} />
            <Route path="/legal/privacy" element={<LegalHub section="privacy" />} />
            <Route path="/legal" element={<LegalHub />} />

            {/* Catch all redirect to home */}
            <Route path="*" element={<HomePage onBuy={() => navigate('/shop')} />} />
          </Routes>
        </Suspense>
      </main>

      {!isCheckout && location.pathname !== '/download' && location.pathname !== '/cart' && (
        <Footer />
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="bg-[#111] text-white pt-24 pb-12 px-6 border-t border-white/10">
    <div className="max-w-[1400px] mx-auto flex flex-col items-center">
      <h2 className="text-[15vw] font-bold text-[#222] leading-none mb-12 select-none tracking-tighter cursor-default transition-all duration-700 hover:text-white hover:tracking-tight hover:scale-105">
        RISE ALARM
      </h2>

      <div className="flex flex-col md:flex-row justify-between w-full text-sm text-gray-500 font-mono uppercase tracking-widest items-center">
        <div className="mb-4 md:mb-0">© 2025 Rise Alarm</div>

        <div className="flex gap-8 mb-6 md:mb-0">
          <Link to="/support" className="hover:text-white transition-colors">Help</Link>
          <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>

        <div className="flex gap-6 items-center">
          <a href="https://www.instagram.com/risealarmapp/" target="_blank" className="hover:text-[#E1306C] transition-colors p-2 bg-white/5 rounded-full">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@risealarm.app?_r=1&_t=ZP-930qe6TVnLi" target="_blank" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/risedailyapp/" target="_blank" className="hover:text-[#0077b5] transition-colors p-2 bg-white/5 rounded-full">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

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
