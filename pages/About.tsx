
import React from 'react';
import { Linkedin, MoveRight, Instagram } from 'lucide-react';
import { ScrollReveal } from '../components/ui/DesignSystem';

const FounderCard = ({ name, title, role, linkedin }: any) => (
  <div className="group relative">
     <div className="aspect-[3/4] bg-gray-200 rounded-3xl overflow-hidden mb-6 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
           {/* Placeholder Silhouette */}
           <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" opacity="0.5">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
           </svg>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
     </div>
     <h3 className="text-2xl font-bold">{name}</h3>
     <p className="text-[#FF6B00] font-mono text-xs uppercase tracking-widest font-bold mb-2">{title}</p>
     <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0077b5] transition-colors">
        <Linkedin size={16} /> Connect on LinkedIn
     </a>
  </div>
);

export const AboutPage = () => {
  return (
    <div className="bg-[#F9F9F7] pt-32 pb-24">
       
       {/* Story Section */}
       <div className="max-w-4xl mx-auto px-6 mb-32">
          <ScrollReveal>
            <span className="text-[#FF6B00] font-mono uppercase tracking-widest text-xs font-bold mb-6 block">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
              The Story Behind Rise Alarm
            </h1>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal delay={100}>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#FF6B00] pl-6 mb-16">
                Our mission is to end the snooze cycle for good by building tools that help people wake up on time, feel alert, and start their mornings with momentum.
              </p>
            </ScrollReveal>
          </div>

           {/* Founders moved here */}
           <div className="mb-24">
              <ScrollReveal delay={150}>
                  <h2 className="text-3xl font-bold mb-12">Meet the Founders</h2>
                  <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                     <FounderCard 
                        name="Max"
                        title="Co-Founder"
                        linkedin="#"
                     />
                     <FounderCard 
                        name="Dan"
                        title="Co-Founder"
                        linkedin="#"
                     />
                  </div>
              </ScrollReveal>
           </div>

          <div className="space-y-12">
            <ScrollReveal delay={200}>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Rise Alarm was founded by two college students at the <strong className="text-black">University of Tennessee</strong> who teamed up for a hackathon hosted by Half Baked Newsletter and Bolt.new. The idea was not created in a lab or a classroom. It came from a real struggle they faced every morning.
                </p>
                <p className="mb-6">
                  Both founders found themselves stuck in the same cycle: hitting snooze again and again, scrolling half-awake on their phones, and rushing out the door already tired, stressed, and behind. They realized this was not just their problem. It is something almost everyone experiences.
                </p>
                <p className="mb-6">
                   Science has proven that people who stand up as soon as they wake up are more energized, more focused, and more productive throughout the day. On the other hand, people who hit snooze, linger in bed, or fall back asleep slip into what scientists call sleep inertia. This state can slow down performance for hours.
                </p>
                <p className="mb-6">
                   They decided to build a solution that made getting up unavoidable. They created a system that forces you to physically stand up to silence your alarm. No excuses. No snooze button. No drifting back into half-sleep. Just a simple walk to the bathroom, and suddenly their mornings were ten times better.
                </p>
                <p>
                   What started as a hackathon project quickly grew into something more meaningful. It became a real fix to a real problem. It became a tool for anyone who is tired of losing their mornings and ready to start showing up as their best self.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
               <div className="bg-white p-8 rounded-3xl border border-gray-200 mt-12 flex items-center gap-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white shrink-0">
                     <MoveRight />
                  </div>
                  <p className="font-bold text-lg">
                     If you've been fighting your mornings too, we built Rise Alarm for you.
                  </p>
               </div>
            </ScrollReveal>
          </div>
       </div>

       {/* Social Connect - RESPONSIVE FIX */}
       <div className="max-w-[1200px] mx-auto px-6 border-t border-gray-200 pt-24 text-center">
            <h2 className="text-2xl font-bold mb-8">Follow Our Journey</h2>
            <div className="flex justify-center gap-4 md:gap-6">
                 <a href="https://www.instagram.com/risealarmapp/" target="_blank" className="flex items-center gap-3 p-4 md:px-6 md:py-4 bg-white border border-gray-200 rounded-full hover:border-[#FF6B00] transition-colors group">
                    <Instagram className="text-gray-400 group-hover:text-[#E1306C] transition-colors" />
                    <span className="font-bold text-sm hidden md:block">Instagram</span>
                 </a>
                 <a href="https://www.tiktok.com/@risedaily.app" target="_blank" className="flex items-center gap-3 p-4 md:px-6 md:py-4 bg-white border border-gray-200 rounded-full hover:border-black transition-colors group">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-black transition-colors">
                         <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
                     </svg>
                    <span className="font-bold text-sm hidden md:block">TikTok</span>
                 </a>
                 <a href="https://www.linkedin.com/company/risedailyapp/" target="_blank" className="flex items-center gap-3 p-4 md:px-6 md:py-4 bg-white border border-gray-200 rounded-full hover:border-[#0077b5] transition-colors group">
                    <Linkedin className="text-gray-400 group-hover:text-[#0077b5] transition-colors" />
                    <span className="font-bold text-sm hidden md:block">LinkedIn</span>
                 </a>
            </div>
       </div>
    </div>
  );
};
