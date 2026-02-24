import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full h-screen bg-[#FF5C00] text-black p-8 flex flex-col justify-between font-sans overflow-hidden">
      {/* Top Navigation Row */}
      <div className="grid grid-cols-12 w-full pt-4">
        {/* Copyright */}
        <div className="col-span-2 text-sm font-medium">
          © Kushal
        </div>

        {/* Social Links */}
        <div className="col-span-4 flex flex-col gap-1 text-2xl font-semibold leading-tight">
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Vimeo</a>
          <a href="#" className="hover:opacity-50 transition-opacity">AI Lab</a>
        </div>

        {/* Policy Links */}
        <div className="col-span-3 text-2xl font-semibold uppercase tracking-tight">
          <p className="mb-1">Privacy Policy</p>
          <p>Imprint</p>
        </div>

        {/* Site Map */}
        <div className="col-span-3 flex flex-col gap-1 text-2xl font-semibold leading-tight text-right md:text-left">
          <a href="#" className="hover:opacity-50 transition-opacity">Index</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Research</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Studio</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </div>

      {/* Bottom Hero Section */}
      <div className="relative grid grid-cols-12 items-end pb-4 h-full">
        {/* Giant "S" */}
        <div className="col-span-4 leading-[0.7] select-none">
          <h1 className="text-[45vw] font-black -ml-6 tracking-tighter">
            K
          </h1>
        </div>

        {/* Featured Image Container */}
        <div className="col-span-7 h-[92%] bg-white relative overflow-hidden group">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://cdn.styleframe.de/Samsung_Wearables/SNIPPET_SAMSUNG_WEARABLES.mp4" 
            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Registered Trademark Icon */}
        <div className="col-span-1 flex justify-end pb-20">
          <div className="border-[3px] border-black rounded-full w-16 h-16 flex items-center justify-center">
            <span className="text-3xl font-black">R</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;