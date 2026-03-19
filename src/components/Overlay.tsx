'use client';

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]); // Moves up as we scroll down

  // Section 2: 30% scroll
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.45], [100, -100]); // Parallax from bottom to top

  // Section 3: 60% scroll
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.75], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl mb-4">
          Senior Creative Developer
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto drop-shadow-lg font-light">
          Crafting high-end digital experiences
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col items-start justify-center text-left p-12 md:pl-24"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          I build digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            experiences.
          </span>
        </h2>
        <div className="w-16 h-1 bg-emerald-400 mb-6 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
        <p className="text-xl text-white/90 max-w-md">
          Fusing interaction design with cutting-edge front-end engineering to deliver immersive, high-performance web applications.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col items-end justify-center text-right p-12 md:pr-24"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Bridging design <br />
          and engineering.
        </h2>
        <div className="w-16 h-1 bg-purple-400 mb-6 ml-auto drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
        <p className="text-xl text-white/90 max-w-md">
          Every pixel is considered. Every animation is optimized. Delivering Awwwards-winning experiences through code.
        </p>
      </motion.div>
    </div>
  );
}
