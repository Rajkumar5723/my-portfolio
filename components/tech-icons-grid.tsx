"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface TechIcon {
  name: string
  icon: string
  color: string
}

export default function TechIconsGrid() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null)

  const technologies: TechIcon[] = [
  { name: "Machine Learning", icon: "/icons/sklearn.svg", color: "bg-[#1A1A2E]" },
  { name: "TensorFlow", icon: "/icons/tensorflow-logo.svg", color: "bg-[#1A1A2E]" },
  { name: "PyTorch", icon: "/icons/pytorch.svg", color: "bg-[#1A1A2E]" },
  { name: "MySQL", icon: "/icons/sql.svg", color: "bg-[#1A1A2E]" },
  { name: "Google Cloud", icon: "/icons/googlecloud.svg", color: "bg-[#1A1A2E]" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg", color: "bg-[#1A1A2E]" },
  { name: "Power BI", icon: "/icons/powerbi.svg", color: "bg-[#1A1A2E]" },
  { name: "Tableau", icon: "/icons/tableau.svg", color: "bg-[#1A1A2E]" },
  { name: "Hadoop", icon: "/icons/hadoop.svg", color: "bg-[#1A1A2E]" },
  { name: "HTML/CSS", icon: "/icons/html.svg", color: "bg-[#1A1A2E]" },
  { name: "Flask", icon: "/icons/flask.svg", color: "bg-[#1A1A2E]" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg", color: "bg-[#1A1A2E]" },
]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const heavyFloatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  return (
    <div className="w-full max-w-6xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider">SKILLS</h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{
              opacity: hoveredIcon === null || hoveredIcon === index ? 1 : 0.3,
              transition: "opacity 0.3s ease",
            }}
          >
            <motion.div
              className={`w-24 h-24 rounded-full ${tech.color} flex items-center justify-center relative`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="relative w-12 h-12"
                animate={heavyFloatAnimation}
              >
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
            <p className="mt-3 text-center text-sm font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
