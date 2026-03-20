/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const projects = [
  {
    title: "Manakrishi App",
    category: "AgriTech & IoT",
    description: "Precision drone spraying app reducing health risks for farmers with IoT integration.",
    image: "https://images.unsplash.com/photo-1559884743-74a57598c6c7?q=80&w=1080&auto=format&fit=crop",
    link: "https://mahessh.me/case-study-manakrishi.html",
    color: "#10b981" // emerald-500
  },
  {
    title: "Prolance",
    category: "Networking Platform",
    description: "A professional networking platform designed to seamlessly connect professionals.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop",
    link: "https://mahessh.me/case-study-prolance.html",
    color: "#3b82f6" // blue-500
  },
  {
    title: "VisaEnsure",
    category: "AI & Platform",
    description: "Global visa support platform with AI-powered document validation and student-focused UX.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1080&auto=format&fit=crop",
    link: "https://mahessh.me/case-study-visaensure.html",
    color: "#f59e0b" // amber-500
  },
  {
    title: "Cloud Architecture",
    category: "AWS & DevOps",
    description: "Highly available, fault-tolerant 3-tier web architecture on AWS mimicking enterprise standards.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop",
    link: "https://mahessh.me/case-study-aws.html",
    color: "#8b5cf6" // violet-500
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Custom Cursor positioning
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative group cursor-none ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
    >
      {/* Custom VIEW Cursor Overlay */}
      <motion.div 
        className="pointer-events-none absolute z-50 flex items-center justify-center w-24 h-24 rounded-full bg-white transition-opacity duration-300 mix-blend-difference"
        animate={{ 
          x: cursorPos.x - 48, 
          y: cursorPos.y - 48,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
      >
        <span className="text-black font-display font-bold text-xs uppercase tracking-widest px-2">View</span>
      </motion.div>

      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-[2.5rem] bg-[#121212] border border-white/5 transition-all duration-700 hover:border-white/10 group/card"
      >
        {/* Project Image Wrapper */}
        <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1A1A]">
          <motion.div 
            style={{ y: yImage, scale: 1.2 }}
            className="w-full h-full"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-1000 ease-out"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover/card:opacity-30 transition-opacity duration-700" />
          
          {/* Floating Category Tag */}
          <div className="absolute top-8 left-8 z-20">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-white/5 backdrop-blur-xl border border-white/10 text-white"
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-10 md:p-14 relative bg-[#121212] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tighter transition-all duration-500 group-hover/card:translate-x-2">
              {project.title}
            </h3>
            <p className="font-sans text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-sm line-clamp-2 group-hover/card:text-white/60 transition-colors duration-500">
              {project.description}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="relative h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover/card:bg-white group-hover/card:border-white transition-all duration-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover/card:text-black transition-colors">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 group-hover/card:text-emerald-400/80 transition-colors">Explore</span>
              <span className="text-xs font-bold text-white/60">Case Study</span>
            </div>
          </div>

          {/* Accent Line */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{ backgroundColor: project.color }}
          />
        </div>
      </a>
    </motion.div>
  );
};

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative z-10 bg-[#0A0A0A] py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Dynamic Background Text */}
      <motion.div 
        style={{ x: xBg }}
        className="absolute top-20 left-0 whitespace-nowrap opacity-[0.02] pointer-events-none select-none"
      >
        <span className="font-display text-[25vw] font-black leading-none uppercase tracking-tighter text-white">
          SelectedWork SelectedWork SelectedWork
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header Section */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-display text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 uppercase leading-[0.9]">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-white">Creations</span>
            </h2>
            <div className="w-20 h-2 bg-emerald-400 mb-8 rounded-full" />
            <p className="font-sans text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
              Merging technical excellence with creative vision to build digital experiences that matter.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-0">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA (Subtle) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-32 text-center"
        >
          <a 
            href="https://mahessh.me/" 
            className="inline-flex items-center gap-4 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="font-display text-xl uppercase tracking-widest font-bold">See All Projects</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white hover:text-black transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

