'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const CARD_COUNT = 8
const CARD_WIDTH = 480
const CARD_HEIGHT = 320

const cardsData = [
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
  { type: 'image' as const, src: '/Image.jpeg', alt: 'Hero', overlay: null },
]

export default function HeroSection() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      console.log("mousePos", mousePos);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen overflow-hidden w-full bg-neutral-100 flex items-center justify-center py-24 px-4">
      <div
        className="relative w-full max-w-5xl flex items-center justify-center preserve-3d perspective-distant transform-style-preserve-3d"
      >
        <div
          className="relative flex items-center justify-center max-md:overflow-x-auto max-md:justify-start max-md:py-8"
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT + 120,
            transformStyle: 'preserve-3d',
            // minWidth: 'min(100vw, 1200px)',
          }}
        >
          {cardsData.slice(0, CARD_COUNT).map((card, index) => {
            const offsetX = index * 100

            return (
              <div
                key={index}
                className="absolute rounded-lg overflow-hidden shadow-xl hover:translate-y-[-100px] transition-all duration-300"
                style={{
                  width: 320,
                  height: 220,
                  left: '50%',
                  top: '80%',
                  marginLeft: -120 + offsetX,
                  marginTop: -170,
                  scale: 1 - index * 0.05,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(-18deg) translateZ(200px) translateX(-300px) translateY(${-40 * index}px) skewY(10deg)`,
                  zIndex: index * 0.1,
                }}
              >
                <Image 
                  src={card.src} 
                  alt={card.alt} 
                  width={380} 
                  height={340} 
                  className="object-cover w-full h-full" 
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
