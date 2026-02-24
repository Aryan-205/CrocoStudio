import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans selection:bg-orange-500 selection:text-white">
      <HeroSection />

      {/* --- ABOUT HEADER SECTION (Screenshot 2) --- */}
      <section className="px-6 py-20 md:px-12 lg:flex">
        <div className="lg:w-1/4">
          <h2 className="text-xl font-medium">About</h2>
        </div>
        <div className="lg:w-3/4 mt-4 lg:mt-0 relative">
        <h1 
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] max-w-4xl bg-clip-text text-transparent bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.prod.website-files.com/66c3a685de0fd85a256fe67c/690d06e3424d11deade1e808_motto-ezgif.com-optimize.gif')` 
            }}
          >
            Visual precision, designed to resonate
          </h1>
        </div>
      </section>

      {/* --- SHOWREEL SECTION (Screenshot 2) --- */}
      <section className="px-6 md:px-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <p className="text-sm font-medium uppercase tracking-wider">Showreel</p>
        </div>
        <div className="lg:w-3/4 relative">
          <div className="w-full aspect-video bg-black overflow-hidden rounded-sm">
            <video 
              autoPlay
              muted
              loop
              controls
              playsInline
              src="https://cdn.styleframe.de/SF_Showreel_2025_FINAL.mp4" 
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