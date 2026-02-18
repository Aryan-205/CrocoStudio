import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-100">
      <HeroSection />
      <div className="min-h-screen w-full bg-neutral-100">
        {/* about */}
        <div className="w-full h-[60vh] flex justify-between py-12 pl-4 pr-24">
          <div className="min-w-56 flex items-start h-full">
            <p className="text-2xl font-medium text-black">About</p>
          </div>
          <p className="text-8xl font-semibold text-black">Visual Precision Designed to Resonate</p>
        </div>
      </div>
    </div>
  );
}
