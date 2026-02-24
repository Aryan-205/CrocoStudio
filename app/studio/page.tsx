'use client'
import React from 'react';

export default function StudioPage() {
  return (
    <div className="min-h-screen w-full bg-[#E5E5E5] text-black font-sans selection:bg-orange-500 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative px-6 pt-32 pb-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-7xl md:text-9xl font-medium leading-[0.9] tracking-tight mb-12">
            Shaping <br /> thoughts
          </h1>

          {/* Floating Images Grid */}
          <div className="relative w-full h-[500px] md:h-[600px]">
            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-2/3 md:w-1/2 aspect-video overflow-hidden">
              <img 
                src="/crocoStudio.png" 
                alt="Studio interior with bicycle" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Mid Left Image */}
            <div className="absolute top-1/4 left-0 w-1/3 md:w-1/4 aspect-square overflow-hidden shadow-2xl">
              <img 
                src="/crocoStudio.png" 
                alt="Workstations" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Center Text & Image */}
            <div className="absolute bottom-0 right-1/4 z-10">
              <h2 className="text-6xl md:text-8xl font-medium text-[#FF4D00] leading-none text-right">
                into iconic <br /> visuals.
              </h2>
            </div>
            
            <div className="absolute -bottom-10 left-1/3 w-1/4 md:w-1/5 aspect-square overflow-hidden">
              <img 
                src="/crocoStudio.png" 
                alt="Interior detail" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* --- MISSION & PROCESS --- */}
      <section className="px-6 py-24 md:px-12 lg:px-20 border-t border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              The studio’s process is rooted in careful listening, clear planning, and meticulous execution. 
              Each project begins with a shared understanding of objectives, developing into visuals 
              that are both impactful and enduring.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Styleframe offers expertise across visual effects, post-production, creative direction, 
              animation direction, and CGI production. Each service is tailored to the needs of the project.
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl leading-relaxed">
              Dedicated research and look development keep the studio at the forefront of technology 
              and aesthetics. Every commission is an opportunity to refine methods, push boundaries, 
              and deliver visuals that resonate.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES & CLIENTS --- */}
      <section className="px-6 py-24 md:px-12 lg:px-20 bg-white/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Services List */}
          <div className="lg:col-span-5">
            <h3 className="text-sm uppercase tracking-widest mb-8 opacity-50">Services</h3>
            <ul className="text-2xl md:text-3xl space-y-2 font-medium">
              <li>3D Motion</li>
              <li>Conception & Design</li>
              <li>Research & Visual Development</li>
              <li>Creative, Art & Animation Direction</li>
              <li>CGI Still & Animation Production</li>
              <li>AI Direction & Execution</li>
              <li>Visual Effects</li>
            </ul>
          </div>

          {/* Clients Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-sm uppercase tracking-widest mb-8 opacity-50">Selected Clients</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-xl md:text-2xl font-medium">
              {[
                "Audi", "Bose", "Deutsche Bank", "Ferrero",
                "Hatton Labs", "Lionsgate", "Michelin", "Microsoft",
                "Moncler", "Nickelodeon", "Oakley", "Opel",
                "Ray-Ban", "Samsung", "Sonra", "rabbit"
              ].map((client) => (
                <div key={client} className="hover:text-[#FF4D00] transition-colors cursor-default">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-8xl md:text-9xl font-medium mb-16 tracking-tighter">Team</h2>
          
          <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hidden max-w-full">
            {[
              { name: "Robin", role: "Founder & CEO" },
              { name: "Tim", role: "3D Designer" },
              { name: "Leon", role: "Art Director" },
              { name: "Susanne", role: "Digital Artist" },
              { name: "Lorenzo", role: "Producer" }
            ].map((member) => (
              <div key={member.name} className="flex-none w-64 md:w-72 group">
                <div className="mb-4">
                  <p className="font-bold text-lg">{member.name}</p>
                  <p className="text-black/50">{member.role}</p>
                </div>
                <div className="aspect-3/4 overflow-hidden bg-gray-200">
                  <img 
                    src={`/crocoStudio2.png`} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Label */}
      <footer className="px-6 py-8 md:px-12 lg:px-20 border-t border-black/5">
        <p className="text-sm font-medium">3D Motion</p>
      </footer>
    </div>
  );
};