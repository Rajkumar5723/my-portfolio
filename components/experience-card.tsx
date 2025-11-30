"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronDown } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  responsibilities: string[]
  showMore: boolean
  onToggleShowMore: () => void
}

export default function ExperienceCard({
  title,
  company,
  period,
  location,
  responsibilities,
  showMore,
  onToggleShowMore,
}: ExperienceCardProps) {
  return (
    <div className="bg-[#0f0f1a] p-6 rounded-lg">
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
        {responsibilities.slice(0, showMore ? responsibilities.length : 3).map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-cyan-400 text-xl leading-none">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {responsibilities.length > 3 && (
        <Button variant="ghost" className="mt-4 text-purple-400" onClick={onToggleShowMore}>
          Show {showMore ? "Less" : "More"}{" "}
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showMore ? "rotate-180" : ""}`} />
        </Button>
      )}
    </div>
  )
}
