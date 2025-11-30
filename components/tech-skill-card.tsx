"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface TechSkillCardProps {
  name: string
  icon: string
  color: string
  category: string
  proficiency: number
}

export default function TechSkillCard({ name, icon, color, category, proficiency }: TechSkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  }

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 10 },
  }

  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${proficiency}%` },
  }

  return (
    <motion.div
      className={`relative w-full rounded-lg overflow-hidden ${color} p-1`}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-[#0f0f1a] rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <motion.div className="relative w-16 h-16 flex items-center justify-center" variants={iconVariants}>
            <div className={`absolute inset-0 rounded-full ${color.replace("bg-", "bg-")}/30`}></div>
            <div className="relative w-10 h-10">
              <Image src={icon || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
          </motion.div>

          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-400">{category}</p>
          </div>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
          <motion.div
            className={`h-2.5 rounded-full ${color.replace("bg-", "bg-")}`}
            variants={progressVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Expert</span>
        </div>
      </div>
    </motion.div>
  )
}
