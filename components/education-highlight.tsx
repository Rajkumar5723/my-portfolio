"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, BookMarked } from "lucide-react"

interface EducationHighlightProps {
  degree: string
  institution: string
  period: string
  cgpa?: string
  focusAreas: string[]
}

export default function EducationHighlight({ degree, institution, period, cgpa, focusAreas }: EducationHighlightProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`rounded-2xl p-[2px] transition-all duration-300 ${
        isHovered ? "bg-gradient-to-r from-[#06b6d4] to-[#0891b2]" : "bg-transparent border border-gray-700"
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#0f0f1a] rounded-xl p-6 relative overflow-hidden">
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/10 pointer-events-none rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="relative z-10">
          {/* Header with icon */}
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="p-2 rounded-lg bg-[#06b6d4]/30 text-[#06b6d4]"
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-6 h-6" />
            </motion.div>
            <div>
              <motion.h3
                className="text-xl font-bold text-white"
                animate={{ color: isHovered ? "#06b6d4" : "#ffffff" }}
              >
                {degree}
              </motion.h3>
              <p className="text-[#06b6d4] text-sm">{institution}</p>
            </div>
          </div>

          {/* Period and CGPA */}
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
            <span className="text-gray-400 text-sm">{period}</span>
            {cgpa && (
              <span className="text-[#06b6d4] font-semibold text-sm bg-[#06b6d4]/20 px-3 py-1 rounded">
                CGPA: {cgpa}
              </span>
            )}
          </div>

          {/* Focus areas */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookMarked className="w-4 h-4 text-[#06b6d4]" />
              <p className="text-gray-300 font-semibold text-sm">Key Focus Areas</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, index) => (
                <motion.span
                  key={index}
                  className="text-xs bg-[#06b6d4]/30 text-[#06b6d4] px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
