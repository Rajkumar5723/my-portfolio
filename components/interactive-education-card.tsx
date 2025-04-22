"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface InteractiveEducationCardProps {
  degree: string
  institution: string
  period: string
}

export default function InteractiveEducationCard({ degree, institution, period }: InteractiveEducationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-[#0f0f1a] p-6 rounded-lg relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated gradient border */}
      {isHovered && (
        <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500" />
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-purple-500 to-cyan-500" />
          <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-cyan-500 to-purple-500" />
        </motion.div>
      )}

      {/* Background gradient */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <div className="relative z-10">
        <motion.h3 className="text-2xl font-bold mb-4" animate={{ color: isHovered ? "#a78bfa" : "#ffffff" }}>
          Education
        </motion.h3>

        <div className="bg-[#0f0f1a]/50 p-4 rounded-lg border border-gray-800">
          <motion.h4
            className="text-lg font-bold text-cyan-400 mb-2"
            animate={{ color: isHovered ? "#06b6d4" : "#22d3ee" }}
          >
            {degree}
          </motion.h4>
          <motion.p className="text-gray-300 mb-2" animate={{ color: isHovered ? "#f3f4f6" : "#d1d5db" }}>
            {institution}
          </motion.p>
          <motion.p className="text-gray-400" animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}>
            {period}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

