/* eslint-disable @next/next/no-img-element */
import React from 'react';

const projects = [
  {
    title: "Ethereal Commerce",
    category: "E-Commerce Experience",
    description: "A headless WebGL e-commerce experience pushing the boundaries of what's possible on the web.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1080&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Neo Banking App",
    category: "FinTech / App",
    description: "A modern, secure, and beautiful financial dashboard built with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Cyberpunk NFT Platform",
    category: "Web3 / Platform",
    description: "A high-performance marketplace for digital artifacts featuring complex 3D interactions.",
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1080&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Aura Creative Agency",
    category: "Agency Portfolio",
    description: "An Awwwards-winning site featuring custom WebGL shaders and smooth scroll mechanics.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="relative z-10 bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-light">
            A collection of recent projects focusing on interactive front-end development, WebGL, and modern design systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <a 
              key={i} 
              href={project.link}
              className="group block relative rounded-2xl overflow-hidden glass glass-hover p-4 md:p-6 cursor-none"
              style={{
                top: i % 2 !== 0 ? '0px' : '0' // We can add staggered layout here if needed
              }}
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="19" x2="19" y2="5"></line>
                      <polyline points="10 5 19 5 19 14"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 mt-2 font-light">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
