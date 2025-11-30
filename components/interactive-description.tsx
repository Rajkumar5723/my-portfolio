"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface InteractiveDescriptionProps {
  text: string
}

export default function InteractiveDescription({ text }: InteractiveDescriptionProps) {
  const [hoveredWord, setHoveredWord] = useState<number | null>(null)

  const words = text.split(" ")

  const getWordColor = (index: number) => {
    return "inherit"
  }

  return (
    <motion.p
      className="text-lg text-gray-300 mb-8 max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          style={{ color: getWordColor(index) }}
          onMouseEnter={() => setHoveredWord(index)}
          onMouseLeave={() => setHoveredWord(null)}
          whileHover={{ scale: 1.1 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}
