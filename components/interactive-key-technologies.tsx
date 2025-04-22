"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TechBadge from "./tech-badge"

interface InteractiveKeyTechnologiesProps {
  technologies: string[]
}

export default function InteractiveKeyTechnologies({ technologies }: InteractiveKeyTechnologiesProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeTech, setActiveTech] = useState<string | null>(null)

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
          Key Technologies
        </motion.h3>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              onMouseEnter={() => setActiveTech(tech)}
              onMouseLeave={() => setActiveTech(null)}
              whileHover={{ scale: 1.05 }}
            >
              <TechBadge name={tech} isActive={activeTech === tech || isHovered} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

