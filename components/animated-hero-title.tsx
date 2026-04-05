"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedHeroTitleProps {
  titles: string[]
  interval?: number
}

export default function AnimatedHeroTitle({ titles, interval = 3000 }: AnimatedHeroTitleProps) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, interval)

    return () => clearInterval(timer)
  }, [titles.length, interval])

  return (
    <div className="relative h-[60px] md:h-[80px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTitleIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <h2 className="text-2xl md:text-3xl font-medium">{titles[currentTitleIndex]}</h2>
          <div className="h-1 w-1/4 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mb-6"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
