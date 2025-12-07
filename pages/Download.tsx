
import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

const PhoneMockup = ({ delay = 0 }: { delay?: number }) => (
  <div 
    className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-900 relative overflow-hidden shadow-2xl flex flex-col transform transition-transform hover:scale-105 duration-500"
    style={{ animation: `float 6s ease-in-out infinite ${delay}s` }}
  >
     {/* Notch */}
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
     
     {/* Screen Content */}
     <div className="flex-1 bg-white relative pt-12 px-6">
        <div className="flex justify-between items-center mb-8">
           <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
           <div className="w-20 h-4 bg-gray-100 rounded-full"></div>
        </div>
        
        <div className="text-center mt-12 mb-12">
           <div className="w-32 h-32 rounded-full border-4 border-[#FF6B00] flex items-center justify-center mx-auto mb-6 relative">
              <Bell size={40} className="text-[#FF6B00]" />
              <div className="absolute inset-0 border-4 border-[#FF6B00] rounded-full animate-ping opacity-20"></div>
           </div>
           <div className="text-4xl font-bold text-[#111]">07:00</div>
           <div className="text-sm text-gray-400 font-mono uppercase tracking-widest mt-2">Wake Up</div>
        </div>

        <div className="space-y-4">
           <div className="h-16 bg-black text-white rounded-2xl flex items-center justify-center font-bold shadow-lg">
              Scan Pod to Stop
           </div>
           <div className="h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
              Snooze disabled
           </div>
        </div>
     </div>
  </div>
);

export const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#111] pt-32 pb-24 relative overflow-hidden">
       {/* Background Noise */}
       <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
       
       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <span className="text-[#FF6B00] font-mono uppercase tracking-widest text-xs font-bold mb-6 block">Coming Soon</span>
             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                Your morning,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">upgraded.</span>
             </h1>
             <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
                The Rise Alarm App is currently in final beta testing. It will launch on both iOS and Android stores shortly.
             </p>

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

                {/* Official Style Google Button */}
                <button disabled className="bg-black text-white rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-800 transition-colors opacity-80 cursor-not-allowed shadow-xl">
                   <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                      <path fill="#fff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                   </svg>
                   <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] font-medium">GET IT ON</span>
                      <span className="text-lg font-bold">Google Play</span>
                   </div>
                </button>
             </div>

             {/* Waitlist Input */}
             <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-lg max-w-md">
                 <h3 className="font-bold text-[#111] mb-2">Don't miss the launch.</h3>
                 <p className="text-sm text-gray-500 mb-4">Join the waitlist to get notified when the app goes live.</p>
                 <form className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                    <button type="submit" className="bg-[#FF6B00] text-white px-4 py-3 rounded-xl font-bold hover:bg-[#e05e00] transition-colors flex items-center justify-center">
                       <ArrowRight size={18} />
                    </button>
                 </form>
             </div>
          </div>

          <div className="relative h-[600px] flex justify-center items-center">
             <div className="absolute top-10 left-10 lg:left-20 rotate-[-6deg] z-0 opacity-50 blur-[2px] scale-95">
                <PhoneMockup delay={0.5} />
             </div>
             <div className="relative z-10 rotate-[6deg]">
                <PhoneMockup />
             </div>
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
