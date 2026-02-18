'use client'

import React from 'react'
import Image from 'next/image'

const CARD_COUNT = 8
const CARD_WIDTH = 380
const CARD_HEIGHT = 340

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
  return (
    <section className="min-h-screen w-full bg-neutral-100 flex items-center justify-center py-24 px-4">
      <div
        className="relative w-full max-w-5xl flex items-center justify-center"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="relative flex items-center justify-center max-md:overflow-x-auto max-md:justify-start max-md:py-8"
          style={{
            width: CARD_WIDTH + (CARD_COUNT - 1) * 140,
            height: CARD_HEIGHT + 120,
            transformStyle: 'preserve-3d',
            minWidth: 'min(100vw, 1200px)',
          }}
        >
          {cardsData.slice(0, CARD_COUNT).map((card, index) => {
            const offsetX = index * 100

            return (
              <div
                key={index}
                className="absolute rounded-lg overflow-hidden shadow-xl"
                style={{
                  width: 380,
                  height: 340,
                  left: '50%',
                  top: '50%',
                  marginLeft: -190 + offsetX,
                  marginTop: -170,
                  scale: 0.9 - index * 0.01,
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(-18deg) translateZ(20px)`,
                  zIndex: index,
                }}
              >
                <Image 
                  src={card.src} 
                  alt={card.alt} 
                  width={380} 
                  height={340} 
                  className="object-cover w-full h-full" 
                  priority
                  quality={100}
                  loading="eager"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
