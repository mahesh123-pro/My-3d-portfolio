'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]); 
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.02]); 

  // Section 2: 30% scroll
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]); 

  // Section 3: 60% scroll
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end text-center p-6 pb-12 md:pb-16"
      >
        <p className="font-display text-xs md:text-sm text-emerald-400 uppercase tracking-[0.3em] font-semibold mb-3 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
          Creative Developer
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white drop-shadow-2xl mb-4 leading-none mix-blend-plus-lighter">
          Crafting <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Next-Gen</span>
          <br className="hidden md:block" /> web <span className="italic font-sans font-light opacity-90 text-emerald-100">experiences</span>
        </h1>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white to-transparent mt-6 opacity-50" />
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-x-0 bottom-0 md:left-0 md:w-1/2 flex flex-col items-start justify-end text-left p-6 pb-12 md:pb-16 md:pl-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,1)]" />
          <span className="font-display text-emerald-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Innovation</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-4">
          I build digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-emerald-200">
            masterpieces.
          </span>
        </h2>
        <p className="font-sans text-base md:text-lg lg:text-xl text-white/80 max-w-sm font-light leading-relaxed">
          Fusing high-end interaction design with cutting-edge front-end engineering to deliver immersive applications.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-x-0 bottom-0 md:right-0 md:w-1/2 flex flex-col items-end justify-end text-right p-6 pb-12 md:pb-16 md:pr-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-display text-purple-400 uppercase tracking-widest text-[10px] md:text-xs font-bold">Execution</span>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 drop-shadow-[0_0_8px_rgba(192,132,252,1)]" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-4">
          Bridging <span className="italic font-sans font-light">design</span> <br />
          <span className="text-white/50">and engineering.</span>
        </h2>
        <p className="font-sans text-base md:text-lg lg:text-xl text-white/80 max-w-sm font-light leading-relaxed">
          Every pixel is considered. Every animation is optimized. Delivering Awwwards-winning experiences through code.
        </p>
      </motion.div>
    </div>
  );
}
