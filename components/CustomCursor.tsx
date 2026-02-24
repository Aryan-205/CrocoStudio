'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      // Only show cursor after first movement to avoid it starting at 0,0
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Main Dot */}
      <motion.div
        className="absolute h-2.5 w-2.5 rounded-full bg-black"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: '-50%',
          y: '-50%',
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="absolute h-8 w-8 rounded-full border border-black opacity-50"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
      />
    </div>
  )
}
