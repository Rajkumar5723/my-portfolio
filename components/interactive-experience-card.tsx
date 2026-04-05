"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface InteractiveExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
  showMore: boolean
  onToggleShowMore: () => void
}

export default function InteractiveExperienceCard({
  title,
  company,
  period,
  location,
  responsibilities,
  showMore,
  onToggleShowMore,
}: InteractiveExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeResponsibility, setActiveResponsibility] = useState<number | null>(null)
  const [touchedResponsibilities, setTouchedResponsibilities] = useState<number[]>([])

  const handleResponsibilityTouch = (index: number) => {
    if (!touchedResponsibilities.includes(index)) {
      setTouchedResponsibilities([...touchedResponsibilities, index])
    } else {
      setTouchedResponsibilities(touchedResponsibilities.filter((i) => i !== index))
    }
  }

  // Gradient border wrapper with curved corners
  const outerClass = `rounded-2xl p-[2px] transition-all duration-300 ${
    isHovered ? "bg-gradient-to-r from-purple-500 to-cyan-500" : "bg-transparent"
  }`

  return (
    <motion.div
      className={outerClass}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Inner content container with solid background and inner rounding */}
      <div className="bg-[#0f0f1a] rounded-xl p-6 relative overflow-hidden">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-purple-400 mb-4">{company}</p>

        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 mb-6">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <ul className="space-y-3 text-gray-300">
          {responsibilities.slice(0, showMore ? responsibilities.length : 3).map((item, index) => {
            const isActive = activeResponsibility === index || touchedResponsibilities.includes(index)

            return (
              <motion.li
                key={index}
                className="flex items-start gap-2 cursor-pointer"
                onMouseEnter={() => setActiveResponsibility(index)}
                onMouseLeave={() => setActiveResponsibility(null)}
                onClick={() => handleResponsibilityTouch(index)}
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className={`text-xl leading-none transition-transform duration-300 ${
                    isActive ? "text-cyan-400" : "text-purple-400"
                  }`}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    rotate: isActive ? [0, 5, 0, -5, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  •
                </motion.span>
                <span className={isActive ? "text-white" : ""}>
                  {item.split(":")[0]}
                  {item.includes(":") && (
                    <span
                      className={`ml-1 ${
                        isActive ? "text-cyan-400" : "text-gray-400"
                      }`}
                    >
                      :{item.split(":")[1]}
                    </span>
                  )}
                </span>
              </motion.li>
            )
          })}
        </ul>

        {responsibilities.length > 3 && (
          <Button
            variant="ghost"
            className="mt-4 text-purple-400 rounded-xl"
            onClick={onToggleShowMore}
          >
            Show {showMore ? "Less" : "More"}{" "}
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </div>
    </motion.div>
  )
}
