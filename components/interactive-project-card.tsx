"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  link: string
  github: string
}

export default function InteractiveProjectCard({
  title,
  description,
  image,
  technologies,
  category,
  link,
  github,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setIsTouched(false)
  }

  const isActive = isHovered || isTouched

  return (
    <motion.div
      className={`rounded-2xl p-[2px] transition-all duration-300 ${
        isActive ? "bg-gradient-to-r from-purple-500 to-cyan-500" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      whileHover={{ scale: 1.03 }}
    >
      {/* Inner container: solid background, slightly smaller radius */}
      <div className="bg-[#0f0f1a] rounded-xl overflow-hidden relative">
        {/* Optional faint background glow on hover */}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 pointer-events-none rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        <div className="relative h-60 overflow-hidden">
          <motion.div animate={{ scale: isActive ? 1.05 : 1 }} transition={{ duration: 0.5 }}>
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              animate={{
                y: isActive ? 0 : -5,
                opacity: isActive ? 1 : 0.8,
              }}
            >
              <Badge className="bg-purple-600 text-white">{category}</Badge>
            </motion.div>
          </div>
        </div>

        <div className="p-6">
          <motion.h3 className="text-xl font-bold mb-2" animate={{ color: isActive ? "#a78bfa" : "#ffffff" }}>
            {title}
          </motion.h3>
          <p className="text-gray-400 mb-4">{description}</p>

          {/* Always show technologies */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            animate={{
              opacity: isActive ? 1 : 0.7,
              y: isActive ? 0 : 5,
            }}
          >
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-[#1a1a2e]">
                {tech}
              </Badge>
            ))}
          </motion.div>

          <div className="flex items-center justify-between">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <Link href={github} className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 3 }}>
              <Link href={link} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 rounded-2xl">
                View Details <ArrowRight className="w-4 h-4 " />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
