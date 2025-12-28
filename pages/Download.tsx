
import React, { useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';
import { Reveal } from '../components/ui/DesignSystem';

// Added responsive sizing classes to PhoneMockup
const PhoneMockup = ({ src, delay = 0, className = "" }: { src: string, delay?: number, className?: string }) => (
  <div 
    className={`w-[240px] md:w-[280px] h-[500px] md:h-[580px] bg-black rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-[8px] border-gray-900 relative overflow-hidden shadow-2xl flex flex-col transform transition-transform hover:scale-105 duration-500 ${className}`}
    style={{ 
        animation: `float 6s ease-in-out infinite ${delay}s`,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}
  >
     {/* Notch */}
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 md:h-7 bg-gray-900 rounded-b-2xl z-20"></div>
     
     {/* Reflection/Gloss */}
     <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 rounded-[2.5rem]"></div>

     {/* Screen Image - Added loading="lazy" and decoding="async" */}
     <img 
        src={src} 
        alt="Rise App Screen" 
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
     />
  </div>
);

export const DownloadPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#111] pt-32 pb-24 relative overflow-hidden">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       
       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1">
             <Reveal>
                 <span className="text-[#FF6B00] font-mono uppercase tracking-widest text-xs font-bold mb-6 block">Coming Soon</span>
             </Reveal>
             
             <Reveal delay={100} mode="mask">
                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                    Your morning,<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">upgraded.</span>
                 </h1>
             </Reveal>
             
             <Reveal delay={200} mode="blur">
                 <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
                    The Rise Alarm App is currently in beta. It will launch on the iOS App Store shortly. Android support is coming later this year.
                 </p>
             </Reveal>

             <Reveal delay={300} mode="slide">
                 <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    {/* Official Style Apple Button */}
                    <button disabled className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-800 transition-colors opacity-80 cursor-not-allowed shadow-xl">
                       <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                       </svg>
                       <div className="flex flex-col items-start leading-none">
                          <span className="text-[10px] font-medium">Download on the</span>
                          <span className="text-lg font-bold">App Store</span>
                       </div>
                    </button>

                    {/* Official Style Google Button - DISABLED / COMING SOON */}
                    <button disabled className="bg-gray-100 text-gray-400 rounded-lg px-4 py-2 flex items-center gap-3 cursor-not-allowed border border-gray-200">
                       <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor" className="grayscale opacity-50">
                          <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                       </svg>
                       <div className="flex flex-col items-start leading-none">
                          <span className="text-[10px] font-medium uppercase tracking-wider">Coming Soon</span>
                          <span className="text-lg font-bold">Android</span>
                       </div>
                    </button>
                 </div>
             </Reveal>

             {/* Waitlist Input */}
             <Reveal delay={400} mode="blur">
                 <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-lg max-w-md transition-all duration-300">
                     {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center text-center py-4 animate-in fade-in duration-500">
                           <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-3">
                              <Check size={24} />
                           </div>
                           <h3 className="font-bold text-[#111]">You're on the list!</h3>
                           <p className="text-sm text-gray-500">We'll let you know as soon as we launch.</p>
                           <button
                             onClick={() => setStatus('idle')}
                             className="mt-4 text-sm font-bold text-[#FF6B00] hover:underline"
                           >
                             Add another email
                           </button>
                        </div>
                     ) : (
                        <>
                           <h3 className="font-bold text-[#111] mb-2">Don't miss the launch.</h3>
                           <p className="text-sm text-gray-500 mb-4">Join the waitlist to get notified when the app goes live.</p>
                           <form onSubmit={handleSubmit} className="flex gap-2">
                              <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors disabled:opacity-50"
                                disabled={status === 'loading'}
                              />
                              <button
                                type="submit"
                                disabled={status === 'loading'}
                                aria-label="Join waitlist"
                                className="bg-[#FF6B00] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#e05e00] transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-wait min-w-[3.5rem]"
                              >
                                 {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                              </button>
                           </form>
                        </>
                     )}
                 </div>
             </Reveal>
          </div>

          <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center order-1 lg:order-2">
             <Reveal delay={200} mode="blur" className="relative w-full h-full flex items-center justify-center perspective-1000">
                 {/* Back Phone (AppScreen 1) - .webp */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-[60%] -translate-y-1/2 rotate-[-12deg] z-0 opacity-90 scale-90 blur-[1px] hover:blur-0 transition-all duration-500">
                    <PhoneMockup src="/assets/appscreen1.webp" delay={1.5} />
                 </div>
                 
                 {/* Front Phone (AppScreen 2) - .webp - Higher Z-Index */}
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-[40%] -translate-y-1/2 rotate-[6deg] z-20">
                    <PhoneMockup src="/assets/appscreen2.webp" delay={0} />
                 </div>
             </Reveal>
          </div>
       </div>
       
       <style>{`
         @keyframes float {
           0%, 100% { transform: translateY(0px); }
           50% { transform: translateY(-20px); }
         }
       `}</style>
    </div>
  );
};
