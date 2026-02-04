
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

const FeaturedNews = () => (
  <section className="bg-[#F9F9F7] px-6 pb-16">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-gray-500">Featured on</span>
          <div className="flex items-center gap-3 rounded-2xl bg-white border border-gray-200 px-4 py-2 shadow-sm">
            <img
              src="/assets/WATE.png"
              alt="WATE 6 News"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-black/95 border border-black/20 aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff22,transparent_55%),radial-gradient(circle_at_bottom,#FF6B0022,transparent_55%)] opacity-60" />
          <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/90 mb-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase">Play</span>
            </div>
            <p className="text-sm md:text-base text-white/80 max-w-md">
              News segment from WATE Knoxville will appear here. We&apos;ll embed the video directly so it auto-plays once it&apos;s ready.
            </p>
          </div>
          {/* To embed for real later:
            <video
              src="/path-to-your-news-clip.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          */}
        </div>
      </div>
    </div>
  </section>
);

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
