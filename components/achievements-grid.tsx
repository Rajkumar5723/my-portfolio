"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

interface Achievement {
  title: string
  description: string
  rank?: string
}

interface AchievementsGridProps {
  achievements: Achievement[]
}

export default function AchievementsGrid({ achievements }: AchievementsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          className={`rounded-2xl p-[2px] transition-all duration-300 ${
            hoveredIndex === index
              ? "bg-gradient-to-r from-yellow-500 to-orange-500"
              : "bg-transparent border border-gray-700"
          }`}
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="bg-[#0f0f1a] rounded-xl p-6 relative overflow-hidden">
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 to-orange-900/10 pointer-events-none rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="relative z-10">
              {/* Icon and rank */}
              <div className="flex items-start gap-3 mb-3">
                <motion.div
                  className="p-2 rounded-lg bg-yellow-900/30 text-yellow-400"
                  animate={{ rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Trophy className="w-5 h-5" />
                </motion.div>
                {achievement.rank && (
                  <span className="text-sm font-bold text-yellow-400 bg-yellow-900/20 px-2 py-1 rounded">
                    {achievement.rank}
                  </span>
                )}
              </div>

              {/* Title */}
              <motion.h3
                className="text-lg font-bold mb-2 text-white"
                animate={{ color: hoveredIndex === index ? "#fbbf24" : "#ffffff" }}
              >
                {achievement.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
