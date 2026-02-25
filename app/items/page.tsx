'use client'
import React, { useState, useEffect } from 'react';

const projects = [
  { year: '2025', client: 'Samsung', project: 'Galaxy Watch8 Series', video: 'https://cdn.styleframe.de/Samsung_Wearables/SNIPPET_SAMSUNG_WEARABLES.mp4' },
  { year: '2025', client: 'Oakley', project: 'Plantaris Titanium', video: 'https://cdn.styleframe.de/oakley-plantaris_ti/SNIPPET_PLANTARIS-Ti.mp4' },
  { year: '2025', client: 'Samsung', project: 'Galaxy Z Fold 7 - BnB', video: 'https://cdn.styleframe.de/Samsung_BeatzNBuckets/SNIPPET-Samsung_BnB_LowRes.mp4' },
  { year: '2025', client: 'Ray-Ban', project: 'Innovation Lab', video: 'https://cdn.styleframe.de/ray-ban_innovation_lab/SNIPPET-RayBan_InnovationLab_LowRes.mp4' },
  { year: '2025', client: 'Oakley', project: 'Artifacts from the Future', video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { year: '2025', client: 'Wolf & Shepherd', project: 'SuperCrossover', video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { year: '2025', client: 'Moncler', project: 'Grenoble FW25', video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
];

export default function PortfolioPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#E5E5E5] text-black font-sans px-8 py-40 relative overflow-hidden">
      {/* Hidden preload videos: load in background so hover preview plays from cache */}
      <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden>
        {projects.map((p, i) => (
          <video
            key={i}
            preload="auto"
            muted
            playsInline
            src={p.video}
          />
        ))}
      </div>

      {/* Floating Video Preview — same src as preloaded, so plays from cache */}
      {hoveredIndex !== null && (
        <div 
          className="fixed pointer-events-none z-50 overflow-hidden bg-black"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            transform: 'translate(-50%, -50%)',
            width: '320px', 
            height: '180px' 
          }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            src={projects[hoveredIndex].video}
          />
        </div>
      )}

      <main className="w-full">
        <div className="grid grid-cols-12 w-full mb-12 text-base text-gray-600">
          <p className="col-span-3">Year</p>
          <p className="col-span-4">Client</p>
          <p className="col-span-4">Project</p>
        </div>

        <div className="flex flex-col">
          {projects.map((item, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="grid grid-cols-12 w-full items-baseline group cursor-none py-4"
            >
              <div className="col-span-3 text-3xl font-medium tracking-tight group-hover:text-[#FF5100] transition-colors duration-300">
                {item.year}
              </div>
              <div className="col-span-4 text-3xl font-medium tracking-tight group-hover:text-[#FF5100] transition-colors duration-300">
                {item.client}
              </div>
              <div className="col-span-4 text-3xl font-medium tracking-tight group-hover:text-[#FF5100] transition-colors duration-300">
                {item.project}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}