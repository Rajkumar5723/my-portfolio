"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Server, Database, Code } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

interface Skill {
  title: string
  description: string
  icon: string
  color: string
  hoverColor: string
}

export default function InteractiveAboutSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Express, and MongoDB.",
      icon: "server",
      color: "bg-purple-900",
      hoverColor: "bg-purple-800",
    },
    {
      title: "Machine Learning",
      description: "Developing and deploying machine learning models with PyTorch and TensorFlow.",
      icon: "database",
      color: "bg-cyan-900",
      hoverColor: "bg-cyan-800",
    },
    {
      title: "API Development",
      description: "Designing and implementing RESTful APIs and real-time communication with Socket.IO.",
      icon: "code",
      color: "bg-purple-900",
      hoverColor: "bg-purple-800",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!containerRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server className="w-8 h-8" />
      case "database":
        return <Database className="w-8 h-8" />
      case "code":
        return <Code className="w-8 h-8" />
      default:
        return <Server className="w-8 h-8" />
    }
  }

  return (
    <div className="grid md:grid-cols-3 gap-8" ref={containerRef}>
      {skills.map((skill, index) => (
        <ScrollReveal key={index} direction="right" delay={0.2 + index * 0.1}>
          <motion.div
            className={`p-6 rounded-lg transition-all duration-300 relative overflow-hidden cursor-pointer`}
            style={{
              background:
                activeCard === index
                  ? index === 1
                    ? "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05))"
                    : "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))"
                  : "#0f0f1a",
              borderColor:
                activeCard === index
                  ? index === 1
                    ? "rgba(6, 182, 212, 0.5)"
                    : "rgba(139, 92, 246, 0.5)"
                  : "rgba(31, 41, 55, 0.5)",
              borderWidth: "1px",
            }}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            whileHover={{ scale: 1.02 }}
          >
            {/* Gradient overlay when active */}
            {activeCard === index && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  background:
                    index === 1
                      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.1) 30%, transparent 70%)`
                      : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)`,
                  zIndex: 0,
                }}
              />
            )}

            {/* Diagonal gradient overlay */}
            {activeCard === index && (
              <motion.div
                className="absolute inset-0 opacity-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                style={{
                  background:
                    index === 1
                      ? "linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, transparent 60%)"
                      : "linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, transparent 60%)",
                  zIndex: 1,
                }}
              />
            )}

            {/* Circle indicator */}
            {activeCard === index && (
              <motion.div
                className={`absolute ${index === 1 ? "top-4 right-4" : "top-4 left-4"} w-3 h-3 rounded-full ${index === 1 ? "bg-cyan-400" : "bg-purple-500"}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 2 }}
              />
            )}

            <div className="flex items-start gap-4 relative z-10">
              <div
                className={`p-3 ${activeCard === index ? (index === 1 ? "bg-cyan-900/50" : "bg-purple-900/50") : "bg-[#1a1a2e]"} rounded-lg transition-colors duration-300`}
              >
                {renderIcon(skill.icon)}
              </div>
              <div>
                <h4
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${activeCard === index ? (index === 1 ? "text-cyan-400" : "text-purple-400") : ""}`}
                >
                  {skill.title}
                </h4>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  )
}
