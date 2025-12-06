import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function FeaturedCarousel({ projects }) {
  // Guard clause: If no projects passed, do nothing (prevents crash)
  if (!projects || projects.length === 0) return null;

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr === projects.length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent((curr) => (curr === 0 ? projects.length - 1 : curr - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {projects.map((project, idx) => (
        <div 
          key={project.id || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img 
              src={project.image_url} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white z-20">
            <div className="max-w-4xl">
              <p className="text-amber-400 font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
                Featured Collection — {project.location}
              </p>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                {project.title}
              </h2>
              <Link 
                to={createPageUrl(project.page_name)}
                className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-300"
              >
                View Residence <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Controls */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button onClick={prev} className="p-3 border border-white/20 text-white hover:bg-white hover:text-neutral-900 rounded-full"><ChevronLeft /></button>
        <button onClick={next} className="p-3 border border-white/20 text-white hover:bg-white hover:text-neutral-900 rounded-full"><ChevronRight /></button>
      </div>
    </div>
  );
}
