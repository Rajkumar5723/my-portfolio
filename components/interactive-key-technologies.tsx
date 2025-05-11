"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TechBadge from "./tech-badge"

interface InteractiveKeyTechnologiesProps {
  technologies: string[]
}

export default function InteractiveKeyTechnologies({
  technologies,
}: InteractiveKeyTechnologiesProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeTech, setActiveTech] = useState<string | null>(null)

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
        {/* Optional background gradient on hover, clipped by rounded-xl */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 pointer-events-none rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Actual content */}
        <div className="relative z-10">
          <motion.h3
            className="text-2xl font-bold mb-4"
            animate={{ color: isHovered ? "#a78bfa" : "#ffffff" }}
          >
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
                <TechBadge
                  name={tech}
                  isActive={activeTech === tech || isHovered}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
