
import React, { useEffect, useState, useRef } from 'react';

// --- SHARED HOOKS ---
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollProgress;
};

// --- 1. SHINY BUTTON (THE "GEILER" BUTTON) ---
interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className = "", variant = 'primary', ...props }) => {
    return (
        <button 
            className={`
                relative overflow-hidden group rounded-full font-bold transition-all duration-500 active:scale-95
                ${variant === 'primary' 
                    ? 'bg-[#111] text-white hover:bg-black border border-transparent' 
                    : 'bg-white text-[#111] border border-gray-200 hover:border-[#FF6B00]'}
                ${className}
            `}
            {...props}
        >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer z-0 pointer-events-none">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </div>
            <div className={`absolute inset-0 rounded-full border-2 border-transparent transition-colors duration-300 pointer-events-none ${variant === 'primary' ? 'group-hover:border-[#FF6B00]/50' : 'group-hover:border-[#FF6B00]'}`}></div>
        </button>
    );
};

// --- 2. TILT CARD (RESPONSIVE FIX) ---
export const TiltCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Disable Tilt on small screens to prevent scroll hijacking/weirdness
        if (window.innerWidth < 768 || !ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        const x = yPct * 20; 
        const y = xPct * -20;
        
        ref.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    return (
        <div 
            className={`perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                ref={ref} 
                className="transition-transform duration-500 ease-out will-change-transform transform-style-3d h-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {children}
            </div>
        </div>
    );
};

// --- 3. TEXT REVEAL (SLOWER, MORE LUXURIOUS) ---
export const TextReveal = ({ text, className = "", delay = 0 }: { text: React.ReactNode, className?: string, delay?: number }) => {
    if (typeof text !== 'string') return <div className={className}>{text}</div>;

    const words = text.split(' ');

    return (
        <div className={`overflow-hidden ${className}`}>
            <div className="flex flex-wrap gap-x-[0.25em] gap-y-0">
                {words.map((word, i) => (
                    <span 
                        key={i} 
                        className="inline-block origin-top-left opacity-0 animate-[word-up_1.2s_cubic-bezier(0.25,1,0.5,1)_forwards]"
                        style={{ animationDelay: `${delay + (i * 0.08)}s` }}
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

// --- 4. REVEAL (PRO ANIMATION TIMING) ---
export const Reveal = ({ children, className = "", delay = 0, mode = 'blur' }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // INCREASED DURATION TO 1.2s for "Geiler" feel
    const styles = {
        blur: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(30px)',
            filter: isVisible ? 'blur(0)' : 'blur(12px)',
            transition: `all 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`
        },
        slide: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: `all 1.0s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`
        },
        mask: { }
    };

    if (mode === 'mask') {
        return (
            <div ref={ref} className={`overflow-hidden ${className}`}>
                <div style={{
                     transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
                     transition: `transform 1.2s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`
                }}>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div ref={ref} className={className} style={styles[mode as keyof typeof styles]}>
            {children}
        </div>
    );
};

export const ScrollReveal = Reveal;

export const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200/50 bg-white/50 backdrop-blur-xl mb-8 w-fit shadow-sm">
      <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-pulse shadow-[0_0_12px_#FF6B00]"></span>
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500 font-bold">{text}</span>
  </div>
);

// --- VISUAL ASSETS (RESPONSIVE POD) ---
export const ThePod = ({ scale = 1, className = "", highlight = 'none', priority = false }: { scale?: number, className?: string, highlight?: string, priority?: boolean }) => {
  return (
    <div 
      className={`relative group perspective-1000 mx-auto ${className}`}
      style={{ 
        width: '100%',
        maxWidth: `${300 * scale}px`, 
        height: 'auto',
        aspectRatio: '1/1' 
      }}
    >
       <div 
          className={`relative z-10 w-full h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:-translate-y-4 will-change-transform flex items-center justify-center`}
        >
          <img 
            src="/assets/RisePod.png" 
            alt="Rise Alarm Pod"
            // Performance: Eager load above-fold image (Hero) for better LCP
            loading={priority ? "eager" : "lazy"}
            // @ts-ignore - fetchPriority is standard now but React types might lag behind
            fetchPriority={priority ? "high" : "auto"}
            decoding={priority ? "auto" : "async"}
            width={1024}
            height={1024}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-[100%] transition-all duration-1000 group-hover:w-[60%] group-hover:bg-black/10"></div>
       </div>
    </div>
  );
};
