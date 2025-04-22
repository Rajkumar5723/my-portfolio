"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Skill {
  name: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
  originalName?: string
}

export default function EnhancedInteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const [categories, setCategories] = useState<SkillCategory[]>([
    {
      name: "Programming Languages",
      originalName: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "SQL" },
        { name: "R" },
        { name: "C" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Flask" },
      ],
    },
    {
      name: "Machine Learning",
      originalName: "Machine Learning",
      skills: [{ name: "TensorFlow" }, { name: "PyTorch" }, { name: "Scikit-learn" }, { name: "Keras" }],
    },
    {
      name: "Data Analysis & Visualization",
      originalName: "Data Analysis & Visualization",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
      ],
    },
    {
      name: "Databases",
      originalName: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "SQLite" }],
    },
    {
      name: "Big Data",
      originalName: "Big Data",
      skills: [{ name: "Apache Spark" }, { name: "Hadoop" }, { name: "Kafka" }],
    },
    {
      name: "Cloud & DevOps",
      originalName: "Cloud & DevOps",
      skills: [
        { name: "Microsoft Azure" },
        { name: "Git" },
        { name: "Hugging Face" },
        { name: "AWS" },
        { name: "Docker" },
      ],
    },
    {
      name: "Web Technologies",
      originalName: "Web Technologies",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Flask" },
      ],
    },
    {
      name: "MLOps",
      originalName: "MLOps",
      skills: [{ name: "MLflow" }, { name: "Kubeflow" }, { name: "DVC" }],
    },
    {
      name: "Modern AI Techniques",
      originalName: "Modern AI Techniques",
      skills: [{ name: "Transformers" }, { name: "GANs" }, { name: "Reinforcement Learning" }, { name: "LLMs" }],
    },
  ])

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null)
    } else {
      setActiveCategory(categoryName)
    }
  }

  const handleSkillClick = (categoryIndex: number, skillName: string) => {
    // Only allow changing the name for Programming Languages category
    if (categories[categoryIndex].originalName === "Programming Languages") {
      const updatedCategories = [...categories]
      updatedCategories[categoryIndex] = {
        ...updatedCategories[categoryIndex],
        name: skillName,
      }
      setCategories(updatedCategories)
      setSelectedSkill(skillName)
    }
  }

  const resetCategoryName = (categoryIndex: number) => {
    if (selectedSkill && categories[categoryIndex].originalName === "Programming Languages") {
      const updatedCategories = [...categories]
      updatedCategories[categoryIndex] = {
        ...updatedCategories[categoryIndex],
        name: updatedCategories[categoryIndex].originalName || "Programming Languages",
      }
      setCategories(updatedCategories)
      setSelectedSkill(null)
    }
  }

  const getActiveCategory = () => {
    return categories.find((category) => category.name === activeCategory || category.originalName === activeCategory)
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-20">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-blue-400">Technical Skills</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4"></div>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-300">My technical expertise and proficiency in various technologies.</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.originalName || category.name}
            className={`relative rounded-lg p-6 cursor-pointer transition-all duration-300 ${
              hoveredCategory === category.name || activeCategory === category.name
                ? "bg-gray-800"
                : "bg-gray-800/50 hover:bg-gray-800/80"
            }`}
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => {
              setHoveredCategory(null)
              resetCategoryName(categoryIndex)
            }}
            onClick={() => handleCategoryClick(category.name)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-bold text-center">
              {category.name}
              {category.originalName === "Programming Languages" && category.name !== "Programming Languages" && (
                <span className="text-sm ml-2 text-cyan-400">(Programming Language)</span>
              )}
            </h3>

            {/* Skills that appear on hover */}
            <AnimatePresence>
              {hoveredCategory === category.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 flex flex-wrap gap-2 justify-center"
                >
                  {category.skills.slice(0, 5).map((skill) => (
                    <motion.span
                      key={skill.name}
                      className={`bg-gray-700 text-sm px-3 py-1 rounded cursor-pointer ${
                        selectedSkill === skill.name ? "bg-cyan-700 text-white" : ""
                      }`}
                      whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSkillClick(categoryIndex, skill.name)
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                  {category.skills.length > 5 && (
                    <span className="bg-gray-700 text-sm px-3 py-1 rounded">+{category.skills.length - 5}</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Expanded Skills Display Area */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-12"
          >
            <h3 className="text-xl font-bold mb-6 text-center">{activeCategory}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {getActiveCategory()?.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  className={`bg-gray-700 text-white px-4 py-2 rounded ${
                    selectedSkill === skill.name ? "bg-cyan-700 text-white" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

