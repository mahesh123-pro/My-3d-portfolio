import React from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col w-full relative">
      <ScrollyCanvas />
      <Projects />
      
      <footer className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center bg-[#121212] border-t border-white/5 border-solid mx-auto">
        <p className="font-sans text-white/40 text-sm font-light uppercase tracking-wider mb-4 md:mb-0">
          © 2026 Creative Developer. All rights reserved.
        </p>
        <p className="font-sans text-white/50 text-sm flex gap-8 tracking-widest uppercase">
          <a href="#" className="hover:text-emerald-400 transition-colors duration-300">X (Twitter)</a>
          <a href="#" className="hover:text-emerald-400 transition-colors duration-300">Dribbble</a>
          <a href="#" className="hover:text-emerald-400 transition-colors duration-300">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
