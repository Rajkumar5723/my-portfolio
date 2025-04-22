"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import TechSkillCard from "./tech-skill-card"
import SectionTitle from "./section-title"

interface Skill {
  name: string
  icon: string
  color: string
  category: string
  proficiency: number
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const categories = ["All", "Backend", "Frontend", "Database", "Machine Learning", "Tools"]

  const skills: Skill[] = [
    {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
      color: "bg-green-600",
      category: "Backend",
      proficiency: 90,
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
      color: "bg-blue-600",
      category: "Backend",
      proficiency: 85,
    },
    {
      name: "Express.js",
      icon: "/icons/express.svg",
      color: "bg-gray-600",
      category: "Backend",
      proficiency: 88,
    },
    {
      name: "MongoDB",
      icon: "/icons/mongodb.svg",
      color: "bg-green-700",
      category: "Database",
      proficiency: 85,
    },
    {
      name: "MySQL",
      icon: "/icons/mysql.svg",
      color: "bg-blue-700",
      category: "Database",
      proficiency: 80,
    },
    {
      name: "TensorFlow",
      icon: "/icons/tensorflow.svg",
      color: "bg-orange-600",
      category: "Machine Learning",
      proficiency: 75,
    },
    {
      name: "PyTorch",
      icon: "/icons/pytorch.svg",
      color: "bg-red-600",
      category: "Machine Learning",
      proficiency: 70,
    },
    {
      name: "HTML/CSS",
      icon: "/icons/html.svg",
      color: "bg-orange-500",
      category: "Frontend",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
      color: "bg-yellow-500",
      category: "Frontend",
      proficiency: 90,
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
      color: "bg-red-500",
      category: "Tools",
      proficiency: 85,
    },
    {
      name: "Socket.IO",
      icon: "/icons/socketio.svg",
      color: "bg-gray-500",
      category: "Backend",
      proficiency: 80,
    },
    {
      name: "Tableau",
      icon: "/icons/tableau.svg",
      color: "bg-blue-500",
      category: "Tools",
      proficiency: 75,
    },
  ]

  const filteredSkills = activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory)

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

  return (
    <div ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Technical Skills" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300">My technical expertise and proficiency in various technologies.</p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
                  : "bg-[#1a1a2e] text-gray-300 hover:bg-[#1a1a2e]/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TechSkillCard
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                category={skill.category}
                proficiency={skill.proficiency}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

