
import React, { useEffect, useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { ThePod, Reveal, TextReveal, ShinyButton, TiltCard } from '../components/ui/DesignSystem';
import { fetchProductByHandle } from '../lib/shopify';

// Default Fallback Data (falls Shopify noch nicht verbunden ist)
const DEFAULT_PRODUCT = {
    title: "Rise Alarm Pod",
    price: "25.00",
    compareAtPrice: "50.00",
    id: "default_id",
    available: true
};

export const ShopPage = ({ onAddToCart }: { onAddToCart: (variantId?: string) => void }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Lade Produkt von Shopify beim Start
  useEffect(() => {
    const loadData = async () => {
        // HIER DEN GENAUEN HANDLE VOM KUNDEN EINTRAGEN: 'rise-pod'
        const shopifyProduct = await fetchProductByHandle('rise-pod');
        
        if (shopifyProduct) {
            const variant = shopifyProduct.variants[0];
            setProduct({
                title: shopifyProduct.title,
                // Nimm die erste Variante (meistens gibt es nur eine beim Pod)
                price: variant?.price?.amount || "25.00",
                compareAtPrice: "50.00", // Manuell setzen oder aus Shopify Metafields holen
                id: variant?.id, // WICHTIG für den Checkout
                // Cast to any because typescript definition for shopify-buy might be missing 'available' or it is named 'availableForSale'
                available: (variant as any)?.available ?? (variant as any)?.availableForSale ?? true
            });
        } else {
            console.log("Produkt nicht gefunden, lade Fallback");
            setProduct(DEFAULT_PRODUCT);
        }
        setLoading(false);
    };
    loadData();
  }, []);

  const handleBuy = () => {
     // Wir geben die Shopify Variant ID weiter an die App
     onAddToCart(product?.id);
  };

  const formatPrice = (price?: string) => {
      if (!price) return "0";
      return parseFloat(price).toFixed(0);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] pt-28 md:pt-32 pb-24 px-4 md:px-6">
       <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          {/* Left: Product Gallery */}
          <div className="order-1 lg:order-1">
             <Reveal mode="blur">
                <TiltCard>
                    <div className="bg-[#E5E5E2] rounded-[2.5rem] h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center relative overflow-hidden border border-gray-200 shadow-inner group">
                        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        <div className="w-[80%] md:w-full flex justify-center">
                             {/* Priority load for Hero image to improve LCP */}
                             <ThePod scale={2} priority={true} />
                        </div>
                    </div>
                </TiltCard>
             </Reveal>
          </div>

          {/* Right: Product Details */}
          <div className="order-2 lg:order-2">
             <Reveal delay={100}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#FF6B00]">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">Early Access Batch</span>
                </div>
             </Reveal>
             
             <Reveal delay={200} mode="mask">
                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#111] mb-4 tracking-tight">
                    <TextReveal text={product?.title || "Rise Alarm Pod."} delay={0.2} />
                 </h1>
             </Reveal>

             <Reveal delay={300}>
                 <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-3xl font-bold text-[#FF6B00]">${formatPrice(product?.price)}</span>
                    <span className="text-xl text-gray-400 line-through decoration-1">${formatPrice(product?.compareAtPrice)}</span>
                    <span className="text-xs font-bold bg-[#FF6B00]/10 text-[#FF6B00] px-2 py-1 rounded animate-pulse">50% OFF</span>
                 </div>
             </Reveal>

             <Reveal delay={400} mode="blur">
                 <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    <p>
                    The missing piece to your morning routine. The Rise Pod pairs with our app to force you out of bed. 
                    Scan it to stop the alarm. No snooze, no cheating.
                    </p>
                 </div>
             </Reveal>

             <div className="space-y-4 mb-10">
                {['Compatible with iOS (Android Coming Soon)', 'Battery-free (NFC Technology)', 'Premium Adhesive Backing included'].map((feat, i) => (
                    <Reveal key={i} delay={500 + (i * 100)} mode="slide">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><Check size={14}/></div>
                            <span className="font-medium text-sm md:text-base">{feat}</span>
                        </div>
                    </Reveal>
                ))}
             </div>

             <Reveal delay={800}>
                 <ShinyButton 
                    onClick={handleBuy}
                    disabled={!product?.available}
                    className="w-full py-4 md:py-5 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Loading..." : (product?.available ? `Pre-Order Now — $${formatPrice(product?.price)}` : "Sold Out")}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </ShinyButton>
             </Reveal>
             
             <Reveal delay={900}>
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-2">
                    <ShieldCheck size={14} />
                    30-Day Money Back Guarantee
                </p>
             </Reveal>
          </div>
       </div>
    </div>
  );
};
