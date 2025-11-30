"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface InteractiveEducationCardProps {
  degree: string
  institution: string
  period: string
}

export default function InteractiveEducationCard({
  degree,
  institution,
  period,
}: InteractiveEducationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      // Outer wrapper: 2px gradient border with curved corners
      className={`rounded-2xl p-[2px] transition-all duration-300 ${
        isHovered ? "bg-gradient-to-r from-purple-500 to-cyan-500" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Inner container: solid background, slightly smaller radius */}
      <div className="bg-[#0f0f1a] rounded-xl p-6 relative overflow-hidden">
        {/* Optional faint background glow on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 pointer-events-none rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="relative z-10">
          {/* Section title */}
          <motion.h3
            className="text-2xl font-bold mb-4"
            animate={{ color: isHovered ? "#a78bfa" : "#ffffff" }}
          >
            Education
          </motion.h3>

          {/* Education details */}
          <div className="bg-[#0f0f1a]/50 p-4 rounded-xl border border-gray-800">
            <motion.h4
              className="text-lg font-bold text-cyan-400 mb-2"
              animate={{ color: isHovered ? "#06b6d4" : "#22d3ee" }}
            >
              {degree}
            </motion.h4>
            <motion.p
              className="text-gray-300 mb-2"
              animate={{ color: isHovered ? "#f3f4f6" : "#d1d5db" }}
            >
              {institution}
            </motion.p>
            <motion.p
              className="text-gray-400"
              animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}
            >
              {period}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
