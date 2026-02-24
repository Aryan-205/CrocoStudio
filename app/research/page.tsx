'use client'
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

const BOUND = 5000;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ResearchPage() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, startPosX: 0, startPosY: 0 });

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    setPosition((p) => ({
      x: clamp(p.x - e.deltaX, -BOUND, BOUND),
      y: clamp(p.y - e.deltaY, -BOUND, BOUND),
    }));
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: position.x,
      startPosY: position.y,
    };
    setIsDragging(true);
  }, [position.x, position.y]);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => {
      const { startX, startY, startPosX, startPosY } = dragRef.current;
      setPosition({
        x: clamp(startPosX + e.clientX - startX, -BOUND, BOUND),
        y: clamp(startPosY + e.clientY - startY, -BOUND, BOUND),
      });
    };
    const onUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [isDragging]);

  // Define your image positions on a large 3000x2000 canvas
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
    <div
      ref={viewportRef}
      className="relative w-screen h-screen overflow-hidden bg-[#E5E5E5]"
      onMouseDown={handleMouseDown}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* 2. Pannable Canvas (scroll or drag) */}
      <motion.div
        className="relative w-[3000px] h-[2000px] touch-none"
        style={{
          x: position.x,
          y: position.y,
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
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
        Scroll or drag to explore canvas
      </div>
    </div>
  );
}