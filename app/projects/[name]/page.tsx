import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='min-h-screen w-full flex flex-col p-4 bg-white pt-38'>
      <div className='flex flex-col w-full'>
        <p className='text-black font-medium text-8xl p-4'>OP 1</p>
        <Image src="/projectImages/header1.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
      </div>
      <section className="bg-white text-black p-8 md:p-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-4 border-t border-gray-400 pt-4">
          
          <div className="md:col-span-2">
            <span className="block text-sm uppercase tracking-tight mb-6">Year</span>
            <h2 className="text-4xl font-medium">2023</h2>
          </div>

          <div className="md:col-span-3">
            <span className="block text-sm uppercase tracking-tight mb-6">Client</span>
            <h2 className="text-4xl font-medium leading-tight">Teenage<br/>Engineering</h2>
          </div>

          <div className="md:col-span-5">
            <span className="block text-sm uppercase tracking-tight mb-6">Project Details</span>
            <p className="text-3xl md:text-4xl font-medium leading-[1.15] tracking-tight">
              With this spec-project, Leon Klaas, our art director and CG Artist came up with an unseen lighting technique that elevates the product and gives it a very unique & modern look and vibe.
            </p>
          </div>

          <div className="md:col-span-2">
            <span className="block text-sm uppercase tracking-tight mb-6">Type</span>
            <h2 className="text-4xl font-medium">Campaign</h2>
          </div>

        </div>
      </section>
      {/* image gallery */}
      <div className='w-full flex flex-col gap-4'>
        <Image src="/projectImages/Image1.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
        <div className='w-full flex gap-4'>
          <Image src="/projectImages/Image2.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
          <Image src="/projectImages/Image3.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
        </div>
        <Image src="/projectImages/Image1.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
        <div className='w-full flex gap-4'>
          <Image src="/projectImages/Image2.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
          <Image src="/projectImages/Image3.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
        </div>
        <div className='w-full flex gap-4'>
          <Image src="/projectImages/Image2.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
          <Image src="/projectImages/Image3.png" alt="Hero" width={380} height={340} className="object-cover w-full h-full" />
        </div>
      </div>
      <footer className="w-full bg-white text-black px-6 py-8 md:px-12 md:py-8 font-sans">
      
      {/* Credits Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        {/* Left Title */}
        <div className="md:col-span-5">
          <h3 className="text-lg font-medium">Teenage Engineering OP1</h3>
        </div>

        {/* Right Credits Column */}
        <div className="md:col-span-7">
          <div className="flex flex-col gap-8">
            <span className="text-lg font-medium">Credits</span>

            <div className="space-y-6">
              {/* Client */}
              <div>
                <p className="text-sm uppercase tracking-tight text-gray-600 mb-1">Client</p>
                <p className="text-xl font-medium">Teenage Engineering</p>
              </div>

              {/* Services List */}
              <div>
                <p className="text-sm uppercase tracking-tight text-gray-600 mb-1">Services</p>
                <ul className="text-xl font-medium leading-snug">
                  <li>CGI Still & Animation Production</li>
                  <li>3D Motion</li>
                  <li>Conception & Design</li>
                  <li>Creative, Art & Animation Direction</li>
                  <li>Research & Visual Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-300 pt-12">
        {/* Previous Project */}
        <a href="#" className="group block">
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-black transition-colors duration-300 mb-2">
            <span className="text-xl">←</span>
            <span className="text-lg">Previous Project</span>
          </div>
          <h4 className="text-xl md:text-3xl font-medium tracking-tight">
            Mizuno Contender Snowdrop
          </h4>
        </a>

        {/* Next Project */}
        <a href="#" className="group block">
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-black transition-colors duration-300 mb-2">
            <span className="text-lg">Next Project</span>
            <span className="text-xl">→</span>
          </div>
          <h4 className="text-xl md:text-3xl font-medium tracking-tight">
            13.11
          </h4>
        </a>
      </div>
    </footer>
      
    </div>
  )
}