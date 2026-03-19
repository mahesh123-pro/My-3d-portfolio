'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const numStr = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${numStr}_delay-0.066s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    
    // Fallback if images are ready immediately
    setImages(loadedImages);
  }, []);

  const renderFrame = useCallback((index: number) => {
    if (!canvasRef.current || !images[index] || !images[index].complete) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to window size matching CSS size to avoid blur
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = images[index];
    
    // Apply object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let renderWidth, renderHeight, x, y;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      x = 0;
      y = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      renderHeight = canvas.height;
      x = (canvas.width - renderWidth) / 2;
      y = 0;
    }

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  }, [images]);

  useEffect(() => {
    if (!loaded) return;
    // Initial render
    renderFrame(0);

    const handleResize = () => {
      renderFrame(Math.round(frameIndex.get()));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [loaded, frameIndex, renderFrame]);

  useEffect(() => {
    if (!loaded) return;
    const unsubscribe = frameIndex.on('change', (latest) => {
      const index = Math.min(Math.round(latest), FRAME_COUNT - 1);
      renderFrame(index);
    });
    return () => unsubscribe();
  }, [frameIndex, loaded, renderFrame]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 z-20 bg-[#121212]">
            Loading Experience...
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover block"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
