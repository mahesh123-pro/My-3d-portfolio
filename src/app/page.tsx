import React from 'react';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] flex flex-col w-full relative">
      <ScrollyCanvas />
      <Projects />
      
      <footer className="w-full py-12 px-6 flex justify-between items-center bg-[#121212] border-t border-white/5 border-solid mx-auto">
        <p className="text-white/50 text-sm">© 2026 Creative Developer. All rights reserved.</p>
        <p className="text-white/50 text-sm flex gap-6">
          <a href="#" className="hover:text-white transition-colors">X (Twitter)</a>
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
