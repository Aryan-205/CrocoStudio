'use client'
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function ResearchPage() {
  const constraintsRef = useRef(null);

  // Define your image positions on a large 3000x2000 canvas
  // TODO: Add more images
  // TODO: make positions random
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853", top: '20%', left: '45%', width: '350px', z: 10 },
    { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", top: '35%', left: '60%', width: '300px', z: 20 },
    { src: "https://images.unsplash.com/photo-1529139513402-5ad67e3dca8a", top: '10%', left: '75%', width: '320px', z: 5 },
    { src: "https://images.unsplash.com/photo-1539109132314-347596d6b508", top: '55%', left: '50%', width: '400px', z: 15 },
    { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae", top: '65%', left: '70%', width: '380px', z: 25 },
    { src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03", top: '45%', left: '85%', width: '280px', z: 10 },
  ];

  return (
    // 1. The Viewport (Fixed Screen)
    <div className="relative w-screen h-screen overflow-hidden bg-[#E5E5E5] cursor-grab active:cursor-grabbing">
      
      {/* Fixed Navigation (Stays on screen while you scroll) */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-start p-8 pointer-events-none">
        <div className="flex items-center gap-1 font-black text-2xl tracking-tighter pointer-events-auto">
          S<span className="bg-black w-8 h-5 inline-block"></span>
          <span className="text-[10px] -mt-3">®</span>
        </div>
        
        <div className="flex gap-16 text-sm font-bold uppercase tracking-widest pointer-events-auto">
          {['Index', 'Research', 'Studio', 'Contact'].map((item) => (
            <button key={item} className="hover:line-through transition-all">{item}</button>
          ))}
        </div>
      </nav>

      {/* 2. The Draggable Canvas Container */}
      <motion.div 
        drag
        dragConstraints={{ left: -5000, right: 5000, top: -5000, bottom: 5000 }}
        dragElastic={0.1}
        className="relative w-[3000px] h-[2000px]"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      >

        {/* Floating Images */}
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="absolute shadow-[20px_20px_60px_rgba(0,0,0,0.2)] grayscale hover:grayscale-0 transition-all duration-700 bg-white p-2"
            style={{ 
              top: img.top, 
              left: img.left, 
              width: img.width,
              zIndex: img.z 
            }}
          >
            <img 
              src={img.src} 
              alt="portfolio" 
              className="w-full h-auto block" 
              draggable="false" 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Scroll Indicator */}
      <div className="fixed bottom-8 left-8 text-[10px] font-mono opacity-40 uppercase tracking-widest">
        Click and drag to explore canvas
      </div>
    </div>
  );
}