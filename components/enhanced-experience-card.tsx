"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface EnhancedExperienceCardProps {
  title: string
  company: string
  period: string
  location?: string
  highlights: string[]
  showMore?: boolean
}

export default function EnhancedExperienceCard({
  title,
  company,
  period,
  location,
  highlights,
  showMore = true,
}: EnhancedExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [touchedItems, setTouchedItems] = useState<number[]>([])

  const handleItemTouch = (index: number) => {
    if (!touchedItems.includes(index)) {
      setTouchedItems([...touchedItems, index])
    } else {
      setTouchedItems(touchedItems.filter((i) => i !== index))
    }
  }

  const displayCount = expanded ? highlights.length : 3
  const hasMore = highlights.length > 3

  return (
    <motion.div
      className={`rounded-2xl p-[2px] transition-all duration-300 ${
        isHovered ? "bg-gradient-to-r from-purple-500 to-cyan-500" : "bg-transparent border border-gray-700"
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#0f0f1a] rounded-xl p-6 relative overflow-hidden">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full">{company}</span>
        </div>

        <div className="flex flex-col gap-2 text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
        </div>

        <ul className="space-y-3 text-gray-300">
          {highlights.slice(0, displayCount).map((item, index) => {
            const isActive = touchedItems.includes(index)

            return (
              <motion.li
                key={index}
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => handleItemTouch(index)}
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className={`text-lg leading-none transition-colors flex-shrink-0 ${
                    isActive ? "text-cyan-400" : "text-purple-400"
                  }`}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                  }}
                >
                  ✓
                </motion.span>
                <span className={isActive ? "text-white" : ""}>{item}</span>
              </motion.li>
            )
          })}
        </ul>

        {hasMore && (
          <Button
            variant="ghost"
            className="mt-4 text-purple-400 hover:text-cyan-400 rounded-xl"
            onClick={() => setExpanded(!expanded)}
          >
            Show {expanded ? "Less" : "More"}{" "}
            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </Button>
        )}
      </div>
    </motion.div>
  )
}
