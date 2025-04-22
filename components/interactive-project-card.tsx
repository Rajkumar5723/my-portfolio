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

  return (
    <motion.div
      className="bg-[#0f0f1a] rounded-lg overflow-hidden relative"
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500" />
          <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500" />
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-purple-500 to-cyan-500" />
          <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-cyan-500 to-purple-500" />
        </motion.div>
      )}

      <div className="relative h-60 overflow-hidden">
        <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.5 }}>
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <motion.div
            animate={{
              y: isHovered ? 0 : -5,
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            <Badge className="bg-purple-600 text-white">{category}</Badge>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2"
          animate={{
            color: isHovered ? "#a78bfa" : "#ffffff",
          }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Always show technologies */}
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          animate={{
            opacity: isHovered ? 1 : 0.7,
            y: isHovered ? 0 : 5,
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
            <Link href={link} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              View Details <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

