"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Award } from "lucide-react"

interface PublicationCardProps {
  title: string
  type: "publication" | "patent"
  venue?: string
  year: number
  description: string
}

export default function PublicationCard({ title, type, venue, year, description }: PublicationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`rounded-2xl p-[2px] transition-all duration-300 ${
        isHovered ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-transparent border border-gray-700"
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#0f0f1a] rounded-xl p-6 relative overflow-hidden">
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 pointer-events-none rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="relative z-10">
          {/* Header with icon and type badge */}
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className={`p-2 rounded-lg ${
                type === "patent" ? "bg-blue-900/30 text-blue-400" : "bg-cyan-900/30 text-cyan-400"
              }`}
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              {type === "patent" ? <Award className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
            </motion.div>
            <span className={`text-sm font-semibold ${type === "patent" ? "text-blue-400" : "text-cyan-400"}`}>
              {type === "patent" ? "Patent" : "Publication"}
            </span>
            <span className="text-sm text-gray-500 ml-auto">{year}</span>
          </div>

          {/* Title */}
          <motion.h3
            className="text-lg font-bold mb-2 text-white"
            animate={{ color: isHovered ? "#06b6d4" : "#ffffff" }}
          >
            {title}
          </motion.h3>

          {/* Venue */}
          {venue && <p className="text-sm text-purple-400 mb-3">{venue}</p>}

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
