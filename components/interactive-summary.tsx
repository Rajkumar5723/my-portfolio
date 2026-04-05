"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface InteractiveSummaryProps {
  paragraphs: string[]
}

export default function InteractiveSummary({ paragraphs }: InteractiveSummaryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [touchedWords, setTouchedWords] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!containerRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleWordTouch = (word: string) => {
    if (!touchedWords.includes(word)) {
      setTouchedWords([...touchedWords, word])
    }
  }

  const keyTechWords = [
    "node.js",
    "python",
    "mongodb",
    "api",
    "tensorflow",
    "pytorch",
    "data",
    "backend",
    "full stack",
    "socket.io",
    "real-time",
    "tableau",
    "power bi",
  ]

  return (
    <div className="space-y-6" ref={containerRef}>
      {paragraphs.map((paragraph, index) => (
        <motion.div
          key={index}
          className="bg-[#0f0f1a] p-6 rounded-lg border border-gray-800 relative overflow-hidden"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient overlay when active */}
          {activeIndex === index && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)`,
                zIndex: 0,
              }}
            />
          )}

          {/* Highlight words on hover/touch */}
          <p className="text-gray-300 relative z-10">
            {paragraph.split(" ").map((word, wordIndex) => {
              const lowerWord = word.toLowerCase().replace(/[.,;:]/g, "")
              const isKeyTech = keyTechWords.some((tech) => lowerWord.includes(tech))
              const isHighlighted = (activeIndex === index && isKeyTech) || touchedWords.includes(word)

              return (
                <motion.span
                  key={wordIndex}
                  className={`${isHighlighted ? "text-cyan-400 font-medium" : ""} transition-colors duration-300 cursor-pointer`}
                  onClick={() => isKeyTech && handleWordTouch(word)}
                  whileHover={isKeyTech ? { scale: 1.1 } : {}}
                >
                  {word}{" "}
                </motion.span>
              )
            })}
          </p>

          {/* Animated border on active */}
          {activeIndex === index && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500" />
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-purple-500 to-cyan-500" />
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-cyan-500 to-purple-500" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
