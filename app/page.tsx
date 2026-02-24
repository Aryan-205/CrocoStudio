// import HeroSection from "@/components/HeroSection";


// export default function Home() {
//   return (
//     <div className="min-h-screen w-full bg-neutral-100">
//       <HeroSection />
//       <div className="min-h-screen w-full bg-neutral-100">
//         {/* about */}
//         <div className="w-full h-[60vh] flex justify-between py-12 pl-4 pr-24">
//           <div className="min-w-56 flex items-start h-full">
//             <p className="text-2xl font-medium text-black">About</p>
//           </div>
//           <p className="text-8xl font-semibold text-black">Visual Precision Designed to Resonate</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans selection:bg-orange-500 selection:text-white">
      <HeroSection />

      {/* --- ABOUT HEADER SECTION (Screenshot 2) --- */}
      <section className="px-6 py-20 md:px-12 lg:flex">
        <div className="lg:w-1/4">
          <h2 className="text-xl font-medium">About</h2>
        </div>
        <div className="lg:w-3/4 mt-4 lg:mt-0">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] max-w-4xl">
            Visual precision,<br />designed to resonate
          </h1>
        </div>
      </section>

      {/* --- SHOWREEL SECTION (Screenshot 2) --- */}
      <section className="px-6 md:px-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <p className="text-sm font-medium uppercase tracking-wider">Showreel</p>
        </div>
        <div className="lg:w-3/4 relative">
          {/* Representative of the orange "+" cursor/icon in the screenshot */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-600 text-2xl">+</div>
          <div className="w-full aspect-video bg-black overflow-hidden rounded-sm">
            <img 
              src="/api/placeholder/1200/675" 
              alt="Styleframe Showreel" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* --- DESCRIPTION SECTION (Screenshot 1) --- */}
      <section className="px-6 py-24 md:px-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/4">
          <div className="text-sm leading-relaxed">
            <p className="font-bold">Styleframe GmbH</p>
            <p>Based in</p>
            <p>Frankfurt am Main</p>
          </div>
        </div>
        
        <div className="lg:w-2/5 text-2xl md:text-3xl leading-snug">
          <p>
            Styleframe is a design and CGI animation studio driven by clarity, 
            craft, and creative vision. Projects are approached with precision 
            and purpose, ensuring every detail contributes to meaningful visual impact.
          </p>
        </div>

        <div className="lg:w-1/3 text-2xl md:text-3xl leading-snug flex flex-col justify-between">
          <p>
            Collaboration with international clients shapes the work, always 
            balancing experimentation with refined execution.
          </p>
          <button className="text-orange-600 mt-8 text-left font-medium hover:underline">
            Read More
          </button>
        </div>
      </section>

      {/* --- FOOTER INFO (Screenshot 1) --- */}
      <footer className="px-6 pb-20 md:px-12 space-y-12 border-t border-neutral-300 pt-12">
        {/* Awards Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <span className="w-32 text-sm font-medium mb-2 md:mb-0">Awards</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xl md:text-2xl font-semibold">
            <span>01 x New York Movie Awards</span>
            <span className="text-orange-600">●</span>
            <span>03 x Red Movie Awards</span>
            <span className="text-orange-600">●</span>
            <span>01 x Lafa Awards</span>
            <span className="text-orange-600">●</span>
            <span>04</span>
          </div>
        </div>

        {/* Clients Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <span className="w-32 text-sm font-medium mb-2 md:mb-0">Clients</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xl md:text-2xl font-semibold">
            {["Oakley", "Opel", "Ray-Ban", "Sonra", "Audi", "Bose", "Deutsche Bank"].map((client, i) => (
              <div key={client} className="flex items-center gap-4">
                <span>{client}</span>
                <span className="text-orange-600">●</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}