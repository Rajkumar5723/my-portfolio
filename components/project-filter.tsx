"use client"
import { motion } from "framer-motion"

interface ProjectFilterProps {
  onFilterChange: (filter: string) => void
  activeFilter: string
}

export default function ProjectFilter({ onFilterChange, activeFilter }: ProjectFilterProps) {
  const filters = ["All", "Backend", "Frontend", "Full Stack", "Data", "AI"]

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-3 rounded-full transition-colors ${
            activeFilter === filter ? "bg-gray-700 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700/80"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  )
}
