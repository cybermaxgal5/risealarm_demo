
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, TextReveal, ShinyButton } from '../ui/DesignSystem';

const FEATURED_VIDEO_URL = "https://www.youtube.com/embed/VIDEO_ID_HERE"; // Replace VIDEO_ID_HERE with your news clip ID

export const Hero = ({ onOrder }: { onOrder?: () => void }) => {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#F9F9F7] pt-24 md:pt-0">

      {/* Background Image - CRISP */}
      <div className="hidden md:block absolute inset-0 z-0 transition-transform duration-[20s] ease-linear hover:scale-105">
        <img
          src="/assets/herobgrise.webp"
          alt="Rise Alarm Hero Background"
          className="w-full h-full object-cover animate-fade-in"
          // @ts-ignore - fetchPriority is a valid React 19 / Modern HTML attribute
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-8 lg:gap-4">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center pt-4 lg:pt-0 pb-12 lg:pb-0">

          {/* Text Reveal - Adjusted sizes for mobile safety */}
          <div className="mb-6 lg:mb-8 font-bold tracking-[-0.04em] leading-[0.9]">
            <Reveal mode="mask" delay={100}>
              <div className="text-[14vw] sm:text-[10vw] lg:text-[4.5rem] xl:text-[5.5rem] text-[#0A0A0A]">
                <TextReveal text="WAKE UP." delay={0.2} />
              </div>
            </Reveal>
            <Reveal mode="mask" delay={175}>
              <div className="text-[14vw] sm:text-[10vw] lg:text-[4.5rem] xl:text-[5.5rem] text-[#0A0A0A]">
                <TextReveal text="TAP IN." delay={0.4} />
              </div>
            </Reveal>
            <Reveal mode="mask" delay={250}>
              <div className="text-[14vw] sm:text-[10vw] lg:text-[4.5rem] xl:text-[5.5rem] text-[#FF6B00]">
                <TextReveal text="START DAY." delay={0.6} />
              </div>
            </Reveal>
          </div>

          <Reveal mode="blur" delay={350}>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mb-6 lg:mb-8 tracking-tight mx-auto lg:mx-0">
              The alarm clock that gets you out of bed. Scan your Rise Pod across the room to silence your alarm.
            </p>
          </Reveal>

          {/* Mobile-only Rise Pod Image - only shows on small screens where bg is hidden */}
          <Reveal mode="blur" delay={400}>
            <div className="md:hidden mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B00]/10 to-transparent rounded-3xl blur-2xl scale-110"></div>
                <img
                  src="/assets/RisePod.webp"
                  alt="Rise Pod - NFC Alarm Device"
                  className="relative w-72 h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>

          <Reveal mode="blur" delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <ShinyButton
                onClick={onOrder}
                className="px-10 py-5 text-lg w-full sm:w-auto"
              >
                Order Now — $25
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </ShinyButton>
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <Reveal mode="blur" delay={400}>
            <div className="w-full max-w-md aspect-video rounded-[1.75rem] overflow-hidden border border-black/5 bg-black relative shadow-2xl shadow-black/20">
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gray-800 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                Featured on
              </div>
              <iframe
                src={FEATURED_VIDEO_URL}
                title="Rise Alarm on the News"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
